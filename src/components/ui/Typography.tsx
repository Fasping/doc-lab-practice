import React from 'react';

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
    <h1 className={`text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight ${className}`}>
        {children}
    </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
    <h2 className={`text-3xl font-bold text-slate-900 tracking-tight ${className}`}>
        {children}
    </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
    <h3 className={`text-xl font-semibold text-slate-900 ${className}`}>
        {children}
    </h3>
);

export const P: React.FC<TypographyProps> = ({ children, className = '' }) => (
    <p className={`text-base text-slate-600 leading-relaxed ${className}`}>
        {children}
    </p>
);
