import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { CategoriesIcon } from '../components/Icons';

const Categories: React.FC = () => {
  return (
    <PlaceholderPage
      title="دسته‌بندی‌ها"
      description="ایجاد و مدیریت دسته‌بندی‌های مختلف برای وسایل شما. می‌توانید دسته‌های جدید ایجاد کنید و وسایل خود را در آن‌ها سازماندهی کنید."
      icon={<CategoriesIcon size={48} />}
    />
  );
};

export default Categories;
