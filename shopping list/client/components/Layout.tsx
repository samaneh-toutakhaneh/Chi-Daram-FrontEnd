import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Package, 
  Tags, 
  BarChart3, 
  User, 
  MapPin, 
  LogOut,
  Search,
  Bell,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { icon: Home, label: "داشبورد", path: "/" },
  { icon: Package, label: "آیتم ها", path: "/items" },
  { icon: Tags, label: "دسته بندی ها", path: "/categories" },
  { icon: BarChart3, label: "گزارش ها", path: "/reports" },
  { icon: MapPin, label: "محل های من", path: "/deposits" },
  { icon: Plus, label: "خرید ها", path: "/shopping", isBlue: true },
  { icon: User, label: "امانات", path: "/loans" },
  { icon: LogOut, label: "خروج", path: "/logout" },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background" dir="rtl">
      {/* Sidebar */}
      <div className="fixed right-0 top-0 z-40 h-screen w-64 bg-white border-l border-border shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-border">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
            <span className="text-lg font-bold text-white">چ</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">چی‌دارم</h1>
            <p className="text-sm text-muted-foreground">مدیریت وسایل شخصی</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  item.isBlue
                    ? "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>


      </div>

      {/* Main content */}
      <div className="mr-64 flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-border">
          <div className="flex items-center justify-between p-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="جستجو..."
                  className="pr-10"
                />
              </div>
            </div>

            {/* User section */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium">اولدوز بهاور</p>
                  <p className="text-xs text-muted-foreground">کاربر</p>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">ا</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
