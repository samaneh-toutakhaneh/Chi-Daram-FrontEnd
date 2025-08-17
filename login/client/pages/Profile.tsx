import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center ml-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <Link to="/" className="text-lg font-bold text-blue-600">ثبت نام</Link>
            </div>
            <nav className="flex space-x-8 space-x-reverse">
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">داشبورد</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">درباره ما</Link>
              <Link to="/profile" className="text-blue-600 font-medium">پروفایل</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">پروفایل کاربری</h1>
            <p className="text-gray-600">
              این صفحه هنوز در حال توسعه است. محتوای کاملی در مراحل بعدی اضافه خواهد شد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">اطلاعات شخصی</h3>
              <p className="text-gray-600 text-sm">
                فرم‌های ویرایش اطلاعات شخصی در مراحل بعدی اضافه خواهد شد.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">تنظیمات حساب</h3>
              <p className="text-gray-600 text-sm">
                تنظیمات امنیتی و حریم خصوصی در مراحل بعدی اضافه خواهد شد.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              برای تکمیل این صفحه، لطفاً از پرامپت‌های بعدی استفاده کنید.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
