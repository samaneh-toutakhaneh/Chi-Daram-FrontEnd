import { NavItem } from '@/types';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'dashboard',
    label: 'داشبورد',
    icon: 'LayoutDashboard',
    path: '/',
  },
  {
    id: 'reports',
    label: 'گزارشات',
    icon: 'FileText',
    path: '/reports',
  },
  {
    id: 'analytics',
    label: 'تحلیل‌ها',
    icon: 'BarChart3',
    path: '/analytics',
  },
  {
    id: 'transactions',
    label: 'تراکنش‌ها',
    icon: 'CreditCard',
    path: '/transactions',
  },
  {
    id: 'users',
    label: 'کاربران',
    icon: 'Users',
    path: '/users',
  },
  {
    id: 'settings',
    label: 'تنظیمات',
    icon: 'Settings',
    path: '/settings',
  },
];

export const USER_MENU_ITEMS = [
  {
    id: 'profile',
    label: 'پروفایل',
    icon: 'User',
    path: '/profile',
  },
  {
    id: 'account-settings',
    label: 'تنظیمات حساب',
    icon: 'Settings',
    path: '/account-settings',
  },
  {
    id: 'logout',
    label: 'خروج',
    icon: 'LogOut',
    path: '/logout',
  },
];
