import React from 'react';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="p-4 bg-gray-100 rounded-full mb-4">
        <Construction className="h-8 w-8 text-gray-600" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md">
        <p className="text-sm text-blue-800">
          این صفحه در حال توسعه است. برای اضافه کردن محتوای این بخش، می‌تونید ادامه دهید.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
