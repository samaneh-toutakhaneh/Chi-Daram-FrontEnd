import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  variant?: 'default' | 'primary';
  className?: string;
}

export default function StatsCard({ title, value, variant = 'default', className }: StatsCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-lg border text-center",
      variant === 'primary' 
        ? "bg-blue-600 text-white border-blue-600" 
        : "bg-white border-gray-200",
      className
    )}>
      <div className={cn(
        "text-2xl font-bold mb-2",
        variant === 'primary' ? "text-white" : "text-gray-900"
      )}>
        {value}
      </div>
      <div className={cn(
        "text-sm",
        variant === 'primary' ? "text-blue-100" : "text-gray-600"
      )}>
        {title}
      </div>
    </div>
  );
}
