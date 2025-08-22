import { ApiResponse, PaginatedResponse, DashboardStats, ActivityItem, RecentItem, User } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(0, 'Network error occurred');
  }
}

export const dashboardApi = {
  // Get dashboard statistics
  getStats: (): Promise<ApiResponse<DashboardStats>> =>
    fetchApi('/dashboard/stats'),

  // Get recent activities
  getActivities: (limit = 10): Promise<PaginatedResponse<ActivityItem>> =>
    fetchApi(`/dashboard/activities?limit=${limit}`),

  // Get recent items
  getRecentItems: (limit = 6): Promise<PaginatedResponse<RecentItem>> =>
    fetchApi(`/dashboard/recent-items?limit=${limit}`),
};

export const userApi = {
  // Get current user profile
  getProfile: (): Promise<ApiResponse<User>> =>
    fetchApi('/user/profile'),

  // Update user profile
  updateProfile: (data: Partial<User>): Promise<ApiResponse<User>> =>
    fetchApi('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

export { ApiError };
