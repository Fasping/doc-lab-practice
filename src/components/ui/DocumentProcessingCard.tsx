import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { H3, P } from './Typography';

interface MockResult {
    invoiceNumber: string;
    supplier: string;
    total: string;
    date: string;
}

export const DocumentProcessingCard: React.FC = () => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<MockResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setError(null);
            setResult(null);
        }
    };

    const handleSimulation = () => {
        if (!fileName) {
            setError('Select a PDF first');
            return;
        }

        setLoading(true);
        setResult(null);

        setTimeout(() => {
            setResult({
                invoiceNumber: 'INV-20391',
                supplier: 'Mock Supplier SA',
                total: '€1.248,00',
                date: '2024-10-22',
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <Card className="w-full h-full">
            <div className="space-y-6">
                <div className="text-center space-y-2">
                    <H3>Document Analysis</H3>
                    <P className="text-sm">Upload a PDF and simulate extraction.</P>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col items-center justify-center w-full">
                        <label
                            htmlFor="file-upload"
                            className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors ${error ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500">PDF (MAX. 5MB)</p>
                            </div>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept=".pdf"
                                onChange={handleFileChange}
                            />
                        </label>
                        {fileName && (
                            <div className="mt-2 text-sm text-teal-600 font-medium flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                {fileName}
                            </div>
                        )}
                        {error && (
                            <div className="mt-2 text-sm text-red-500 font-medium">
                                {error}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <Button
                            onClick={handleSimulation}
                            disabled={loading}
                            className="w-full sm:w-auto min-w-[200px]"
                        >
                            {loading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : 'Simulate extraction'}
                        </Button>
                    </div>
                </div>

                {result && (
                    <div className="mt-8 border rounded-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Extraction Results</h4>
                        </div>
                        <div className="p-4 bg-white">
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Invoice Number</p>
                                    <p className="font-medium text-gray-900">{result.invoiceNumber}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Supplier</p>
                                    <p className="font-medium text-gray-900">{result.supplier}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Total</p>
                                    <p className="font-medium text-gray-900">{result.total}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Date</p>
                                    <p className="font-medium text-gray-900">{result.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};
