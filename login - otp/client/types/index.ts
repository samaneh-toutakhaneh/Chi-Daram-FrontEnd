// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Auth Types
export interface LoginRequest {
  phoneNumber: string;
}

export interface VerifyOtpRequest {
  phoneNumber: string;
  otp: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface User {
  id: string;
  phoneNumber: string;
  name?: string;
  email?: string;
  isVerified: boolean;
}

// OTP Types
export interface OtpState {
  phoneNumber: string;
  otp: string[];
  isLoading: boolean;
  error: string | null;
  timeLeft: number;
  canResend: boolean;
}

// Form Types
export interface FormErrors {
  [key: string]: string;
}

// Component Props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
  maxLength?: number;
  type?: 'text' | 'tel' | 'number';
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
