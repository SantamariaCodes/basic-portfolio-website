import React from "react";
import TwitterIcon from "./TwitterIcon";
import LinkedInIcon from "./LinkedInIcon";
import GitHubIcon from "./GitHubIcon";

const SocialIcons: React.FC = () => (
  <div className="flex flex-col bg-white w-16 p-2  items-center justify-center  shadow-2xl ">
    <a
      href="https://twitter.com/DiegoSM47"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 hover:bg-deepBlue rounded transition "
    >
      <TwitterIcon className="h-6 w-6 text-black" />
    </a>
    <a
      href="https://www.linkedin.com/in/diego-santamaria-miguel"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 hover:bg-deepBlue rounded transition"
    >
      <LinkedInIcon className="h-6 w-6 text-black" />
    </a>
    <a
      href="https://github.com/CodeSantamaria"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 hover:bg-deepBlue rounded transition"
    >
      <GitHubIcon className="h-6 w-6 text-black" />
    </a>
  </div>
);

export default SocialIcons;
