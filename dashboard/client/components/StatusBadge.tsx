import { cn } from '@/lib/utils';
import { STATUS_COLORS } from '@/constants';

interface StatusBadgeProps {
  type: 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
  className?: string;
}

export default function StatusBadge({ type, children, className }: StatusBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
      STATUS_COLORS[type],
      className
    )}>
      {children}
    </span>
  );
}
