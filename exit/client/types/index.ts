export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  path: string;
  isActive?: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface DashboardStats {
  totalUsers: number;
  totalProjects: number;
  totalSales: number;
  growthRate: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'pending' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  owner: User;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  path: string;
  badge?: number;
  children?: MenuItem[];
}
