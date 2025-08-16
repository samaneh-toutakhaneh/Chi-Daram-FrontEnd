import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  className?: string;
  onClick?: () => void;
}

export default function CategoryCard({ category, className, onClick }: CategoryCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const CardContent = () => (
    <div 
      className={cn(
        'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden',
        'hover:shadow-md transition-shadow duration-200 cursor-pointer',
        'group',
        className
      )}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-persian-blue-600 transition-colors">
          {category.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {category.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            {category.itemsCount} آیتم
          </span>
          <span>
            {new Date(category.createdAt).toLocaleDateString('fa-IR')}
          </span>
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return <CardContent />;
  }

  return (
    <Link to={`/categories/${category.id}`}>
      <CardContent />
    </Link>
  );
}
