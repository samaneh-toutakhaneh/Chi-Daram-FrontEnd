import React from 'react';
import Layout from '../components/Layout';
import EmptyState from '../components/EmptyState';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout title={title}>
      <div className="h-full flex items-center justify-center">
        <EmptyState
          title={`صفحه ${title} در دست توسعه`}
          description={description || `این صفحه هنوز آماده نیست. لطفاً بعداً مراجعه کنید یا از چت برای تکمیل این بخش استفاده کنید.`}
          icon={
            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          }
          action={{
            label: 'بازگشت به داشبورد',
            onClick: () => window.location.href = '/',
          }}
        />
      </div>
    </Layout>
  );
}
