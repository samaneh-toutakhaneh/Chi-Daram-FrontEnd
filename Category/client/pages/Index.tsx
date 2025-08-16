import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import Modal from '../components/Modal';
import { Category } from '../types';
import { categoriesApi } from '../services/api';
import { useFetch } from '../hooks/useFetch';

export default function Index() {
  const [recentCategories, setRecentCategories] = useState<Category[]>([]);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isManageCategoriesModalOpen, setIsManageCategoriesModalOpen] = useState(false);

  // Mock data for demonstration - replace with real API calls
  const mockCategories: Category[] = [
    {
      id: '1',
      title: 'وسایل منزل',
      description: 'لوازم و وسایل خانگی و منزل',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      itemsCount: 25,
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-20T14:20:00Z',
    },
    {
      id: '2',
      title: 'کتاب و نوشت‌افزار',
      description: 'کتاب‌ها، دفتر و لوازم تحریر',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      itemsCount: 18,
      createdAt: '2024-01-10T09:15:00Z',
      updatedAt: '2024-01-18T16:45:00Z',
    },
  ];

  useEffect(() => {
    // Simulate loading recent categories
    const timer = setTimeout(() => {
      setRecentCategories(mockCategories);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title="مدیریت وسایل شخصی">
      <div className="p-6">

        {/* Recent Categories */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">دسته بندی ها</h2>
          </div>

          <div className="p-6">
            {recentCategories.length === 0 ? (
              <div className="flex justify-center py-8">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentCategories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-sky-400 to-sky-500 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">افزودن وسیله جدید</h3>
            <p className="text-sky-100 mb-4">وسیله شخصی جدیدی به مجموعه خود اضافه کنید</p>
            <button
              onClick={() => setIsAddItemModalOpen(true)}
              className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              افزودن وسیله
            </button>
          </div>

          <div className="bg-gradient-to-r from-sky-400 to-sky-500 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">مدیریت دسته‌بندی‌ها</h3>
            <p className="text-sky-100 mb-4">دسته‌بندی‌های وسایل خود را سازماندهی کنید</p>
            <button
              onClick={() => setIsManageCategoriesModalOpen(true)}
              className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              مدیریت دسته‌ها
            </button>
          </div>
        </div>

        {/* Modals */}
        <Modal
          isOpen={isAddItemModalOpen}
          onClose={() => setIsAddItemModalOpen(false)}
          title="افزودن وسیله جدید"
          className="max-w-lg"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نام وسیله
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-persian-blue-500 focus:border-persian-blue-500"
                placeholder="نام وسیله را وارد کنید"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                دسته‌بندی
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-persian-blue-500 focus:border-persian-blue-500">
                <option>وسایل منزل</option>
                <option>کتاب و نوشت‌افزار</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                توضیحات
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-persian-blue-500 focus:border-persian-blue-500"
                placeholder="توضیحات وسیله"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setIsAddItemModalOpen(false)}
                className="flex-1 bg-sky-600 text-white py-2 rounded-lg font-medium hover:bg-sky-700 transition-colors"
              >
                افزودن
              </button>
              <button
                onClick={() => setIsAddItemModalOpen(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors"
              >
                انصراف
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={isManageCategoriesModalOpen}
          onClose={() => setIsManageCategoriesModalOpen(false)}
          title="مدیریت دسته‌بندی‌ها"
          className="max-w-lg"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">دسته‌بندی‌های موجود:</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>وسایل منزل</span>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">ویرایش</button>
                    <button className="text-red-600 hover:text-red-800 text-sm">حذف</button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>کتاب و ��وشت‌افزار</span>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">ویرایش</button>
                    <button className="text-red-600 hover:text-red-800 text-sm">حذف</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-900 mb-3">افزودن دسته‌بندی جدید:</h4>
              <div className="space-y-3">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-persian-blue-500 focus:border-persian-blue-500"
                  placeholder="نام دسته‌بندی جدید"
                />
                <div className="flex gap-3">
                  <button className="flex-1 bg-sky-600 text-white py-2 rounded-lg font-medium hover:bg-sky-700 transition-colors">
                    افزودن دسته‌بندی
                  </button>
                  <button
                    onClick={() => setIsManageCategoriesModalOpen(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                  >
                    بستن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}
