export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
}

export interface Deposit {
  id: string;
  title: string;
  amount: number;
  currency: string;
  date: string;
  status: 'pending' | 'completed' | 'failed';
  type: string;
  description?: string;
  image?: string;
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  currency: string;
  date: string;
  status: 'pending' | 'completed' | 'failed';
  type: 'deposit' | 'withdrawal' | 'transfer';
  description?: string;
  image?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface SidebarItem {
  id: string;
  title: string;
  icon: string;
  href: string;
  badge?: string | number;
}
