import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Package,
  FolderOpen,
  MapPin,
  ShoppingCart,
  Shield,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: 'داشبورد', icon: LayoutDashboard, path: '/' },
  { id: 'items', label: 'آیتم ها', icon: Package, path: '/items' },
  { id: 'categories', label: 'دسته بندی ها', icon: FolderOpen, path: '/categories' },
  { id: 'reports', label: 'گزارش ها', icon: FileText, path: '/reports' },
  { id: 'places', label: 'محل های من', icon: MapPin, path: '/places' },
  { id: 'purchases', label: 'خرید ها', icon: ShoppingCart, path: '/purchases' },
  { id: 'deposits', label: 'امانات', icon: Shield, path: '/deposits' },
  { id: 'logout', label: 'خروج', icon: LogOut, path: '/logout' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col">
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4">
          <ul className="space-y-1">
            {NAVIGATION_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              const isLogout = item.id === 'logout';
              const isReports = item.id === 'reports';

              if (isLogout) {
                return (
                  <li key={item.id}>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors">
                      <Icon className="w-5 h-5" />
                      <span className="flex-1 text-right">{item.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                      isReports
                        ? "text-blue-600 hover:bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="flex-1">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
