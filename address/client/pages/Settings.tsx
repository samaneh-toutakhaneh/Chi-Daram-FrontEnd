import React from 'react';
import PlaceholderPage from './PlaceholderPage';
import { SettingsIcon } from '../components/Icons';

const Settings: React.FC = () => {
  return (
    <PlaceholderPage
      title="تنظیمات"
      description="تنظیمات حساب کاربری، اعلان‌ها، حریم خصوصی و سایر تنظیمات سیستم در این بخش قرار دارد."
      icon={<SettingsIcon size={48} />}
    />
  );
};

export default Settings;
