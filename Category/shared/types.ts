export interface User {
  id: string;
  name: string;
  avatar?: string;
  role: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  views: number;
  slug: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  href: string;
  badge?: number;
}

export interface Item {
  id: string;
  name: string;
  description?: string;
  image?: string;
  categoryId: string;
  location?: string;
  addedDate: string;
  notes?: string;
}
