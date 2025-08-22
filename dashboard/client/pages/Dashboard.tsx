import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import StatsCard from '@/components/StatsCard';
import ActivityCard from '@/components/ActivityCard';
import RecentItemCard from '@/components/RecentItemCard';
import AddItemModal from '@/components/AddItemModal';
import { MOCK_RECENT_ITEMS } from '@/constants';
import { ActivityItem } from '@/types';

// Mock data for activities
const mockActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'موجود',
    description: 'ورزشی',
    type: 'success',
    date: '1403/12/21 21:15',
    status: 'کفش ورزشی نایک'
  },
  {
    id: '2',
    title: 'درحال',
    description: 'ورزشی',
    type: 'warning',
    date: '1403/12/21 15:13',
    status: 'دوچرخه کوهستان'
  },
  {
    id: '3',
    title: 'حذف',
    description: 'لوازم دیجیتال',
    type: 'error',
    date: '1403/12/21 12:13',
    status: 'لپ تاپ'
  },
];

function DashboardContent() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [recentItems, setRecentItems] = useState(MOCK_RECENT_ITEMS);
  const navigate = useNavigate();

  const handleAddItem = (newItem: {
    name: string;
    category: string;
    description: string;
    image: string;
  }) => {
    const item = {
      id: (recentItems.length + 1).toString(),
      ...newItem,
      date: new Date().toLocaleDateString('fa-IR'),
    };
    setRecentItems(prev => [item, ...prev]);
  };

  const handleViewAllItems = () => {
    navigate('/items');
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">داشبورد</h1>
            <p className="text-gray-600">آخرین وضعیت فعالیت‌های شما</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            افزودن آیتم
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="تعداد کل آیتم ها"
            value="12"
            variant="primary"
          />
          <StatsCard
            title="تعداد آیتم ها اضافت شده"
            value="1"
            variant="default"
          />
          <StatsCard
            title="آیتم های از رده خارج شده"
            value="1"
            variant="default"
          />
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">فعالیت های اخیر</h2>

          {/* Activities Table Header */}
          <div className="grid grid-cols-4 gap-4 mb-4 text-sm font-medium text-gray-500 border-b border-gray-200 pb-3 text-right">
            <div>نام آیتم</div>
            <div>برچسب/دسته‌بندی</div>
            <div>تاریخ</div>
            <div>نوع عملیات</div>
          </div>

          {/* Activities List */}
          <div className="space-y-3">
            {mockActivities.map((activity) => (
              <div key={activity.id} className="grid grid-cols-4 gap-4 items-center py-3 text-sm text-right">
                <div className="text-gray-900">{activity.status}</div>
                <div className="text-gray-600">{activity.description}</div>
                <div className="text-gray-600">{activity.date}</div>
                <div>
                  <span className={`inline-block w-3 h-3 rounded-full ml-2 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}></span>
                  {activity.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Items Grid */}
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">آیتم های اخیر</h2>
              <button
                onClick={handleViewAllItems}
                className="text-blue-600 text-sm hover:text-blue-700 transition-colors"
              >
                مشاهده همه
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {recentItems.slice(0, 6).map((item) => (
                <RecentItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Add Item Modal */}
        <AddItemModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddItem={handleAddItem}
        />
      </div>
    </Layout>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>بارگذاری...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
