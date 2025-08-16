import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatDateTime, formatCurrency, getStatusLabel, getStatusColor } from '@/utils/formatters';
import { Report } from '@/types';
import { cn } from '@/lib/utils';

interface ReportsTableProps {
  reports: Report[];
  isLoading?: boolean;
}

const mockReports: Report[] = [
  {
    id: 'HI001',
    activityType: 'اضافه کردن جاروبرقی',
    amount: 2,
    transactionTime: '1403/08/13 - 14:30',
    status: 'completed',
    description: 'جاروبرقی سامسونگ مدل SC-4520',
    userId: '1',
    createdAt: '2024-01-15T14:30:00Z',
    updatedAt: '2024-01-15T14:30:00Z',
  },
  {
    id: 'HI002',
    activityType: 'حذف یخچال',
    amount: 1,
    transactionTime: '1403/08/13 - 12:15',
    status: 'pending',
    description: 'یخچال ال‌جی ساید بای ساید',
    userId: '1',
    createdAt: '2024-01-15T12:15:00Z',
    updatedAt: '2024-01-15T12:15:00Z',
  },
  {
    id: 'HI003',
    activityType: 'ویرایش تلویزیون',
    amount: 3,
    transactionTime: '1403/08/13 - 10:45',
    status: 'completed',
    description: 'تلویزیون سونی 55 اینچ 4K',
    userId: '1',
    createdAt: '2024-01-15T10:45:00Z',
    updatedAt: '2024-01-15T10:45:00Z',
  },
  {
    id: 'HI004',
    activityType: 'اضافه کردن ماشین لباسشویی',
    amount: 1,
    transactionTime: '1403/08/12 - 16:20',
    status: 'completed',
    description: 'ماشین لباسشویی بوش 8 کیلوگرم',
    userId: '1',
    createdAt: '2024-01-14T16:20:00Z',
    updatedAt: '2024-01-14T16:20:00Z',
  },
];

const StatusBadge = ({ status }: { status: Report['status'] }) => {
  const colorClass = getStatusColor(status);
  const label = getStatusLabel(status);
  
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
      colorClass
    )}>
      {label}
    </span>
  );
};


export default function ReportsTable({ reports = mockReports, isLoading = false }: ReportsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(reports.length / itemsPerPage);

  const handleViewAll = () => {
    console.log('View all clicked');
    // Navigate to full reports page or show modal
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Table Header */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-700">
          <div className="col-span-1">
            <button className="flex items-center gap-1 hover:text-gray-900">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="col-span-4 text-right">نوع فعالیت</div>
          <div className="col-span-2 text-right">تعداد</div>
          <div className="col-span-3 text-right">شناسه آیتم</div>
          <div className="col-span-2 text-right">زمان فعالیت</div>
        </div>
      </div>

      {/* Table Rows */}
      <div>
        {reports.map((report, index) => (
          <div key={report.id}>
            <div className="grid grid-cols-12 gap-4 p-4 text-sm border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="col-span-1">
                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="col-span-4 text-right font-medium text-gray-900">
                {report.activityType}
              </div>
              <div className="col-span-2 text-right text-gray-700">
                {report.amount}
              </div>
              <div className="col-span-3 text-right text-blue-600 font-medium">
                {report.id}
              </div>
              <div className="col-span-2 text-right text-gray-700">
                {report.transactionTime}
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Table Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>نمایش ۱ تا ۴ از ۴ نتیجه</div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              قبلی
            </button>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-md">{currentPage}</span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              بعدی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
