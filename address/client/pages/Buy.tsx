import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { BuyIcon } from '../components/Icons';

const Buy: React.FC = () => {
  return (
    <PlaceholderPage
      title="خرید"
      description="خرید اشتراک، بسته‌های ویژه و سایر خدمات پرمیوم در این قسمت انجام می‌شود."
      icon={<BuyIcon size={48} />}
    />
  );
};

export default Buy;
