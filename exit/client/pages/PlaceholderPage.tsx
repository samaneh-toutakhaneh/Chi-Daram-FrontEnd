import { Layout } from '../components/Layout';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-4">{title}</h1>
          <p className="text-muted-foreground mb-6">
            {description || 'این صفحه در حال توسعه است. لطفاً بعداً دوباره بررسی کنید.'}
          </p>
          <p className="text-sm text-muted-foreground">
            برای اضافه کردن محتوا به این صفحه، لطفاً درخواست خود را ارسال کنید.
          </p>
        </div>
      </div>
    </Layout>
  );
}
