import { Link } from 'react-router-dom';

export default function About() {
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
              <Link to="/about" className="text-blue-600 font-medium">درباره ما</Link>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">پروفایل</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">درباره ثبت نام</h1>
          <p className="text-xl text-gray-600">
            این صفحه هنوز در حال توسعه است و محتوای کاملی در آینده اضافه خواهد شد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">ماموریت ما</h2>
            <p className="text-gray-600">
              محتوای این بخش در مراحل بعدی توسعه اضافه خواهد شد. برای تکمیل این صفحه، 
              لطفاً از پرامپت‌های بعدی استفاده کنید.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">چشم‌انداز ما</h2>
            <p className="text-gray-600">
              محتوای این بخش در مراحل بعدی توسعه اضافه خواهد شد. برای تکمیل این صفحه، 
              لطفاً از پرامپت‌های بعدی استفاده کنید.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
