import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { TicketIcon } from '../components/Icons';

const Tickets: React.FC = () => {
  return (
    <PlaceholderPage
      title="تیکت‌ها"
      description="مدیریت تیکت‌های پشتیبانی و ارتباط با تیم فنی در این بخش امکان‌پذیر است."
      icon={<TicketIcon size={48} />}
    />
  );
};

export default Tickets;
