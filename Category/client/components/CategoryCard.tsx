import { Eye, Calendar } from 'lucide-react';
import { Category } from '@shared/types';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const formatDate = (dateString: string) => {
    return dateString;
  };

  const formatViews = (views: number) => {
    return `${views} بازدید`;
  };

  return (
    <Link
      to={`/categories/${category.slug}`}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group border border-gray-100"
    >
      <div className="aspect-[4/3] relative overflow-hidden h-28">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-gray-900 mb-1 text-center text-sm">
          {category.title}
        </h3>

        <div className="text-center text-xs text-gray-500 mb-2">
          <span className="block">{formatDate(category.date)}</span>
          <span className="text-xs">{formatViews(category.views)}</span>
        </div>

        <p className="text-gray-600 text-xs text-center line-clamp-2">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
