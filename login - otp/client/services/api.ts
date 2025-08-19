import { ApiResponse, LoginRequest, VerifyOtpRequest, AuthResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
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
        'Authorization': `Bearer ${token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new ApiError(
          data.message || 'خطایی رخ داده است',
          response.status,
          data
        );
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      throw new ApiError('خطا در اتصال به سرور', 0);
    }
  }

  // Auth API endpoints
  async sendOtp(phoneNumber: string): Promise<ApiResponse> {
    const payload: LoginRequest = { phoneNumber };
    return this.request('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async verifyOtp(phoneNumber: string, otp: string): Promise<ApiResponse<AuthResponse>> {
    const payload: VerifyOtpRequest = { phoneNumber, otp };
    return this.request<AuthResponse>('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async resendOtp(phoneNumber: string): Promise<ApiResponse> {
    return this.request('/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber }),
    });
  }

  // Profile API endpoints
  async getProfile(): Promise<ApiResponse> {
    return this.request('/profile');
  }

  async updateProfile(data: any): Promise<ApiResponse> {
    return this.request('/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Utility methods
  setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  removeAuthToken(): void {
    localStorage.removeItem('authToken');
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }
}

export const apiService = new ApiService();
export { ApiError };
