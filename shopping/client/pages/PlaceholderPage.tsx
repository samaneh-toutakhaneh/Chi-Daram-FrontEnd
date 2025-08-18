import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-white rounded-lg border border-gray-200 m-6">
      <Construction className="h-16 w-16 text-gray-400 mb-4" />
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 text-center max-w-md">
        {description || 'این صفحه در حال توسعه است. لطفاً برای افزودن محتوا، درخواست خود را ادامه دهید.'}
      </p>
    </div>
  );
}
