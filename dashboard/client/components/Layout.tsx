import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header className="mr-64" />
      <Sidebar />
      <main className={cn("mr-64 p-6", className)}>
        {children}
      </main>
    </div>
  );
}
