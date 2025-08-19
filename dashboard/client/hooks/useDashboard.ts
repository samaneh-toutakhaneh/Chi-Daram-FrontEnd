import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '@/services/api';

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: dashboardApi.getStats,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useDashboardActivities = (limit = 10) => {
  return useQuery({
    queryKey: ['dashboard', 'activities', limit],
    queryFn: () => dashboardApi.getActivities(limit),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

export const useDashboardRecentItems = (limit = 6) => {
  return useQuery({
    queryKey: ['dashboard', 'recent-items', limit],
    queryFn: () => dashboardApi.getRecentItems(limit),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};
