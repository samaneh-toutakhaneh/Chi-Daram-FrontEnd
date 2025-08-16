import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import EmptyState from '../components/EmptyState';

export default function Logout() {
  useEffect(() => {
    // Here you would handle the logout logic
    // Clear tokens, redirect, etc.
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title="خروج">
      <div className="h-full flex items-center justify-center">
        <EmptyState
          title="در حال خروج..."
          description="شما از سیستم خارج می‌شوید. لطفاً صبر کنید..."
          icon={
            <svg className="w-12 h-12 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          }
        />
      </div>
    </Layout>
  );
}
