import React from 'react';

interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <h2 className="my-5 pb-2 md:pb-4  text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center relative font-extrabold">
        {title}
            <span className="absolute left-1/2 bottom-0 transform translate-x-[-50%] w-[70%] h-1 bg-buttonCustomColor"></span>
        </h2>
    );
};

export default SectionHeader;
