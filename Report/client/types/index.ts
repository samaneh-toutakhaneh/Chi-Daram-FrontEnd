// Core Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface Report {
  id: string;
  activityType: string;
  amount: number;
  transactionTime: string;
  status: 'completed' | 'pending' | 'failed' | 'cancelled';
  description?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalReports: number;
  completedReports: number;
  pendingReports: number;
  totalAmount: number;
  monthlyGrowth: number;
}

// API Request/Response Types
export interface ReportsResponse {
  reports: Report[];
  total: number;
  page: number;
  limit: number;
}

export interface CreateReportRequest {
  activityType: string;
  amount: number;
  description?: string;
}

export interface UpdateReportRequest {
  activityType?: string;
  amount?: number;
  status?: Report['status'];
  description?: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  avatar?: string;
}

// UI State Types
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

export interface FilterState {
  status?: Report['status'];
  dateFrom?: string;
  dateTo?: string;
  searchQuery?: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  isActive?: boolean;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface ReportForm {
  activityType: string;
  amount: string;
  description: string;
}

// Component Props Types
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}
