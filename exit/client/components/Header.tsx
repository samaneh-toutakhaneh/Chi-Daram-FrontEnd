import { useState } from 'react';
import { Search, Bell, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { User as UserType } from '../types';

interface HeaderProps {
  user?: UserType;
  onLogout?: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">چ</span>
          </div>
          <span className="mr-3 text-lg font-semibold text-foreground">
            مدیریت وسایل شخصی
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full pr-10 pl-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-colors"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {isNotificationsOpen && (
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-border z-50">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">اعلان‌ها</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 text-sm text-muted-foreground">
                    هیچ اعلان جدیدی وجود ندارد
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg transition-colors"
            >
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                {user?.name || 'اولدوز بهاور'}
              </span>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                {user?.avatar ? (
                  <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full" />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
              </div>
            </button>

            {isProfileOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border z-50">
                <div className="p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      {user?.avatar ? (
                        <img src={user.avatar} alt="Profile" className="w-10 h-10 rounded-full" />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {user?.name || 'اولدوز بهاور'}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {user?.username || '@اولدوز.بهاور'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button className="w-full flex items-center justify-end gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors">
                    <span>پروفایل</span>
                    <User className="w-4 h-4" />
                  </button>
                  <button className="w-full flex items-center justify-end gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors">
                    <span>تنظیمات</span>
                    <Settings className="w-4 h-4" />
                  </button>
                  <div className="border-t border-border my-2"></div>
                  <button 
                    onClick={onLogout}
                    className="w-full flex items-center justify-end gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <span>خروج</span>
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
