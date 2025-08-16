import {
  ApiResponse,
  User,
  Category,
  Item,
  DashboardStats,
  CreateCategoryForm,
  CreateItemForm,
  SearchFilters,
  PaginatedResponse,
} from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(response.status, errorText || `HTTP ${response.status}`);
  }
  
  return response.json();
}

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

  // Add auth token if available
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    const response = await fetch(url, config);
    return await handleResponse<T>(response);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(0, 'Network error occurred');
  }
}

// Auth API
export const authApi = {
  login: async (email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  logout: async (): Promise<ApiResponse<null>> => {
    return apiRequest('/auth/logout', {
      method: 'POST',
    });
  },

  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    return apiRequest('/auth/me');
  },
};

// Categories API
export const categoriesApi = {
  getAll: async (filters?: SearchFilters): Promise<PaginatedResponse<Category>> => {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }
    
    const queryString = params.toString();
    return apiRequest(`/categories${queryString ? `?${queryString}` : ''}`);
  },

  getById: async (id: string): Promise<ApiResponse<Category>> => {
    return apiRequest(`/categories/${id}`);
  },

  create: async (data: CreateCategoryForm): Promise<ApiResponse<Category>> => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    if (data.image) {
      formData.append('image', data.image);
    }

    return apiRequest('/categories', {
      method: 'POST',
      headers: {}, // Remove Content-Type for FormData
      body: formData,
    });
  },

  update: async (id: string, data: Partial<CreateCategoryForm>): Promise<ApiResponse<Category>> => {
    const formData = new FormData();
    if (data.title) formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    if (data.image) formData.append('image', data.image);

    return apiRequest(`/categories/${id}`, {
      method: 'PUT',
      headers: {},
      body: formData,
    });
  },

  delete: async (id: string): Promise<ApiResponse<null>> => {
    return apiRequest(`/categories/${id}`, {
      method: 'DELETE',
    });
  },
};

// Items API
export const itemsApi = {
  getAll: async (filters?: SearchFilters): Promise<PaginatedResponse<Item>> => {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }
    
    const queryString = params.toString();
    return apiRequest(`/items${queryString ? `?${queryString}` : ''}`);
  },

  getById: async (id: string): Promise<ApiResponse<Item>> => {
    return apiRequest(`/items/${id}`);
  },

  getByCategoryId: async (categoryId: string, filters?: SearchFilters): Promise<PaginatedResponse<Item>> => {
    const params = new URLSearchParams({ categoryId });
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && key !== 'categoryId') {
          params.append(key, value.toString());
        }
      });
    }
    
    const queryString = params.toString();
    return apiRequest(`/items?${queryString}`);
  },

  create: async (data: CreateItemForm): Promise<ApiResponse<Item>> => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('categoryId', data.categoryId);
    if (data.price !== undefined) {
      formData.append('price', data.price.toString());
    }
    if (data.image) {
      formData.append('image', data.image);
    }

    return apiRequest('/items', {
      method: 'POST',
      headers: {},
      body: formData,
    });
  },

  update: async (id: string, data: Partial<CreateItemForm>): Promise<ApiResponse<Item>> => {
    const formData = new FormData();
    if (data.title) formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    if (data.categoryId) formData.append('categoryId', data.categoryId);
    if (data.price !== undefined) formData.append('price', data.price.toString());
    if (data.image) formData.append('image', data.image);

    return apiRequest(`/items/${id}`, {
      method: 'PUT',
      headers: {},
      body: formData,
    });
  },

  delete: async (id: string): Promise<ApiResponse<null>> => {
    return apiRequest(`/items/${id}`, {
      method: 'DELETE',
    });
  },
};

// Dashboard API
export const dashboardApi = {
  getStats: async (): Promise<ApiResponse<DashboardStats>> => {
    return apiRequest('/dashboard/stats');
  },
};

export { ApiError };
