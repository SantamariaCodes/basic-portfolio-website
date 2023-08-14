import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectsButtonProps {
  onClick?: () => void;
}

const ProjectsButton: React.FC<ProjectsButtonProps> = ({ onClick }) => {
  const { t } = useTranslation('projectButton'); // Use 'projectButton' namespace

  return (
    <button 
      onClick={onClick} 
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
    >
      {t('projects')}  {/* Fetch the translated text */}
    </button>
  );
}

export default ProjectsButton;
