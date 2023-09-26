import React from 'react';

interface ContactButtonProps {
    label: string;
    targetRef: React.RefObject<HTMLElement>;
}

const ContactButton: React.FC<ContactButtonProps> = ({ label, targetRef }) => {
    const handleClick = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button 
            onClick={handleClick}
            className="bg-deepBlue text-white py-2 px-6 lg:py-3 font-bold lg:px-8 rounded mb-8">
            {label}
        </button>
    );
};

export default ContactButton;
