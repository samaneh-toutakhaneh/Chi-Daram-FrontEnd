import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { ItemsIcon } from '../components/Icons';

const Items: React.FC = () => {
  return (
    <PlaceholderPage
      title="آیتم‌ها"
      description="مدیریت تمام وسایل و اقلام شخصی شما در این بخش انجام می‌شود. می‌توانید وسایل خود را دسته‌بندی کرده و اطلاعات آن‌ها را ثبت کنید."
      icon={<ItemsIcon size={48} />}
    />
  );
};

export default Items;
