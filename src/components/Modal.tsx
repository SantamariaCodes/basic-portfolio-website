import React, { useEffect, useRef } from "react";

interface ModalProps {
  isVisible: boolean;
  title: string;
  onClose: () => void;
  autoCloseDuration?: number;
  type: "success" | "error";
}

const Modal: React.FC<ModalProps> = ({ isVisible, title, onClose, autoCloseDuration = 2000, type }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isVisible && autoCloseDuration > 0) {
      timeoutRef.current = setTimeout(onClose, autoCloseDuration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, autoCloseDuration, onClose]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div 
        className="bg-white p-8 rounded-lg shadow-md relative flex flex-col items-center"
      >
        {type === "success" ? 
          <span className="text-green-500 text-6xl mb-4">✔</span> :
          <span className="text-red-500 text-6xl mb-4">✖</span>
        }
        <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      </div>
    </div>
  );
};

export default Modal;
