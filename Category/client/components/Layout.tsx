import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { User } from '@shared/types';
import { apiService } from '@/services/api';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate user fetch - replace with actual API call
    const fetchUser = async () => {
      try {
        // For demo purposes, using mock data
        setUser({
          id: '1',
          name: 'آوید نوادر',
          role: 'مدیر سیستم',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        });
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user || undefined} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
