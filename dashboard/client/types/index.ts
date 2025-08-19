export interface User {
  id: string;
  name: string;
  avatar?: string;
  phone?: string;
}

export interface DashboardStats {
  totalItems: number;
  pendingItems: number;
  completedItems: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  type: 'success' | 'warning' | 'error' | 'info';
  date: string;
  status: string;
}

export interface RecentItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  date: string;
  category: string;
}

export interface SidebarItem {
  id: string;
  title: string;
  icon: string;
  path: string;
  isActive?: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
}
