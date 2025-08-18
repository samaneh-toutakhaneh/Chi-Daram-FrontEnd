import { useState, useEffect } from 'react';
import { ShoppingItem, ShoppingList } from '../types/shopping';
import { apiService } from '../services/api';

export const useShoppingList = (listId?: string) => {
  const [shoppingList, setShoppingList] = useState<ShoppingList | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration
  const mockData: ShoppingList = {
    id: '1',
    name: 'افزودن خرید جدید',
    createdAt: new Date(),
    updatedAt: new Date(),
    items: [
      {
        id: '1',
        name: 'لپ تاپ',
        category: 'لوازم دیجیتال',
        quantity: 1,
        unit: 'عدد',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        name: 'آکسسوری',
        category: 'آکسسوری',
        quantity: 6,
        unit: 'عدد',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        name: 'کتاب',
        category: 'کتاب',
        quantity: 1,
        unit: 'عدد',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  };

  useEffect(() => {
    setShoppingList(mockData);
  }, []);

  const addItem = async (item: Partial<ShoppingItem>) => {
    setLoading(true);
    try {
      const newItem: ShoppingItem = {
        id: Date.now().toString(),
        name: item.name || '',
        category: item.category || '',
        quantity: item.quantity || 1,
        unit: item.unit || 'عدد',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setShoppingList(prev => prev ? {
        ...prev,
        items: [...prev.items, newItem]
      } : null);

      // if (listId) {
      //   await apiService.addShoppingItem(listId, item);
      // }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در افزودن آیتم');
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (itemId: string, updates: Partial<ShoppingItem>) => {
    setLoading(true);
    try {
      setShoppingList(prev => prev ? {
        ...prev,
        items: prev.items.map(item => 
          item.id === itemId ? { ...item, ...updates, updatedAt: new Date() } : item
        )
      } : null);

      // if (listId) {
      //   await apiService.updateShoppingItem(listId, itemId, updates);
      // }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در به‌روزرسانی آیتم');
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (itemId: string) => {
    setLoading(true);
    try {
      setShoppingList(prev => prev ? {
        ...prev,
        items: prev.items.filter(item => item.id !== itemId)
      } : null);

      // if (listId) {
      //   await apiService.deleteShoppingItem(listId, itemId);
      // }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در حذف آیتم');
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = (itemId: string) => {
    if (shoppingList) {
      const item = shoppingList.items.find(i => i.id === itemId);
      if (item) {
        updateItem(itemId, { completed: !item.completed });
      }
    }
  };

  return {
    shoppingList,
    loading,
    error,
    addItem,
    updateItem,
    deleteItem,
    toggleComplete,
  };
};
