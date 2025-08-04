import { FileText } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="text-center">
        <div className="text-gray-400 mb-4">
          <FileText className="w-16 h-16 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        {description && (
          <p className="text-gray-500 mb-6 max-w-md mx-auto">{description}</p>
        )}
        <div className="text-sm text-gray-400">
          برای پیاده‌سازی این صفحه، لطفاً ادامه دهید و محتوای مورد نظر را درخواست کنید.
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
