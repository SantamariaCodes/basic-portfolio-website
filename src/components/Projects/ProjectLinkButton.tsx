import React from "react";

interface ProjectLinkButtonProps {
  label: string;
  url: string;
}

const ProjectLinkButton: React.FC<{ label: string; url: string }> = ({ label, url }) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-deepBlue hover:bg-lessDeepBlue  text-white py-2 px-6 lg:py-3 font-bold lg:px-8 rounded mb-8"
      >
        {label}
      </a>
    );
  };
  

export default ProjectLinkButton;
