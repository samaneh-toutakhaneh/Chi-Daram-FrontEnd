import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { DepositsIcon } from '../components/Icons';

const Deposits: React.FC = () => {
  return (
    <PlaceholderPage
      title="امانات"
      description="مدیریت وسایلی که به صورت امانت به دیگران داده‌اید یا از آن‌ها گرفته‌اید. پیگیری وضعیت امانات و یادآوری‌ها."
      icon={<DepositsIcon size={48} />}
    />
  );
};

export default Deposits;
