import React from 'react';

interface PageWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
    return (
        <div className={`min-h-screen w-full bg-gray-50 flex flex-col ${className}`}>
            {children}
        </div>
    );
};
