import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from './Icons';

interface HeaderProps {
  onSearchChange?: (query: string) => void;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange, onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange?.(value);

    // Also log search for debugging
    console.log('Search query:', value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted:', searchQuery);
    // Here you would typically handle search submission
    if (searchQuery.trim()) {
      // Perform search logic
      console.log('Performing search for:', searchQuery);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm lg:text-lg">چ</span>
          </div>
          <div className="text-right hidden sm:block">
            <h1 className="text-base lg:text-lg font-bold text-gray-900">مدیریت وسایل شخصی</h1>
            <p className="text-xs text-gray-400">سامانه مدیریت وسایل</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-sm lg:max-w-md mx-4 lg:mx-8">
          <form onSubmit={handleSearchSubmit} className="relative">
            <SearchIcon
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="جستجو..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            />
          </form>
        </div>

        {/* User Profile */}
        <Link
          to="/profile"
          className="flex items-center gap-2 lg:gap-4 hover:bg-gray-50 rounded-lg p-2 transition-colors"
        >
          <div className="text-right hidden md:block">
            <p className="font-medium text-gray-900 text-sm lg:text-base hover:text-blue-600 transition-colors">اولدوز بهادر</p>
          </div>
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/40/40"
              alt="تصویر پروفایل"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
