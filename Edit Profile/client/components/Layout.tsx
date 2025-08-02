import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  FolderOpen,
  BarChart3,
  User,
  ShoppingCart,
  MapPin,
  Settings,
  LogOut,
  Menu,
  Search
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const sidebarItems = [
  { icon: Home, label: "داشبورد", path: "/" },
  { icon: Package, label: "آیتم ها", path: "/items" },
  { icon: FolderOpen, label: "دسته بندی ها", path: "/categories" },
  { icon: BarChart3, label: "گزارش ها", path: "/reports" },
  { icon: MapPin, label: "محل های من", path: "/locations" },
  { icon: ShoppingCart, label: "خرید ها", path: "/shopping" },
  { icon: Package, label: "امانات", path: "/deposits" },
  { icon: LogOut, label: "خروج", path: "/logout" },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border h-16 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">چ</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">چی‌دارم</h1>
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="جستجو..."
              className="pl-4 pr-10 py-2 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">اولدوز بهاور</div>
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <nav className="mt-16 lg:mt-0 p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:mr-64 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
