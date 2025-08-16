import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

interface NavbarProps {
  title: string;
  onMenuClick?: () => void;
}

export default function Navbar({ title, onMenuClick }: NavbarProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Right side - Title and search */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">چ</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 min-w-[300px]">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="جستجو..."
                className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 flex-1"
              />
            </div>
          </div>
        </div>

        {/* Left side - Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            ا
          </div>
        </div>
      </div>
    </header>
  );
}
