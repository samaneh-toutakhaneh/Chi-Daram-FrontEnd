import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { BuyIcon } from '../components/Icons';

const Purchases: React.FC = () => {
  return (
    <PlaceholderPage
      title="خریدها"
      description="تاریخچه خریدهای شما و مدیریت اطلاعات مالی مربوط به وسایل خریداری شده در این قسمت ثبت می‌شود."
      icon={<BuyIcon size={48} />}
    />
  );
};

export default Purchases;
