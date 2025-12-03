import React from 'react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Card } from '../components/ui/Card';
import { H1, P } from '../components/ui/Typography';
import { DocumentProcessingCard } from '../components/ui/DocumentProcessingCard';

export const Landing: React.FC = () => {
    return (
        <PageWrapper className="bg-gradient-to-br from-teal-400 via-emerald-500 to-green-600 items-center justify-center p-6">
            <div className="max-w-3xl w-full space-y-8">
                <Card className="bg-white/95 backdrop-blur-sm space-y-6 !p-12">
                    <div className="text-center space-y-4">
                        <H1>Doc Lab Practice</H1>

                        <P className="text-xl !text-gray-700 font-medium">
                            Playground frontend para simular flujos de análisis de documentos.
                        </P>
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                        <P className="text-sm !text-gray-500 text-center">
                            Este proyecto es un entorno personal de práctica para UI de SaaS de documentos.
                            No está afiliado a ninguna empresa real.
                        </P>
                    </div>
                </Card>

                <DocumentProcessingCard />
            </div>
        </PageWrapper>
    );
};
