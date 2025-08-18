import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  DashboardIcon,
  LocationIcon,
  ReportsIcon,
  TicketIcon,
  BuyIcon,
  SettingsIcon,
  ExitIcon,
  ChevronLeftIcon,
  ItemsIcon,
  CategoriesIcon,
  DepositsIcon
} from './Icons';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'داشبورد',
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    id: 'items',
    title: 'آیتم‌ها',
    icon: 'items',
    path: '/items',
  },
  {
    id: 'categories',
    title: 'دسته‌بندی‌ها',
    icon: 'categories',
    path: '/categories',
  },
  {
    id: 'reports',
    title: 'گزارش‌ها',
    icon: 'reports',
    path: '/reports',
  },
  {
    id: 'places',
    title: 'محل‌های من',
    icon: 'location',
    path: '/',
  },
  {
    id: 'purchases',
    title: 'خریدها',
    icon: 'buy',
    path: '/purchases',
  },
  {
    id: 'deposits',
    title: 'امانات',
    icon: 'deposits',
    path: '/deposits',
  },
  {
    id: 'exit',
    title: 'خروج',
    icon: 'exit',
    path: '/logout',
  },
];

const iconMap = {
  dashboard: DashboardIcon,
  location: LocationIcon,
  reports: ReportsIcon,
  ticket: TicketIcon,
  buy: BuyIcon,
  settings: SettingsIcon,
  items: ItemsIcon,
  categories: CategoriesIcon,
  deposits: DepositsIcon,
  exit: ExitIcon,
};

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const location = useLocation();

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent || DashboardIcon;
  };

  const handleLinkClick = () => {
    // Close sidebar on mobile when link is clicked
    onClose?.();
  };

  return (
    <aside className="w-64 bg-white border-l border-gray-200 h-screen flex flex-col">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-bold text-blue-600">منو</h2>
        <button
          onClick={onClose}
          className="p-1 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = getIcon(item.icon);
            const isActive = location.pathname === item.path;
            const isExit = item.id === 'exit';

            if (isExit) {
              // Special handling for exit button
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      // Add logout logic here
                      console.log('Logout clicked');
                      handleLinkClick();
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200 w-full"
                  >
                    <Icon size={20} />
                    <span className="font-medium text-right flex-1">{item.title}</span>
                    <ChevronLeftIcon size={16} className="text-red-400" />
                  </button>
                </li>
              );
            }

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 group ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon
                    size={20}
                    className={`${isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'}`}
                  />
                  <span className="font-medium text-right flex-1">{item.title}</span>
                  <ChevronLeftIcon
                    size={16}
                    className={`${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
