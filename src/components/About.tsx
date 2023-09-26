import React from "react";
import { useTranslation, Trans } from "react-i18next";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.ForwardRefRenderFunction<HTMLDivElement, AboutProps> = (
  props
) => {
  const { aboutRef } = props;
  const { t } = useTranslation("about");
  const skillsList: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "REACT",
    "SASS",
    "GIT",
    "Terminal",
    "Tailwind",
    "AI",
    "Boilerplate",
    "SCRUM",
  ];

  return (
    <div
      ref={aboutRef}
      className="section  flex flex-col items-center md:pt-10 p-5 bg-white  pb-20"
    >
      <h2 className="my-5 pb-2 md:pb-4 420px:text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center relative font-extrabold">
        {t("title")}
        <span className="absolute left-1/2 bottom-0 transform translate-x-[-50%] w-[70%] h-1 bg-deepBlue"></span>
      </h2>
      <div className="text-left w-full lg:mt-12 md:flex md:space-x-4 gap-10 max-w-[1420px]">
        <div className="md:w-1/2 md:p-5">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-left">
            {t("introductionHeader")}
          </h3>
          <div className="mb-8 leading-8 xl:text-lg">
            <div className="mb-4">
              <Trans components={[<strong />, <strong />]}>
                {t("introductionParagraph1")}
              </Trans>
            </div>
            <div className="mb-4">
              <Trans components={[<strong />, <strong />]}>
                {t("introductionParagraph2")}
              </Trans>
            </div>
            <div>{t("introductionParagraph3")}</div>
          </div>
          <button className="bg-deepBlue text-white py-2 px-6 lg:py-3 font-bold lg:px-8 rounded mb-8">
            {t("contactButton")}
          </button>
        </div>
        <div className="md:w-1/2 md:p-5">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-left">
            {t("skillsHeader")}
          </h3>
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
