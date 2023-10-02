// Contact.tsx

import React from "react";
import SectionHeader from "../Typography/SectionHeader";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation("contact");
  return (
    <div
      ref={ref}
      className="section flex flex-col items-center p-5 md:py-10 lg:py-20  relative"
      style={{
        backgroundImage: 'url("/resources/img/bg-home.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-10"></div>{" "}
      <SectionHeader title={t("contactHeader")} />
      <div className="text-center lg:text-lg mb-4 2xl:mb-8 max-w-[1420px] w-full">
        {t("contactIntro")}
      </div>
      <div className="mt-10 z-10 w-full max-w-2xl p-5 bg-white shadow-xl rounded">
        <ContactForm onSubmit={(values) => console.log(values)} />
      </div>
    </div>
  );
});

export default Contact;
