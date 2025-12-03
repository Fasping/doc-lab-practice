import React from 'react';

interface MetricCardProps {
    title: string;
    value: string | number;
    subtext: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtext }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-5 border border-slate-100">
            <h3 className="text-sm font-medium text-slate-500">{title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">{value}</span>
                <span className="text-xs text-slate-400">{subtext}</span>
            </div>
        </div>
    );
};
