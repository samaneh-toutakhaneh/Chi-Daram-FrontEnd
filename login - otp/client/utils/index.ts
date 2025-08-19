import { VALIDATION_RULES } from '../constants';

// Phone number utilities
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as 09XX XXX XXXX
  if (cleaned.length === 11 && cleaned.startsWith('09')) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  
  return cleaned;
};

export const validatePhoneNumber = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  return VALIDATION_RULES.PHONE_NUMBER.PATTERN.test(cleaned);
};

export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

// OTP utilities
export const validateOtp = (otp: string): boolean => {
  return VALIDATION_RULES.OTP.PATTERN.test(otp);
};

export const formatOtp = (otp: string): string[] => {
  const cleaned = otp.replace(/\D/g, '');
  const array = cleaned.split('').slice(0, 6);
  
  // Fill remaining slots with empty strings
  while (array.length < 6) {
    array.push('');
  }
  
  return array;
};

export const joinOtp = (otpArray: string[]): string => {
  return otpArray.join('');
};

// Time utilities
export const formatTimer = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Input utilities
export const handleNumericInput = (value: string, maxLength?: number): string => {
  const numeric = value.replace(/\D/g, '');
  return maxLength ? numeric.slice(0, maxLength) : numeric;
};

// Error handling utilities
export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  if (error?.data?.message) return error.data.message;
  return 'خطایی رخ داده است';
};

// Form validation utilities
export const validateForm = (data: Record<string, any>, rules: Record<string, any>): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  Object.keys(rules).forEach(field => {
    const value = data[field];
    const rule = rules[field];
    
    if (rule.required && (!value || value.toString().trim() === '')) {
      errors[field] = rule.message || `${field} الزامی است`;
    }
    
    if (value && rule.pattern && !rule.pattern.test(value)) {
      errors[field] = rule.message || `${field} معتبر نیست`;
    }
    
    if (value && rule.minLength && value.length < rule.minLength) {
      errors[field] = rule.message || `${field} باید حداقل ${rule.minLength} کاراکتر باشد`;
    }
    
    if (value && rule.maxLength && value.length > rule.maxLength) {
      errors[field] = rule.message || `${field} باید حداکثر ${rule.maxLength} کاراکتر باشد`;
    }
  });
  
  return errors;
};

// Persian number utilities
export const toPersianNumbers = (str: string): string => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return str.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
};

export const toEnglishNumbers = (str: string): string => {
  const englishDigits = '0123456789';
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  
  return str.replace(/[۰-۹]/g, (digit) => {
    const index = persianDigits.indexOf(digit);
    return index !== -1 ? englishDigits[index] : digit;
  });
};

// Local storage utilities
export const storage = {
  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  
  get: (key: string): any => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },
  
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};
