import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { DashboardIcon } from '../components/Icons';

const Dashboard: React.FC = () => {
  return (
    <PlaceholderPage
      title="داشبورد"
      description="نمای کلی از فعالیت‌ها و آمار مکان‌های شما در این بخش نمایش داده خواهد شد."
      icon={<DashboardIcon size={48} />}
    />
  );
};

export default Dashboard;
