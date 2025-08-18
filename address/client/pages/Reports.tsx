import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { ReportsIcon } from '../components/Icons';

const Reports: React.FC = () => {
  return (
    <PlaceholderPage
      title="گزارش‌ها"
      description="گزارش‌های تفصیلی از استفاده، بازدید و سایر آمار مکان‌های شما در این قسمت ارائه می‌شود."
      icon={<ReportsIcon size={48} />}
    />
  );
};

export default Reports;
