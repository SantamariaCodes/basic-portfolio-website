import React from "react";
import { useTranslation, Trans } from "react-i18next";
import SectionHeader from "./Typography/SectionHeader";
import SubsectionHeader from "./Typography/SubsectionHeader ";
import ContactButton from "./Buttons/ContactButton";
import { skillsList } from "./aboutConstants";
interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}
const About: React.ForwardRefRenderFunction<HTMLDivElement, AboutProps> = (
  props
) => {
  const { aboutRef, contactRef } = props;
  const { t } = useTranslation("about");

  return (
    <div
      ref={aboutRef}
      className="section  flex flex-col items-center md:pt-10 p-5 bg-white  pb-20"
    >
      <SectionHeader title={t("title")} />

      <div className="text-left w-full lg:mt-12 md:flex md:space-x-4 gap-10 max-w-[1420px]">
        <div className="md:w-1/2 md:p-5">
          <SubsectionHeader title={t("introductionHeader")} />

          <div
            className="mb-8 leading-8 xl:text-lg"
            dangerouslySetInnerHTML={{ __html: t("introduction") }}
          />
          <ContactButton label={t("contactButton")} targetRef={contactRef} />
        </div>
        <div className="md:w-1/2 md:p-5">
          <SubsectionHeader title={t("skillsHeader")} />

          <div className="flex flex-wrap">
            {skillsList.map((skill: string, index: number) => (
              <span
                key={index}
                className="bg-gray-300 text-sm sm:text-base md:text-base lg:text-lg text-gray-500 font-bold py-2 px-3 sm:py-2 sm:px-4 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-md m-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
