import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { APP_CONFIG, ROUTES } from '../constants';
import { apiService } from '../services/api';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    apiService.removeAuthToken();
    navigate(ROUTES.LOGIN);
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
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                خوش آمدید
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 border-red-300 hover:bg-red-50"
              >
                خروج
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-12">
            <div className="max-w-md mx-auto space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  🎉 با موفقیت وارد شدید!
                </h1>
                <p className="text-gray-600">
                  شما با موفقیت در سیستم {APP_CONFIG.APP_NAME} وارد شده‌اید. اکنون می‌توانید از تمام امکانات استفاده کنید.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-blue-900 mb-2">
                  📋 صفحه داشبورد
                </h2>
                <p className="text-blue-700 text-sm leading-relaxed">
                  این صفحه یک نمونه اولیه است. برای اضافه کردن محتوای واقعی داشبورد، 
                  لطفاً ادامه توسعه را درخواست کنید تا امکانات مورد نیاز شما پیاده‌سازی شود.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <h3 className="font-medium text-gray-900 mb-1">پروفایل کاربری</h3>
                  <p className="text-xs text-gray-500">مدیریت اطلاعات شخصی</p>
                </div>
                
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <h3 className="font-medium text-gray-900 mb-1">تنظیمات</h3>
                  <p className="text-xs text-gray-500">پیکربندی حساب کاربری</p>
                </div>
                
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <h3 className="font-medium text-gray-900 mb-1">سرویس‌ها</h3>
                  <p className="text-xs text-gray-500">دسترسی به خدمات</p>
                </div>
                
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <h3 className="font-medium text-gray-900 mb-1">پشتیبانی</h3>
                  <p className="text-xs text-gray-500">تماس با پشتیبانی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
