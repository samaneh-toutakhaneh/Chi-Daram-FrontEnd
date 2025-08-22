import { Search, Bell, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn(
      "bg-white border-b border-gray-200 px-6 py-3",
      className
    )}>
      <div className="flex items-center justify-between">
        {/* Right side - Dashboard link */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
          </div>
          <span className="text-sm text-gray-600">داشبورد</span>
        </div>

        {/* Center - Logo and Brand */}
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-lg font-bold text-gray-900">چی دارم؟</h1>
            <p className="text-xs text-gray-400">سامانه مدیریت وسایل</p>
          </div>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">چ</span>
          </div>
        </div>

        {/* Left side - Search and Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="جستجو..."
              className="w-64 pr-10 pl-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">اردوان پهلوان</p>
              <p className="text-xs text-gray-500">اردوان پهلوان</p>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
