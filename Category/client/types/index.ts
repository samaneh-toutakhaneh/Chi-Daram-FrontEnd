// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
}

// Category Types
export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  itemsCount: number;
  createdAt: string;
  updatedAt: string;
}

// Item Types
export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
  categoryId: string;
  price?: number;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalCategories: number;
  totalItems: number;
  totalUsers: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'create' | 'update' | 'delete';
  title: string;
  description: string;
  timestamp: string;
}

// Form Types
export interface CreateCategoryForm {
  title: string;
  description: string;
  image: File | null;
}

export interface CreateItemForm {
  title: string;
  description: string;
  categoryId: string;
  image: File | null;
  price?: number;
}

// Search and Filter Types
export interface SearchFilters {
  query?: string;
  categoryId?: string;
  sortBy?: 'title' | 'createdAt' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
