import { Link } from 'react-router-dom';
import {
  BarChart3,
  Package,
  Tag,
  FileBarChart,
  MapPin,
  ShoppingCart,
  Shield,
  User,
  LogOut
} from 'lucide-react';
import { SIDEBAR_ITEMS } from '@/constants';
import { cn } from '@/lib/utils';

const iconMap = {
  BarChart3,
  Package,
  Tag,
  FileBarChart,
  MapPin,
  ShoppingCart,
  Shield,
  User,
  LogOut,
};

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn(
      "w-64 bg-white border-l border-gray-200 fixed right-0 top-0 h-full overflow-y-auto z-10",
      className
    )}>
      <div className="py-8 px-4">
        <nav className="space-y-1">
          {SIDEBAR_ITEMS.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];

            return (
              <Link
                key={item.id}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  item.isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <div className="flex items-center justify-center w-5 h-5">
                  <IconComponent className="h-4 w-4" />
                </div>
                <span className="flex-1">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
