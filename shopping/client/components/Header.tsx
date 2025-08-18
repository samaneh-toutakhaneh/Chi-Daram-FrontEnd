import { Search, Bell, ChevronDown, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 px-6 flex items-center justify-between">
      {/* Right side - Logo and title */}
      <div className="flex items-center space-x-4 space-x-reverse">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">چ</span>
        </div>
        <h1 className="text-lg font-semibold text-gray-900">
          مدیریت وسایل شخصی
        </h1>
      </div>

      {/* Left side - Search and profile */}
      <div className="flex items-center space-x-4 space-x-reverse">
        {/* Search */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="جستجو"
            className="w-64 h-10 pr-10 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Profile section */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">اولدوز بهادر</p>
            <p className="text-xs text-gray-500">اولدوز بهادر</p>
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-gray-600" />
          </div>
          <Bell className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
