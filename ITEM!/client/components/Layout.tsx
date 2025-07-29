import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Home, 
  Package, 
  FolderOpen, 
  BarChart3, 
  Settings, 
  Clock, 
  MapPin, 
  ShoppingCart, 
  LogOut,
  User
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'داشبورد', path: '/', id: 'dashboard' },
    { icon: Package, label: 'آیتم ها', path: '/items', id: 'items' },
    { icon: FolderOpen, label: 'دسته بندی ها', path: '/categories', id: 'categories' },
    { icon: BarChart3, label: 'گزارش ها', path: '/reports', id: 'reports' },
    { icon: User, label: 'ویرایش پروفایل', path: '/profile', id: 'profile' },
    { icon: Clock, label: 'امانات', path: '/history', id: 'history' },
    { icon: MapPin, label: 'محل های من', path: '/addresses', id: 'addresses' },
    { icon: ShoppingCart, label: 'خرید ها', path: '/purchases', id: 'purchases' },
    { icon: LogOut, label: 'خروج', path: '/logout', id: 'logout', className: 'text-red-500' },
  ];

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-sm border-l border-gray-200 flex flex-col">
        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">ا</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">اولدوز بهاور</h3>
              <p className="text-sm text-gray-500">۰۹۱۲۳��۵۶۷۸۹</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.path);
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${item.className || ''}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">چ</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">چی‌دارم</h1>
            </div>

            {/* Search and User Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="جستجو"
                  className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">ا</span>
                </div>
                <span className="font-medium text-gray-900">اولدوز بهاور</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
