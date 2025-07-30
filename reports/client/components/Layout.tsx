import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  PlusCircle, 
  BarChart3, 
  User, 
  Settings, 
  Search,
  ShoppingCart,
  MapPin,
  LogOut,
  Menu
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navigation = [
    { name: 'داشبورد', href: '/', icon: Home },
    { name: 'آیتم ها', href: '/items', icon: Package },
    { name: 'دسته بندی ها', href: '/categories', icon: BarChart3 },
    { name: 'گزارش ها', href: '/reports', icon: BarChart3 },
    { name: 'محل های من', href: '/deposits', icon: MapPin },
    { name: 'خرید ها', href: '/shopping', icon: ShoppingCart },
    { name: 'امانات', href: '/trusts', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">چ</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">چی‌دارم</h1>
            <span className="text-sm text-gray-500">سامانه مدیریت اشیاء شخصی</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="جستجو..."
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">اولدوز بهادری</div>
                <div className="text-xs text-gray-500">۱۴۰۳/۰۹/۱۹</div>
              </div>
            </div>
            <button 
              className="md:hidden p-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed md:static inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          top-[73px] md:top-0
        `}>
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = item.name === 'گزارش ها' && location.pathname === '/';
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full">
                <LogOut className="h-5 w-5" />
                خروج
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:mr-64">
          <div className="p-6 pr-0">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
