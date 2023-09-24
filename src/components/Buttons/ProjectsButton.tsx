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
      className="bg-deepBlue hover:bg-lessDeepBlue text-white  font-bold py-2 px-4 rounded"
    >
      {t("projects")}
    </button>
  );
};

export default ProjectsButton;
