import React from 'react';
import { cn } from '@/lib/utils';
import { Deposit } from '@/types';
import { formatCurrency, getStatusColor } from '@/utils';
import { ChevronLeft, Trash2 } from 'lucide-react';

interface DepositCardProps {
  deposit: Deposit;
  onViewDeposits?: () => void;
  onManageDeposits?: () => void;
  showActions?: boolean;
  className?: string;
}

const DepositCard: React.FC<DepositCardProps> = ({
  deposit,
  onViewDeposits,
  onManageDeposits,
  showActions = true,
  className,
}) => {
  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'در انتظار';
      case 'completed':
        return 'تکمیل شده';
      case 'failed':
        return 'ناموفق';
      default:
        return status;
    }
  };

  return (
    <div className={cn('bg-white rounded-lg border border-gray-200 p-4', className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <h3 className="text-sm font-medium text-gray-900">
            {deposit.status === 'pending' ? 'سپرده جدیدات' : 'مشاهده سپرده‌ها'}
          </h3>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">امانت های من</p>
          <div className="flex items-center gap-2 mt-1">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft size={16} className="text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Trash2 size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <img
              src={deposit.image || '/api/placeholder/48/48'}
              alt={deposit.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h4 className="text-sm font-medium text-gray-900">{deposit.title}</h4>
              <p className="text-xs text-gray-500">{deposit.type}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">
              {deposit.amount > 0 ? formatCurrency(deposit.amount) : 'رایگان'}
            </p>
            <p className="text-xs text-gray-500">{new Date(deposit.date).toLocaleDateString('fa-IR')}</p>
          </div>
        </div>

        {deposit.status === 'pending' && (
          <div className="flex items-center justify-between">
            <span className={cn('px-2 py-1 text-xs rounded-full', getStatusColor(deposit.status))}>
              {getStatusText(deposit.status)}
            </span>
            <div className="flex gap-2">
              {showActions && (
                <>
                  <button
                    onClick={onViewDeposits}
                    className="px-3 py-1 text-xs text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    مشاهده
                  </button>
                  <button
                    onClick={onManageDeposits}
                    className="px-3 py-1 text-xs text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50"
                  >
                    مدیریت
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositCard;
