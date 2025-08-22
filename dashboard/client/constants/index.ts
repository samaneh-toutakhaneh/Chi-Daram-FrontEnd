import { SidebarItem } from '@/types';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'dashboard',
    title: 'داشبورد',
    icon: 'BarChart3',
    path: '/dashboard',
    isActive: true,
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
    icon: 'Tag',
    path: '/categories',
  },
  {
    id: 'reports',
    title: 'گزارش ها',
    icon: 'FileBarChart',
    path: '/reports',
  },
  {
    id: 'locations',
    title: 'مکان های من',
    icon: 'MapPin',
    path: '/locations',
  },
  {
    id: 'purchase',
    title: 'خرید ها',
    icon: 'ShoppingCart',
    path: '/purchase',
  },
  {
    id: 'security',
    title: 'امانات',
    icon: 'Shield',
    path: '/security',
  },
  {
    id: 'profile',
    title: 'پروفایل',
    icon: 'User',
    path: '/profile',
  },
  {
    id: 'logout',
    title: 'خروج',
    icon: 'LogOut',
    path: '/logout',
  },
];

export const STATUS_COLORS = {
  success: 'text-green-600 bg-green-50',
  warning: 'text-yellow-600 bg-yellow-50',
  error: 'text-red-600 bg-red-50',
  info: 'text-blue-600 bg-blue-50',
};

export const MOCK_RECENT_ITEMS = [
  {
    id: '1',
    name: 'کفش ورزشی نایک',
    description: 'کفش ورزشی مردانه',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop',
    date: '1403/12/20',
    category: 'ورزشی',
  },
  {
    id: '2',
    name: 'دوچرخه کوهستان',
    description: 'دوچرخه کوهستانی',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
    date: '1403/12/19',
    category: 'ورزشی',
  },
  {
    id: '3',
    name: 'تیشرت زنانه',
    description: 'تیشرت کتان',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    date: '1403/12/18',
    category: 'پوشاک',
  },
  {
    id: '5',
    name: 'دمبل ورزشی',
    description: 'دمبل قابل تنظیم',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    date: '1403/12/16',
    category: 'ورزشی',
  },
  {
    id: '6',
    name: 'هندزفری بلوتوث',
    description: 'هندزفری بی‌سیم',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    date: '1403/12/15',
    category: 'دیجیتال',
  },
];
