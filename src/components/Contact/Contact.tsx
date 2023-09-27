// Contact.tsx

import React from "react";
import SectionHeader from "../Typography/SectionHeader";
import ContactForm from "./ContactForm";

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="section flex flex-col items-center p-5 md:py-10 lg:py-20 h-[100vh] sm:h-screen relative"
    style={{
      backgroundImage: 'url("/resources/img/bg-home.jpeg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-white bg-opacity-10"></div>{" "}
    <SectionHeader title="CONTACT" />
    <p className="text-center mt-4 max-w-lg z-10">
      Feel free to Contact me by submitting the form below and I will get back
      to you as soon as possible.
    </p>
    <div className="mt-10 z-10 w-full max-w-2xl p-5 bg-white shadow-xl rounded">
      <ContactForm onSubmit={(values) => console.log(values)} />
    </div>
  </div>
));

export default Contact;
