import React from 'react';
import { FileQuestion } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <FileQuestion className="w-8 h-8 text-gray-400" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        {description || 'این صفحه هنوز در حال توسعه است. برای تکمیل محتوای این صفحه، لطفاً ادامه دهید.'}
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md">
        <p className="text-blue-800 text-sm">
          برای افزودن محتوا به این صفحه، از دستیار هوشمند خود بخواهید تا صفحه {title} را پیاده‌سازی کند.
        </p>
      </div>
    </div>
  );
}
