import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { APP_CONFIG, ROUTES } from '../constants';

interface PlaceholderProps {
  title: string;
  description?: string;
  showBackButton?: boolean;
}

const Placeholder: React.FC<PlaceholderProps> = ({ 
  title, 
  description = 'این صفحه هنوز در دست توسعه است.',
  showBackButton = true 
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <span className="text-lg font-semibold text-gray-900">{APP_CONFIG.APP_NAME}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="max-w-md mx-auto space-y-6">
              {/* Construction Icon */}
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {title}
                </h1>
                <p className="text-gray-600">
                  {description}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-blue-900 mb-2">
                  🚧 در دست توسعه
                </h2>
                <p className="text-blue-700 text-sm leading-relaxed">
                  این بخش از اپلیکیشن هنوز آماده نشده است. برای اضافه کردن محتوا و قابلیت‌های این صفحه، 
                  لطفاً ادامه توسعه را درخواست کنید.
                </p>
              </div>

              {showBackButton && (
                <div className="pt-4">
                  <Button
                    onClick={goBack}
                    variant="outline"
                    className="mx-auto"
                  >
                    بازگشت
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Pre-defined placeholder pages
export const AboutPage: React.FC = () => (
  <Placeholder 
    title="درباره م��" 
    description="اطلاعات کامل درباره شرکت و خدمات ما در این صفحه قرار خواهد گرفت." 
  />
);

export const ProfilePage: React.FC = () => (
  <Placeholder 
    title="پروفایل کاربری" 
    description="مدیریت اطلاعات شخصی و تنظیمات حساب کاربری شما." 
  />
);

export const SettingsPage: React.FC = () => (
  <Placeholder 
    title="تنظیمات" 
    description="پیکربندی حساب کاربری و تنظیمات اپلیکیشن." 
  />
);

export default Placeholder;
