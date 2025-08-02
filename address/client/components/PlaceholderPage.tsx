import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <Construction size={40} className="text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-chi-daram-text-dark mb-4">{title}</h2>
      <p className="text-chi-daram-text-light mb-6 max-w-md">
        {description}
      </p>
      <p className="text-sm text-chi-daram-text-light bg-gray-100 px-4 py-2 rounded-lg">
        این صفحه در حال توسعه است. برای ادامه توسعه، از دستیار چت استفاده کنید.
      </p>
    </div>
  );
}
