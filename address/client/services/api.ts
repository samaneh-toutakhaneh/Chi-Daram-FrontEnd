import { ApiResponse, PaginatedResponse, Place, User, AddPlaceForm } from '../types';

// Base API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// HTTP client with error handling
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET request
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // POST request
  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Create API client instance
const apiClient = new ApiClient(API_BASE_URL);

// Places API
export const placesApi = {
  // Get all places for user
  getPlaces: (): Promise<ApiResponse<Place[]>> => 
    apiClient.get<Place[]>('/places'),

  // Get place by ID
  getPlace: (id: string): Promise<ApiResponse<Place>> => 
    apiClient.get<Place>(`/places/${id}`),

  // Create new place
  createPlace: (data: AddPlaceForm): Promise<ApiResponse<Place>> => 
    apiClient.post<Place>('/places', data),

  // Update place
  updatePlace: (id: string, data: Partial<AddPlaceForm>): Promise<ApiResponse<Place>> => 
    apiClient.put<Place>(`/places/${id}`, data),

  // Delete place
  deletePlace: (id: string): Promise<ApiResponse<void>> => 
    apiClient.delete<void>(`/places/${id}`),

  // Search places
  searchPlaces: (query: string): Promise<ApiResponse<Place[]>> => 
    apiClient.get<Place[]>(`/places/search?q=${encodeURIComponent(query)}`),
};

// User API
export const userApi = {
  // Get current user profile
  getProfile: (): Promise<ApiResponse<User>> => 
    apiClient.get<User>('/user/profile'),

  // Update user profile
  updateProfile: (data: Partial<User>): Promise<ApiResponse<User>> => 
    apiClient.put<User>('/user/profile', data),
};

// Auth API
export const authApi = {
  // Login
  login: (credentials: { email: string; password: string }): Promise<ApiResponse<{ token: string; user: User }>> => 
    apiClient.post<{ token: string; user: User }>('/auth/login', credentials),

  // Register
  register: (userData: { name: string; email: string; password: string; phone?: string }): Promise<ApiResponse<{ token: string; user: User }>> => 
    apiClient.post<{ token: string; user: User }>('/auth/register', userData),

  // Logout
  logout: (): Promise<ApiResponse<void>> => 
    apiClient.post<void>('/auth/logout', {}),

  // Refresh token
  refreshToken: (): Promise<ApiResponse<{ token: string }>> => 
    apiClient.post<{ token: string }>('/auth/refresh', {}),
};

// Export default API client for custom requests
export default apiClient;
