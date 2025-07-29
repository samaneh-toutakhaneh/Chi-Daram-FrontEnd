import React from 'react';
import { Plus, Package, TrendingUp, Calendar, Eye, Edit2 } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import ItemCard from '@/components/ItemCard';

export default function Dashboard() {
  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'اضافه',
      name: 'لباس ورزشی',
      category: 'لباس ورزشی',
      date: '1402/12/26 21:15',
      status: 'success'
    },
    {
      id: 2,
      type: 'ویرایش',
      name: 'گلدان پلاستیک رنگ',
      category: 'لباس ورزشی',
      date: '1402/12/26 15:13',
      status: 'info'
    },
    {
      id: 3,
      type: 'حذف',
      name: 'آپارات',
      category: 'دیجیتال',
      date: '1402/12/26 12:13',
      status: 'danger'
    }
  ];

  // Mock data for recent items
  const recentItems = [
    {
      id: 1,
      name: 'کتونی مشکی نایک',
      category: 'ورزشی',
      date: '1 مهر 1403',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'کفش دویدن',
      category: 'ورزشی',
      date: '1 مهر 1403',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'دوچرخه کوهستان',
      category: 'ورزشی',
      date: '1 مهر 1403',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'تی‌شرت مشکی',
      category: 'پوشاک',
      date: '1 مهر 1403',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'لباس مجلسی',
      category: 'پوشاک',
      date: '1 مهر 1403',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=200&h=200&fit=crop'
    },
    {
      id: 6,
      name: 'دمبل ورزشی',
      category: 'ورزشی',
      date: '1 مهر 1403',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">داشبورد</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Plus size={16} />
            افزودن آیتم
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="تعداد کل آیتم ها"
          value="۱۲"
          icon={Package}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        />
        <StatsCard
          title="تعداد آیتم های اضافه شده"
          value="۱"
          icon={TrendingUp}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
        />
        <StatsCard
          title="تعداد کل آیتم ها"
          value="۱۲"
          icon={Calendar}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
        />
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">فعالیت های اخیر</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">نوع عملیات</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">��ام آیتم</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">دسته‌بندی</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">تاریخ</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-900">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentActivities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      activity.status === 'success' ? 'bg-green-100 text-green-800' :
                      activity.status === 'info' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {activity.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{activity.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{activity.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{activity.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye size={16} />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Edit2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
            مشاهده بیشتر
          </button>
        </div>
      </div>

      {/* Recent Items */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">آیتم های اخیر</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recentItems.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.category}
                date={item.date}
                image={item.image}
                onClick={() => console.log('Item clicked:', item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
