import { LayoutDashboard, Package2, Package, BarChart3, MapPin, ShoppingCart, Handshake, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'داشبورد', href: '/', color: 'text-gray-500' },
  { icon: Package2, label: 'آیتم ها', href: '/items', color: 'text-gray-500' },
  { icon: Package, label: 'دسته بندی ها', href: '/categories', color: 'text-gray-500' },
  { icon: BarChart3, label: 'گزارش ها', href: '/reports', color: 'text-gray-500' },
  { icon: MapPin, label: 'محل های من', href: '/locations', color: 'text-gray-500' },
  { icon: ShoppingCart, label: 'خرید ها', href: '/purchases', color: 'text-gray-500' },
  { icon: Handshake, label: 'امانات', href: '/loans', color: 'text-gray-500' },
  { icon: LogOut, label: 'خروج', href: '/logout', color: 'text-gray-500' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-l border-gray-200 h-screen py-6 px-4">
      <div className="space-y-1">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center justify-start py-3 px-4 rounded-lg transition-colors hover:bg-gray-50",
                isActive && "bg-blue-50"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 ml-3",
                isActive ? "text-blue-600" : item.color
              )} />
              <span className={cn(
                "text-sm font-medium",
                isActive ? "text-blue-600" : "text-gray-700"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
