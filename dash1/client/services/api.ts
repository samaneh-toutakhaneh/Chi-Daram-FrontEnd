// API Base Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface User {
  id: number;
  name: string;
  phone: string;
  avatar?: string;
}

export interface ListItem {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: number;
  type: string;
  description: string;
  date: string;
  listName: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface Product {
  id: number;
  name: string;
  price?: number;
  image: string;
  category: string;
  description?: string;
  createdAt: string;
}

export interface DashboardStats {
  totalLists: number;
  addedLists: number;
  archivedLists: number;
}

// HTTP Client Class
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET request
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // POST request
  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Create API client instance
const apiClient = new ApiClient(API_BASE_URL);

// API Service Functions
export const dashboardApi = {
  // Get dashboard statistics
  getStats: async (): Promise<DashboardStats> => {
    return apiClient.get<DashboardStats>('/dashboard/stats');
  },

  // Get recent activities
  getRecentActivities: async (): Promise<Activity[]> => {
    return apiClient.get<Activity[]>('/dashboard/activities');
  },

  // Get recent products/items
  getRecentProducts: async (): Promise<Product[]> => {
    return apiClient.get<Product[]>('/dashboard/products');
  },
};

export const listsApi = {
  // Get all lists
  getAll: async (): Promise<ListItem[]> => {
    return apiClient.get<ListItem[]>('/lists');
  },

  // Get list by ID
  getById: async (id: number): Promise<ListItem> => {
    return apiClient.get<ListItem>(`/lists/${id}`);
  },

  // Create new list
  create: async (data: Partial<ListItem>): Promise<ListItem> => {
    return apiClient.post<ListItem>('/lists', data);
  },

  // Update list
  update: async (id: number, data: Partial<ListItem>): Promise<ListItem> => {
    return apiClient.put<ListItem>(`/lists/${id}`, data);
  },

  // Delete list
  delete: async (id: number): Promise<void> => {
    return apiClient.delete<void>(`/lists/${id}`);
  },
};

export const userApi = {
  // Get current user profile
  getProfile: async (): Promise<User> => {
    return apiClient.get<User>('/user/profile');
  },

  // Update user profile
  updateProfile: async (data: Partial<User>): Promise<User> => {
    return apiClient.put<User>('/user/profile', data);
  },
};

export const authApi = {
  // Login
  login: async (credentials: { username: string; password: string }): Promise<{ token: string; user: User }> => {
    return apiClient.post<{ token: string; user: User }>('/auth/login', credentials);
  },

  // Logout
  logout: async (): Promise<void> => {
    localStorage.removeItem('auth_token');
    return apiClient.post<void>('/auth/logout');
  },

  // Register
  register: async (userData: { name: string; phone: string; password: string }): Promise<{ token: string; user: User }> => {
    return apiClient.post<{ token: string; user: User }>('/auth/register', userData);
  },
};

// Utility functions
export const setAuthToken = (token: string) => {
  localStorage.setItem('auth_token', token);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};
