import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Package, 
  PlusCircle, 
  FolderOpen, 
  BarChart3, 
  User, 
  MapPin, 
  LogOut,
  ShoppingCart,
  Edit
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const sidebarItems = [
  {
    icon: Home,
    label: "داشبورد",
    href: "/"
  },
  {
    icon: Package,
    label: "آیتم ها",
    href: "/items"
  },
  {
    icon: FolderOpen,
    label: "دسته بندی ها",
    href: "/categories"
  },
  {
    icon: BarChart3,
    label: "گزارش ها",
    href: "/reports"
  },
  {
    icon: MapPin,
    label: "محل های من",
    href: "/locations"
  },
  {
    icon: ShoppingCart,
    label: "خرید ها",
    href: "/purchases"
  },
  {
    icon: Edit,
    label: "امانات",
    href: "/deposits"
  },
  {
    icon: LogOut,
    label: "خروج",
    href: "/logout"
  },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">چی</span>
              </div>
              <span className="font-bold text-lg text-foreground">چی دارم</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground">
              جستجو
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">ن</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">نادین بلایر</div>
                <div className="text-xs text-muted-foreground">NATPHOT94</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-l border-border bg-sidebar min-h-[calc(100vh-4rem)]">
          <nav className="p-4">
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
