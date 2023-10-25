import React from "react";
import { useTranslation } from "react-i18next";

interface ProjectsButtonProps {
  onClick?: () => void;
}

const ProjectsButton: React.FC<ProjectsButtonProps> = ({ onClick }) => {
  const { t } = useTranslation("projectButton"); // Use 'projectButton' namespace

  return (
    <button
      onClick={onClick}
      className="bg-buttonbgCustomColor hover:bg-hoverbgCustomColor 420px:text-base text-sm sm:text-lg lg:text-xl  font-extrabold px-8 py-2  md:py-3 md:px-14 rounded"
    >
      {t("projects")}
    </button>
  );
};

export default ProjectsButton;
