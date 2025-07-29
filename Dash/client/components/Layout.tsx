import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Package,
  Archive,
  FolderOpen,
  BarChart3,
  ShoppingCart,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  Shield
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const sidebarItems = [
  { name: 'داشبورد', path: '/', icon: Home },
  { name: 'آیتم ها', path: '/items', icon: Package },
  { name: 'محل های من', path: '/deposits', icon: Archive },
  { name: 'دسته‌بندی‌ها', path: '/categories', icon: FolderOpen },
  { name: 'گزارش‌ها', path: '/reports', icon: BarChart3 },
  { name: 'امانات', path: '/trusts', icon: Shield },
  { name: 'خرید ها', path: '/shopping-list', icon: ShoppingCart },
  { name: 'پروفایل', path: '/profile', icon: User },
  { name: 'تنظیمات', path: '/settings', icon: Settings },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 font-persian">
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-40">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">چ</span>
            </div>
            <span className="text-xl font-bold text-gray-800">چی‌دارم</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors hover:bg-gray-50 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                    : 'text-gray-600'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 right-0 left-0 p-6 border-t border-gray-200">
          <button className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors">
            <LogOut size={20} />
            <span>خروج</span>
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="mr-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="pr-10 pl-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell size={20} />
                <span className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User menu */}
              <div className="flex items-center gap-3">
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">امیر بهادر</div>
                  <div className="text-xs text-gray-500">۱۴۰۲/۱۲/۱۰۸</div>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
