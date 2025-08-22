import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Package,
  Tag,
  FileBarChart,
  MapPin,
  ShoppingCart,
  Shield,
  User,
  LogOut,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { id: 'dashboard', title: 'داشبورد', href: '/', icon: BarChart3 },
  { id: 'items', title: 'آیتم ها', href: '/items', icon: Package },
  { id: 'categories', title: 'دسته بندی ها', href: '/categories', icon: Tag },
  { id: 'reports', title: 'گزارش ها', href: '/reports', icon: FileBarChart },
  { id: 'locations', title: 'محل های من', href: '/locations', icon: MapPin },
  { id: 'purchases', title: 'خرید ها', href: '/purchases', icon: ShoppingCart },
  { id: 'deposits', title: 'امانات', href: '/deposits', icon: Shield },
  { id: 'profile', title: 'پروفایل', href: '/profile', icon: User },
  { id: 'logout', title: 'خروج', href: '/logout', icon: LogOut },
];

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export default function Sidebar({ className, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "w-64 bg-white border-l border-gray-200 h-screen flex flex-col fixed right-0 top-0 z-10 overflow-y-auto",
        className
      )}
    >
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
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href ||
              (item.href === '/categories' && location.pathname === '/');
            const isLogout = item.id === 'logout';

            if (isLogout) {
              return (
                <li key={item.id}>
                  <button
                    onClick={() => { console.log('Logout clicked'); onClose?.(); }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200 w-full"
                  >
                    <Icon className="h-5 w-5 text-red-600" />
                    <span className="font-medium text-right flex-1">{item.title}</span>
                    <ChevronLeft size={16} className="text-red-400" />
                  </button>
                </li>
              );
            }

            return (
              <li key={item.id}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 group",
                    isActive
                      ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                    )}
                  />
                  <span className="font-medium text-right flex-1">{item.title}</span>
                  <ChevronLeft
                    size={16}
                    className={cn(
                      isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
