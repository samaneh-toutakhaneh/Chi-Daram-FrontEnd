import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title = "مدیریت وسایل شخصی" }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-persian-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">چ</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        </div>

        {/* Centered Search */}
        <div className="flex-1 flex justify-center mx-8">
          <div className="relative w-96">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو..."
              className="block w-full pr-10 py-2 border border-gray-300 rounded-lg focus:ring-persian-blue-500 focus:border-persian-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-persian-blue-500 focus:ring-offset-2 rounded-lg">
            <span className="sr-only">نمایش اعلان‌ها</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-3.5-3.5a1.998 1.998 0 00-1.5-.5H15v4zM9 17H4l3.5-3.5a1.998 1.998 0 011.5-.5H9v4z" />
            </svg>
            {/* Notification badge */}
            <span className="absolute top-0 left-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-persian-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">اولدوز بهاور</p>
              <p className="text-xs text-gray-500">کاربر</p>
            </div>
            <svg className="w-4 h-4 text-gray-400 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
