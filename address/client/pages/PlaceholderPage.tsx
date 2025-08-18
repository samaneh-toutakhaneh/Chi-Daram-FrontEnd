import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  description, 
  icon 
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg border border-gray-200 min-h-96">
        <div className="flex flex-col items-center justify-center h-96 text-center p-8">
          {icon && (
            <div className="text-gray-400 mb-6">
              {icon}
            </div>
          )}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 mb-6 max-w-md">{description}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md">
            <p className="text-blue-800 text-sm">
              این صفحه در حال توسعه است. برای پیاده‌سازی کامل این بخش، لطفاً ادامه دهید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
