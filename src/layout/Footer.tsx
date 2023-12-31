import React from "react";
import LinkedInIcon from "../components/SocialIcons/LinkedInIcon";
import TwitterIcon from "../components/SocialIcons/TwitterIcon";
import GitHubIcon from "../components/SocialIcons/GitHubIcon";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="bg-navbarBgCustomColor text-white h-[400px] py-20">
      <div className="container p-5 md:p-10 mx-auto max-w-7xl flex flex-col-reverse md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl md:text-left text-center font-bold pb-6 sm:mb-0  ">
            {t("footerName")}
          </h2>

          <div
            className="text-center md:text-left font-semibold leading-6 md:hidden"
            dangerouslySetInnerHTML={{ __html: t("footerDescription") }}
          />

          <div
            className="hidden md:block text-center md:text-left font-semibold leading-4"
            dangerouslySetInnerHTML={{ __html: t("footerDescriptionDesktop") }}
          />
        </div>
        <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
          <h3 className="text-2xl font-semibold mb-6"> {t("socialHeader")}</h3>
          <div className="flex space-x-6">
            <LinkedInIcon
              className="w-8 h-8 hover:text-gray-300"
              href="https://www.linkedin.com/in/diego-santamaria-miguel"
              embeddedLink={true}
            />

            <TwitterIcon
              className="w-8 h-8 hover:text-gray-300"
              href="https://twitter.com/DiegoSM47"
              embeddedLink={true}
            />

            <GitHubIcon
              className="w-8 h-8 hover:text-gray-300"
              href="https://github.com/SantamariaCodes"
              embeddedLink={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
