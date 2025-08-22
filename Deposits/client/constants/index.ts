export const APP_NAME = 'پی‌چاین';

export const ROUTES = {
  HOME: '/',
  DEPOSITS: '/deposits',
  TRANSACTIONS: '/transactions',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  HELP: '/help',
  NOTIFICATIONS: '/notifications',
} as const;

export const SIDEBAR_ITEMS = [
  {
    id: 'dashboard',
    title: 'داشبورد',
    icon: 'LayoutDashboard',
    href: ROUTES.HOME,
  },
  {
    id: 'profile',
    title: 'پروفایل من',
    icon: 'User',
    href: ROUTES.PROFILE,
  },
  {
    id: 'deposits',
    title: 'سپرده های من',
    icon: 'Wallet',
    href: ROUTES.DEPOSITS,
  },
  {
    id: 'transactions',
    title: 'گزارش ها',
    icon: 'FileText',
    href: ROUTES.TRANSACTIONS,
  },
  {
    id: 'locations',
    title: 'مکان های من',
    icon: 'MapPin',
    href: '/locations',
  },
  {
    id: 'purchases',
    title: 'خرید ها',
    icon: 'ShoppingBag',
    href: '/purchases',
  },
  {
    id: 'settings',
    title: 'تنظیمات',
    icon: 'Settings',
    href: ROUTES.SETTINGS,
  },
  {
    id: 'exit',
    title: 'خروج',
    icon: 'LogOut',
    href: '/logout',
  },
];

export const MOCK_USER = {
  id: '1',
  name: 'اونیور بازار',
  email: 'user@example.com',
  avatar: '/api/placeholder/40/40',
  phone: '09123456789',
};

export const MOCK_DEPOSITS = [
  {
    id: '1',
    title: 'کفش کتونی‌رودی',
    amount: 140202039,
    currency: 'IRR',
    date: '2024-01-15',
    status: 'pending' as const,
    type: 'لباس ورزشی',
    description: 'نام برانت: آدیداس',
    image: '/api/placeholder/60/60',
  },
  {
    id: '2',
    title: 'اپیک پرو',
    amount: 0,
    currency: 'IRR',
    date: '2024-01-14',
    status: 'completed' as const,
    type: 'لوازم دیجیتال',
    description: 'دسته بندی: موبایل',
    image: '/api/placeholder/60/60',
  },
  {
    id: '3',
    title: 'کتاب جنگ ستارگان',
    amount: 0,
    currency: 'IRR',
    date: '2024-01-13',
    status: 'completed' as const,
    type: 'کتاب ها',
    description: 'دسته بندی: تاریخی',
    image: '/api/placeholder/60/60',
  },
];
