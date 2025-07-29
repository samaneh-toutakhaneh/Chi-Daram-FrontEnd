import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Edit, ChevronLeft } from 'lucide-react';

interface Item {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  status: 'new' | 'used' | 'urgent';
}

const items: Item[] = [
  {
    id: '1',
    name: 'کفش کوهنوردی',
    category: 'لباس ورزشی',
    location: 'اتاق نشیمن',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop&crop=center',
    status: 'new'
  },
  {
    id: '2',
    name: 'آیپد پرو',
    category: 'لوازم دیجیتال',
    location: 'دفتر کار',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=80&h=80&fit=crop&crop=center',
    status: 'used'
  },
  {
    id: '3',
    name: 'کتاب سه دل تنهایی',
    category: 'کتاب ها',
    location: 'کتابخونه',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=80&h=80&fit=crop&crop=center',
    status: 'urgent'
  },
  {
    id: '4',
    name: 'دستبند طلا',
    category: 'طلا و جواهرات',
    location: 'اتاق خواب',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=80&h=80&fit=crop&crop=center',
    status: 'new'
  },
  {
    id: '5',
    name: 'عینک',
    category: 'لوازم شخصی',
    location: 'آشپزخانه',
    image: 'https://images.unsplash.com/photo-1473865674229-a8e6da96bcf6?w=80&h=80&fit=crop&crop=center',
    status: 'new'
  }
];

const statusColors = {
  new: 'bg-green-100 text-green-700 border border-green-200',
  used: 'bg-blue-100 text-blue-700 border border-blue-200',
  urgent: 'bg-red-100 text-red-700 border border-red-200'
};

const statusLabels = {
  new: 'افزوده شده',
  used: 'در امانت',
  urgent: 'از رده خارج شده'
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">همه آیتم ها</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>همه</span>
          <span>/</span>
          <span>دسته بندی محتویات</span>
          <span>/</span>
          <span>بر اساس</span>
        </div>
      </div>

      {/* Items List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="divide-y divide-gray-100">
          {items.map((item) => (
            <div key={item.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
              {/* Item Info */}
              <div className="flex items-center gap-4 flex-1">
                {/* Item Image */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span class="text-gray-400 text-xs">تصویر</span>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>دسته بندی: {item.category}</span>
                    <span>مکان: {item.location}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {/* Status Badge */}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[item.status]}`}>
                  {statusLabels[item.status]}
                </span>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <Link
                    to={`/items/${item.id}`}
                    className="flex items-center gap-1 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    <span>مشاهده جزئیات</span>
                  </Link>
                  
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Item Button */}
      <div className="flex justify-center">
        <Link
          to="/items/add"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <span>+</span>
          <span>افزودن آیتم جدید</span>
        </Link>
      </div>
    </div>
  );
}
