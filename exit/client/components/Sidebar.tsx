import { useLocation, Link } from 'react-router-dom';
import {
  Home,
  Package,
  Grid3X3,
  FileText,
  MapPin,
  ShoppingCart,
  Shield,
  LogOut
} from 'lucide-react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'داشبورد',
    icon: 'Home',
    path: '/dashboard',
  },
  {
    id: 'items',
    title: 'آیتم ها',
    icon: 'Package',
    path: '/items',
  },
  {
    id: 'categories',
    title: 'دسته بندی ها',
    icon: 'Grid3X3',
    path: '/categories',
  },
  {
    id: 'reports',
    title: 'گزارش ها',
    icon: 'FileText',
    path: '/reports',
  },
  {
    id: 'locations',
    title: 'محل های من',
    icon: 'MapPin',
    path: '/locations',
  },
  {
    id: 'purchases',
    title: 'خریدها',
    icon: 'ShoppingCart',
    path: '/purchases',
  },
  {
    id: 'deposits',
    title: 'امانات',
    icon: 'Shield',
    path: '/deposits',
  },
  {
    id: 'exit',
    title: 'خروج',
    icon: 'LogOut',
    path: '/exit',
  },
];

const iconMap = {
  Home,
  Package,
  Grid3X3,
  FileText,
  MapPin,
  ShoppingCart,
  Shield,
  LogOut,
};

interface SidebarProps {
  isCollapsed?: boolean;
}

export function Sidebar({ isCollapsed = false }: SidebarProps) {
  const location = useLocation();

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="w-5 h-5" /> : <Home className="w-5 h-5" />;
  };

  return (
    <aside className={`bg-white border-r border-border min-h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.title : undefined}
              >
                {getIcon(item.icon)}
                {!isCollapsed && <span className="text-right flex-1">{item.title}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
