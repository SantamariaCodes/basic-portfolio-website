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
      className="section flex flex-col sm:p-10 md:p-16 items-center justify-center relative min-h-[90vh] sm:h-screen"
      style={{
        backgroundImage: 'url("/resources/img/bg-home.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-customColor bg-opacity-70"></div>
      <div className=" flex flex-col items-center  pb-5 gap-1 md:gap-4 px-5 sm:p-5 lg:pt-20 max-w-4xl z-10 ">
        <SectionHeader title={t("contactHeader")} />
        <p className="text-center   lg:text-lg mb-2 2xl:mb-8 max-w-[1420px] w-full">
          {t("contactIntro")}
        </p>
        <div className=" z-10 w-full max-w-2xl p-5 bg-white shadow-xl rounded">
          <ContactForm onSubmit={(values) => console.log(values)} />
        </div>
      </div>
    </div>
  );
});

export default Contact;
