import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  Package,
  BarChart3,
  User,
  MapPin,
  ShoppingCart,
  Bookmark,
  LogOut,
  ChevronDown
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    label: "داشبورد",
    icon: Home,
    href: "/",
    hasSubmenu: false
  },
  {
    id: "items",
    label: "آیتم ها",
    icon: Package,
    href: "/items",
    hasSubmenu: true
  },
  {
    id: "reports",
    label: "گزارش ها",
    icon: BarChart3,
    href: "/reports",
    hasSubmenu: false
  },
  {
    id: "categories",
    label: "دسته‌بندی‌ها",
    icon: Bookmark,
    href: "/categories",
    hasSubmenu: false
  },
  {
    id: "deposits",
    label: "محل های من",
    icon: MapPin,
    href: "/deposits",
    hasSubmenu: false
  },
  {
    id: "amanat",
    label: "امانات",
    icon: Package,
    href: "/amanat",
    hasSubmenu: false
  },
  {
    id: "shopping",
    label: "خرید ها",
    icon: ShoppingCart,
    href: "/shopping",
    hasSubmenu: false
  },
  {
    id: "profile",
    label: "پروفایل",
    icon: User,
    href: "/profile",
    hasSubmenu: false
  },
  {
    id: "logout",
    label: "خروج",
    icon: LogOut,
    href: "/logout",
    hasSubmenu: false
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-l border-gray-200 h-screen flex flex-col">
      {/* Logo Area */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            چ
          </div>
          <span className="mr-3 text-lg font-semibold text-gray-800">چی‌دارم</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors group",
                    isActive
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className={cn(
                    "w-5 h-5 ml-3 rtl:rotate-180",
                    isActive ? "text-blue-700" : "text-gray-400 group-hover:text-gray-500"
                  )} />
                  <span className="flex-1">{item.label}</span>
                  {item.hasSubmenu && (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-100">
        <div className="text-center text-xs text-gray-500">
          <p>توضیحات اضافی</p>
          <p>توضیحات تگی و لوگو برنامه</p>
        </div>
      </div>
    </div>
  );
}
