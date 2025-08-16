import React from 'react';
import DashboardLayout from './DashboardLayout';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ 
  title, 
  description = "این صفحه در حال توسعه است. لطفاً بعداً بررسی کنید." 
}: PlaceholderPageProps) {
  return (
    <DashboardLayout title={title}>
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="p-4 bg-gray-100 rounded-full mb-4">
          <Construction className="w-8 h-8 text-gray-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 max-w-md">{description}</p>
        <p className="text-sm text-gray-500 mt-4">
          برای ادامه توسعه این بخش، با تیم توسعه تماس بگیرید.
        </p>
      </div>
    </DashboardLayout>
  );
}
