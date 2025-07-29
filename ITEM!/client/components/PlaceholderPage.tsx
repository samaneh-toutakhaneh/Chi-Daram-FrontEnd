import React from 'react';
import { FileQuestion } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <FileQuestion className="w-8 h-8 text-gray-400" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-md">{description}</p>
      <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm">
        این صفحه در حال توسعه است. برای پیاده‌سازی کامل آن، لطفاً با برنامه‌نویس تماس بگیرید.
      </div>
    </div>
  );
}
