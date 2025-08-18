import { ReactNode, useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { User } from '../types';

interface LayoutProps {
  children: ReactNode;
  user?: User;
  onLogout?: () => void;
}

export function Layout({ children, user, onLogout }: LayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header user={user} onLogout={onLogout} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
