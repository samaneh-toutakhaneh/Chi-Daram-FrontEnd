export const APP_NAME = 'ثبت نام';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  ABOUT: '/about',
  PROFILE: '/profile',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    REFRESH: '/auth/refresh',
  },
} as const;

export const PHONE_REGEX = /^09\d{9}$/;

export const PERSIAN_MESSAGES = {
  LOGIN: {
    TITLE: 'ورود با ثبت نام',
    PHONE_PLACEHOLDER: 'شماره موبایل خود را وارد کنید',
    PHONE_LABEL: 'شماره موبایل',
    TERMS_TEXT: 'با ورود و استفاده از سامانه قوانین عضویت موافقت می‌کنم',
    LOGIN_BUTTON: 'ورود سیستم',
    PHONE_REQUIRED: 'شماره موبایل الزامی است',
    PHONE_INVALID: 'شماره موبایل نامعتبر است',
    TERMS_REQUIRED: 'پذیرش قوانین الزامی است',
  },
  COMMON: {
    LOADING: 'در حال بارگذاری...',
    ERROR: 'خطایی رخ داده است',
    SUCCESS: 'عملیات موفقیت‌آمیز',
  },
} as const;
