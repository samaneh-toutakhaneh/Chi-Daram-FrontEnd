import { Construction } from 'lucide-react';
import { Button } from './ui/button';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <Construction className="w-12 h-12 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        {description || 'این بخش در حال توسعه است. برای اضافه کردن محتوا به این صفحه، لطفاً درخوا��ت خود را ادامه دهید.'}
      </p>
      <Button variant="outline">
        بازگشت به داشبورد
      </Button>
    </div>
  );
}
