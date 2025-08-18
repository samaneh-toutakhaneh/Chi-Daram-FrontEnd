import { 
  User, 
  LoginRequest, 
  LoginResponse, 
  ApiResponse, 
  PaginatedResponse,
  DashboardStats,
  Project,
  NotificationItem
} from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Generic fetch wrapper with error handling
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = localStorage.getItem('authToken');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        response.status,
        errorData.message || `HTTP ${response.status}: ${response.statusText}`
      );
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

// Authentication API
export const authApi = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiRequest<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    if (response.success && response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }
    
    return response.data;
  },

  async logout(): Promise<void> {
    await apiRequest('/auth/logout', { method: 'POST' });
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  },

  async getCurrentUser(): Promise<User> {
    const response = await apiRequest<User>('/auth/me');
    return response.data;
  },

  async refreshToken(): Promise<string> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await apiRequest<{ token: string }>('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });

    localStorage.setItem('authToken', response.data.token);
    return response.data.token;
  },
};

// User API
export const userApi = {
  async getUsers(page = 1, limit = 10): Promise<PaginatedResponse<User>> {
    const response = await apiRequest<User[]>(`/users?page=${page}&limit=${limit}`);
    return response as PaginatedResponse<User>;
  },

  async getUserById(id: string): Promise<User> {
    const response = await apiRequest<User>(`/users/${id}`);
    return response.data;
  },

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    const response = await apiRequest<User>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
    return response.data;
  },

  async deleteUser(id: string): Promise<void> {
    await apiRequest(`/users/${id}`, { method: 'DELETE' });
  },
};

// Dashboard API
export const dashboardApi = {
  async getStats(): Promise<DashboardStats> {
    const response = await apiRequest<DashboardStats>('/dashboard/stats');
    return response.data;
  },

  async getRecentProjects(): Promise<Project[]> {
    const response = await apiRequest<Project[]>('/dashboard/recent-projects');
    return response.data;
  },
};

// Projects API
export const projectsApi = {
  async getProjects(page = 1, limit = 10): Promise<PaginatedResponse<Project>> {
    const response = await apiRequest<Project[]>(`/projects?page=${page}&limit=${limit}`);
    return response as PaginatedResponse<Project>;
  },

  async getProjectById(id: string): Promise<Project> {
    const response = await apiRequest<Project>(`/projects/${id}`);
    return response.data;
  },

  async createProject(projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> {
    const response = await apiRequest<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
    return response.data;
  },

  async updateProject(id: string, projectData: Partial<Project>): Promise<Project> {
    const response = await apiRequest<Project>(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
    return response.data;
  },

  async deleteProject(id: string): Promise<void> {
    await apiRequest(`/projects/${id}`, { method: 'DELETE' });
  },
};

// Notifications API
export const notificationsApi = {
  async getNotifications(): Promise<NotificationItem[]> {
    const response = await apiRequest<NotificationItem[]>('/notifications');
    return response.data;
  },

  async markAsRead(id: string): Promise<void> {
    await apiRequest(`/notifications/${id}/read`, { method: 'POST' });
  },

  async markAllAsRead(): Promise<void> {
    await apiRequest('/notifications/read-all', { method: 'POST' });
  },
};

// Utility function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};

// Utility function to get current user token
export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

export { ApiError };
