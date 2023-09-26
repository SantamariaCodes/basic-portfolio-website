import React from 'react';

interface SubsectionHeaderProps {
    title: string;
}

const SubsectionHeader: React.FC<SubsectionHeaderProps> = ({ title }) => {
    return (
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-left">
            {title}
        </h3>
    );
};

export default SubsectionHeader;
