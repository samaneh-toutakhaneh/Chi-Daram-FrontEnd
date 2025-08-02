import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Package,
  Archive,
  ClipboardList,
  BarChart3,
  User,
  Settings,
  LogOut,
  Search,
  Grid3X3,
  ShoppingBag,
  HandHeart
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const sidebarItems = [
  { icon: Home, label: 'داشبورد', href: '/' },
  { icon: Archive, label: 'آیتم ها', href: '/items' },
  { icon: Grid3X3, label: 'دسته بندی ها', href: '/categories' },
  { icon: BarChart3, label: 'گزارش ها', href: '/reports' },
  { icon: Package, label: 'محل های من', href: '/locations' },
  { icon: ShoppingBag, label: 'خریدها', href: '/purchases' },
  { icon: HandHeart, label: 'امانات', href: '/deposits' },
  { icon: LogOut, label: 'خروج', href: '/logout', danger: true },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-chi-daram-bg flex" dir="rtl">
      {/* Sidebar */}
      <div className="w-64 bg-chi-daram-sidebar border-l border-chi-daram-border flex flex-col">
        {/* Logo and Header */}
        <div className="p-6 border-b border-chi-daram-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-chi-daram-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">چ</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-chi-daram-text-dark">چی‌دارم</h1>
              <p className="text-sm text-chi-daram-text-light">مدیریت وسایل شخصی</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = false; // Remove all highlighting
              
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                      ${item.danger
                        ? 'text-red-500 hover:bg-red-50'
                        : item.href === '/locations'
                          ? 'text-chi-daram-blue hover:bg-gray-50'
                          : 'text-chi-daram-text-dark hover:bg-gray-50'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>


      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-chi-daram-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Header title removed */}
            </div>
            
            <div className="flex items-center justify-center flex-1">
              {/* Search - Centered */}
              <div className="relative">
                <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-80 pl-4 pr-10 py-2 border border-chi-daram-border rounded-lg focus:outline-none focus:ring-2 focus:ring-chi-daram-blue"
                />
              </div>
            </div>

            {/* User Avatar */}
            <div className="w-8 h-8 bg-chi-daram-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">اولدوز بهاور</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
