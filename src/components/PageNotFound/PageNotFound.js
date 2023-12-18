import React from 'react';
import { Header } from '../Header/Header';

export const NotFound = () => {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                    <p className="text-gray-600">The requested page could not be found.</p>
                </div>
            </div>
        </>
    );
};
