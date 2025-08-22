import { RecentItem } from '@/types';
import { cn } from '@/lib/utils';

interface RecentItemCardProps {
  item: RecentItem;
  className?: string;
}

export default function RecentItemCard({ item, className }: RecentItemCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
      className
    )}>
      <div className="aspect-square w-full bg-gray-100 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-900 mb-1 text-sm">{item.name}</h3>
        <p className="text-xs text-gray-600 mb-1">{item.category}</p>
        <p className="text-xs text-gray-500">{item.date}</p>
      </div>
    </div>
  );
}
