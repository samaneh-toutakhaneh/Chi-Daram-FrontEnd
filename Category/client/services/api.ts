import { Category, User, ApiResponse } from '@shared/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiService {
  private async fetchData<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Categories
  async getCategories(): Promise<ApiResponse<Category[]>> {
    return this.fetchData<ApiResponse<Category[]>>('/categories');
  }

  async getCategoryById(id: string): Promise<ApiResponse<Category>> {
    return this.fetchData<ApiResponse<Category>>(`/categories/${id}`);
  }

  // User
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.fetchData<ApiResponse<User>>('/user/me');
  }

  async updateUser(userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.fetchData<ApiResponse<User>>('/user/me', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }
}

export const apiService = new ApiService();
