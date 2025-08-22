import React, { useState } from 'react';
import { Search, User as UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
    role: string;
  };
  onSearchChange?: (query: string) => void;
  onMenuClick?: () => void;
}

export default function Header({ user, onSearchChange, onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Performing search for:', searchQuery);
    }
  };

  return (
    <header className={cn("bg-white border-b border-gray-200 px-6 py-3 mr-60", "shadow-sm")}>
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

        {/* Logo and Brand - Right side */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm lg:text-lg">چ</span>
          </div>
          <div className="text-right hidden sm:block">
            <h1 className="text-base lg:text-lg font-bold text-gray-900">چی دارم؟</h1>
            <p className="text-xs text-gray-400">سامانه مدیریت وسایل</p>
          </div>
        </div>

        {/* Search Bar - Center */}
        <div className="flex-1 max-w-md mx-8">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="جستجو..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-gray-50 text-gray-900 placeholder-gray-500 rounded-lg px-10 py-2.5 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-200 text-right"
            />
          </form>
        </div>

        {/* User Section - Left side */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="text-right hidden md:block">
                <p className="font-medium text-sm lg:text-base text-gray-900 hover:text-blue-600 transition-colors">{user.name}</p>
                <p className="text-xs text-gray-400">{user.role}</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-gray-200">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-gray-500" />
                  </div>
                )}
              </div>
            </>
          ) : (
            <Button variant="secondary" size="sm">
              ورود
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
