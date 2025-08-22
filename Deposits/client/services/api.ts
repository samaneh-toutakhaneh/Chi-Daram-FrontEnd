import { User, Deposit, Transaction, ApiResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

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

  // User API
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.request<User>('/user/current');
  }

  async updateUser(user: Partial<User>): Promise<ApiResponse<User>> {
    return this.request<User>('/user', {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  }

  // Deposits API
  async getDeposits(): Promise<ApiResponse<Deposit[]>> {
    return this.request<Deposit[]>('/deposits');
  }

  async getDeposit(id: string): Promise<ApiResponse<Deposit>> {
    return this.request<Deposit>(`/deposits/${id}`);
  }

  async createDeposit(deposit: Omit<Deposit, 'id'>): Promise<ApiResponse<Deposit>> {
    return this.request<Deposit>('/deposits', {
      method: 'POST',
      body: JSON.stringify(deposit),
    });
  }

  async updateDeposit(id: string, deposit: Partial<Deposit>): Promise<ApiResponse<Deposit>> {
    return this.request<Deposit>(`/deposits/${id}`, {
      method: 'PUT',
      body: JSON.stringify(deposit),
    });
  }

  async deleteDeposit(id: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/deposits/${id}`, {
      method: 'DELETE',
    });
  }

  // Transactions API
  async getTransactions(): Promise<ApiResponse<Transaction[]>> {
    return this.request<Transaction[]>('/transactions');
  }

  async getTransaction(id: string): Promise<ApiResponse<Transaction>> {
    return this.request<Transaction>(`/transactions/${id}`);
  }
}

export const apiService = new ApiService();
export default apiService;
