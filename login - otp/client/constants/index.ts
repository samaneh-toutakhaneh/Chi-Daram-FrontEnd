// API Constants
export const API_ENDPOINTS = {
  AUTH: {
    SEND_OTP: '/auth/send-otp',
    VERIFY_OTP: '/auth/verify-otp',
    RESEND_OTP: '/auth/resend-otp',
  },
  PROFILE: '/profile',
} as const;

// App Constants
export const APP_CONFIG = {
  OTP_LENGTH: 6,
  OTP_TIMER_SECONDS: 120,
  APP_NAME: 'چی دارم؟',
  COMPANY_NAME: 'فناوری‌های چی دارم',
} as const;

// Validation Rules
export const VALIDATION_RULES = {
  PHONE_NUMBER: {
    MIN_LENGTH: 11,
    MAX_LENGTH: 11,
    PATTERN: /^09\d{9}$/,
  },
  OTP: {
    LENGTH: 6,
    PATTERN: /^\d{6}$/,
  },
} as const;

// Messages
export const MESSAGES = {
  ERRORS: {
    INVALID_PHONE: 'شماره موبایل وارد شده معتبر نیست',
    INVALID_OTP: 'کد تایید وارد شده معتبر نیست',
    NETWORK_ERROR: 'خطا در اتصال به سرور',
    GENERIC_ERROR: 'خطایی رخ داده است',
    OTP_EXPIRED: 'کد تایید منقضی شده است',
    TOO_MANY_ATTEMPTS: 'تعداد تلاش‌های شما بیش از حد مجاز است',
  },
  SUCCESS: {
    OTP_SENT: 'کد تایید با موفقیت ارسال شد',
    OTP_VERIFIED: 'کد تایید با موفقیت بررسی شد',
    LOGIN_SUCCESS: 'با موفقیت وارد شدید',
  },
  INFO: {
    OTP_SENT_TO: 'کد تایید به شماره {phone} ارسال شد',
    RESEND_AVAILABLE: 'امکان ارسال مجدد کد',
    TIMER_REMAINING: 'زمان باقی‌مانده: {time}',
  },
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  PHONE_INPUT: '/phone-input',
  OTP_VERIFY: '/verify-otp',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  NOT_FOUND: '/404',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
  PHONE_NUMBER: 'phoneNumber',
} as const;
