import React from 'react';
import { AppShell } from '../components/layout/AppShell';
import { MetricCard } from '../components/ui/MetricCard';
import { DocumentProcessingCard } from '../components/ui/DocumentProcessingCard';
import { Card } from '../components/ui/Card';

export const Landing: React.FC = () => {
    return (
        <AppShell>
            <div className="space-y-6">
                {/* Metrics Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MetricCard
                        title="Documents processed"
                        value="19"
                        subtext="Last 7 days"
                    />
                    <MetricCard
                        title="Pending review"
                        value="3"
                        subtext="Needs attention"
                    />
                    <MetricCard
                        title="Rejected"
                        value="1"
                        subtext="Validation failed"
                    />
                </div>

                {/* Main Workspace */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
                    {/* Document Viewer (Left Column) */}
                    <div className="lg:col-span-7 flex flex-col">
                        <Card className="flex-1 flex flex-col">
                            <h3 className="text-sm font-medium text-slate-500 mb-4">Document viewer (placeholder)</h3>
                            <div className="flex-1 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                                <div className="text-center p-6">
                                    <svg className="w-12 h-12 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p className="text-slate-500 font-medium">PDF Preview Area</p>
                                    <p className="text-xs text-slate-400 mt-1">Select a document to view</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Analysis Panel (Right Column) */}
                    <div className="lg:col-span-5 flex flex-col">
                        <DocumentProcessingCard />
                    </div>
                </div>
            </div>
        </AppShell>
    );
};
