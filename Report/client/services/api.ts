// API Service Layer
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

interface ApiError {
  message: string;
  status?: number;
}

// Generic fetch wrapper with error handling
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
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
      const errorData = await response.json().catch(() => ({}));
      throw {
        message: errorData.message || `HTTP ${response.status}: ${response.statusText}`,
        status: response.status,
      } as ApiError;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw {
        message: error.message,
      } as ApiError;
    }
    throw error;
  }
}

// API Methods
export const api = {
  // Generic CRUD operations
  get: <T>(endpoint: string) => apiRequest<T>(endpoint),
  
  post: <T>(endpoint: string, data?: any) => 
    apiRequest<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),
    
  put: <T>(endpoint: string, data?: any) => 
    apiRequest<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),
    
  delete: <T>(endpoint: string) => 
    apiRequest<T>(endpoint, { method: 'DELETE' }),

  // Reports specific endpoints
  getReports: () => api.get<ReportsResponse>('/reports'),
  getReportById: (id: string) => api.get<Report>(`/reports/${id}`),
  createReport: (data: CreateReportRequest) => api.post<Report>('/reports', data),
  updateReport: (id: string, data: UpdateReportRequest) => 
    api.put<Report>(`/reports/${id}`, data),
  deleteReport: (id: string) => api.delete<void>(`/reports/${id}`),

  // Dashboard endpoints
  getDashboardStats: () => api.get<DashboardStats>('/dashboard/stats'),
  
  // User endpoints
  getCurrentUser: () => api.get<User>('/user/profile'),
  updateUserProfile: (data: UpdateUserRequest) => 
    api.put<User>('/user/profile', data),
};

// Export types
export type { ApiResponse, ApiError };
