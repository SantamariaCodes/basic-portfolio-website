import React from 'react';

interface ProjectsButtonProps {
  onClick?: () => void;
}

const ProjectsButton: React.FC<ProjectsButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
    >
      Projects
    </button>
  );
}

export default ProjectsButton;
