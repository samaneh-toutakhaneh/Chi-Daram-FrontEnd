import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 right-0 z-50 lg:relative lg:z-auto transition-transform duration-300 ease-in-out",
        sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      )}>
        <Sidebar />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          title={title} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        />
        
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
