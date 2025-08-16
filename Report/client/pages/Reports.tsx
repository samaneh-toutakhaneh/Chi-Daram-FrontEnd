import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ReportsTable from '@/components/ReportsTable';
import { Download } from 'lucide-react';

export default function Reports() {
  const handleDownload = () => {
    // Create mock data for download
    const reportData = [
      {
        activityType: 'اضافه کردن جاروبرقی',
        count: 2,
        itemId: 'HI001',
        activityTime: '1403/08/13 - 14:30'
      },
      {
        activityType: 'حذف یخچال',
        count: 1,
        itemId: 'HI002',
        activityTime: '1403/08/13 - 12:15'
      },
      {
        activityType: 'ویرایش تلویزیون',
        count: 3,
        itemId: 'HI003',
        activityTime: '1403/08/13 - 10:45'
      },
      {
        activityType: 'اضافه کردن ماشین لباسشویی',
        count: 1,
        itemId: 'HI004',
        activityTime: '1403/08/12 - 16:20'
      }
    ];

    // Convert to CSV format
    const headers = ['نوع فعالیت', 'تعداد', 'شناسه آیتم', 'زمان فعالیت'];
    const csvContent = [
      headers.join(','),
      ...reportData.map(row => [
        row.activityType,
        row.count,
        row.itemId,
        row.activityTime
      ].join(','))
    ].join('\n');

    // Add BOM for proper UTF-8 encoding in Excel
    const bom = '\uFEFF';
    const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create download link
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `گزارش_��عالیت_ها_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <DashboardLayout title="گزارشات">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex items-center justify-start">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            دانلود
          </button>
        </div>

        {/* Reports Table */}
        <ReportsTable />
      </div>
    </DashboardLayout>
  );
}
