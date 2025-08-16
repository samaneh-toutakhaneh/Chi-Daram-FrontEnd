// Date formatting utilities
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

// Number formatting utilities
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fa-IR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('fa-IR').format(num);
};

// Status utilities
export const getStatusLabel = (status: string): string => {
  const statusLabels: Record<string, string> = {
    completed: 'تکمیل شده',
    pending: 'در انتظار',
    failed: 'ناموفق',
    cancelled: 'لغو شده',
  };
  return statusLabels[status] || status;
};

export const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    completed: 'text-green-600 bg-green-50',
    pending: 'text-yellow-600 bg-yellow-50',
    failed: 'text-red-600 bg-red-50',
    cancelled: 'text-gray-600 bg-gray-50',
  };
  return statusColors[status] || 'text-gray-600 bg-gray-50';
};

// Text utilities
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const capitalizeFirst = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
