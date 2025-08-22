import { ActivityItem } from '@/types';
import StatusBadge from './StatusBadge';
import { cn } from '@/lib/utils';

interface ActivityCardProps {
  activity: ActivityItem;
  className?: string;
}

export default function ActivityCard({ activity, className }: ActivityCardProps) {
  return (
    <div className={cn(
      "p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow",
      className
    )}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-1">{activity.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
          <div className="flex items-center gap-2">
            <StatusBadge type={activity.type}>
              {activity.status}
            </StatusBadge>
            <span className="text-xs text-gray-500">{activity.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
