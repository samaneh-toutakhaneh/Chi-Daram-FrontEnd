import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import ReportsTable from '@/components/ReportsTable';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/reports');
  };

  return (
    <DashboardLayout title="">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">تاریخچه فعالیت ها</h2>
          <button
            onClick={handleViewAll}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            مشاهده همه
          </button>
        </div>
        <ReportsTable />
      </div>
    </DashboardLayout>
  );
}
