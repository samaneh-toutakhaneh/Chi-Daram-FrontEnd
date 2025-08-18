// User types
export interface User {
  id: string;
  name: string;
  avatar?: string;
  phone?: string;
  email?: string;
}

// Place/Location types
export interface Place {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description?: string;
  isDefault?: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Navigation menu item
export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  path: string;
  isActive?: boolean;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Form types
export interface AddPlaceForm {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description?: string;
  isDefault?: boolean;
}

// Loading and Error states
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

// Search functionality
export interface SearchParams {
  query: string;
  filters?: {
    category?: string;
    location?: string;
  };
}
