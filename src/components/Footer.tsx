import React from "react";
import LinkedInIcon from "./SocialIcons/LinkedInIcon";
import TwitterIcon from "./SocialIcons/TwitterIcon";
import GitHubIcon from "./SocialIcons/GitHubIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white h-[400px] py-20">
      <div className="container p-5 md:p-10 mx-auto max-w-7xl flex flex-col-reverse sm:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl md:text-left text-center font-bold pb-6 sm:mb-0  ">
            DIEGO SANTAMARIA
          </h2>
          <p className=" text-center md:text-left  font-semibold leading-7">
            A Frontend focused Web Developer building the Frontend of Websites a
          </p>
      
        </div>
        <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
          <h3 className="text-2xl font-semibold mb-6">SOCIAL</h3>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-200"
            >
              <LinkedInIcon className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-200"
            >
              <TwitterIcon className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-200"
            >
              <GitHubIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
