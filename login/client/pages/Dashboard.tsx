import { Link } from 'react-router-dom';

export default function Dashboard() {
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
              <span className="text-lg font-bold text-blue-600">ثبت نام</span>
            </div>
            <nav className="flex space-x-8 space-x-reverse">
              <Link to="/dashboard" className="text-blue-600 font-medium">داشبورد</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">درباره ما</Link>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">پروفایل</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">داشبورد</h1>
          <p className="text-lg text-gray-600 mb-8">
            این صفحه هنوز در حال توسعه است. محتوای آن در مراحل بعدی اضافه خواهد شد.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">ورود موفقیت‌آمیز</h2>
            <p className="text-gray-600">
              شما با موفقیت وارد سیستم شدید. برای ادامه توسعه این صفحه، لطفاً از پرامپت‌های بعدی استفاده کنید.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
