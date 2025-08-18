import { ShoppingItem, ShoppingList, Category } from '../types/shopping';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiService {
  private async fetchWithAuth(url: string, options: RequestInit = {}) {
    const token = localStorage.getItem('authToken');
    
    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Shopping Lists
  async getShoppingLists(): Promise<ShoppingList[]> {
    return this.fetchWithAuth('/shopping-lists');
  }

  async getShoppingList(id: string): Promise<ShoppingList> {
    return this.fetchWithAuth(`/shopping-lists/${id}`);
  }

  async createShoppingList(data: Partial<ShoppingList>): Promise<ShoppingList> {
    return this.fetchWithAuth('/shopping-lists', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateShoppingList(id: string, data: Partial<ShoppingList>): Promise<ShoppingList> {
    return this.fetchWithAuth(`/shopping-lists/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteShoppingList(id: string): Promise<void> {
    return this.fetchWithAuth(`/shopping-lists/${id}`, {
      method: 'DELETE',
    });
  }

  // Shopping Items
  async addShoppingItem(listId: string, item: Partial<ShoppingItem>): Promise<ShoppingItem> {
    return this.fetchWithAuth(`/shopping-lists/${listId}/items`, {
      method: 'POST',
      body: JSON.stringify(item),
    });
  }

  async updateShoppingItem(listId: string, itemId: string, data: Partial<ShoppingItem>): Promise<ShoppingItem> {
    return this.fetchWithAuth(`/shopping-lists/${listId}/items/${itemId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteShoppingItem(listId: string, itemId: string): Promise<void> {
    return this.fetchWithAuth(`/shopping-lists/${listId}/items/${itemId}`, {
      method: 'DELETE',
    });
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return this.fetchWithAuth('/categories');
  }
}

export const apiService = new ApiService();
