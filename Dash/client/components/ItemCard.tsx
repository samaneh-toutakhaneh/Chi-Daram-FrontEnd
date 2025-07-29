import React from 'react';

interface ItemCardProps {
  id: number;
  name: string;
  category: string;
  date: string;
  image: string;
  onClick?: () => void;
}

export default function ItemCard({ id, name, category, date, image, onClick }: ItemCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-900 mb-1 truncate">{name}</h3>
        <p className="text-xs text-gray-500">{category}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
}
