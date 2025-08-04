import { ChevronDown, MoreHorizontal, AlertCircle, FileText, Plus, Filter, SortAsc } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Deposits = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('همه');
  const [selectedSort, setSelectedSort] = useState('جدیدترین');

  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilterMenu(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const deposits = [
    {
      id: 1,
      type: 'لباس ورزشی',
      amount: '۱۳۶۲۰۴۰۳۲۸',
      date: 'تاریخ تحویل',
      status: 'active',
      category: 'کفش کوهنوردی',
      description: 'پارچه درجه یک',
      action: 'شناسایی',
      hasAlert: true
    },
    {
      id: 2,
      type: 'لوازم دیجیتال',
      amount: 'لپ تاپ dنشینال',
      date: 'تاریخ انقضا',
      status: 'warning',
      category: 'آیفون پرو',
      description: 'امید بیرو',
      action: 'مشاهده جزئیات',
      hasAlert: false
    },
    {
      id: 3,
      type: 'مشاهده جزئیات',
      amount: 'کتاب ها',
      date: 'امید زمان',
      status: 'completed',
      category: 'کتاب ضدکل معل نخلیانی',
      description: '',
      action: 'مشاهده بیشتر',
      hasAlert: false
    }
  ];

  // Filter deposits based on selected filter
  const filteredDeposits = deposits.filter(deposit => {
    if (selectedFilter === 'همه') return true;
    if (selectedFilter === 'فعال') return deposit.status === 'active';
    if (selectedFilter === 'هشدار') return deposit.status === 'warning';
    if (selectedFilter === 'تکمیل شده') return deposit.status === 'completed';
    return true;
  });

  // Sort deposits based on selected sort
  const sortedDeposits = [...filteredDeposits].sort((a, b) => {
    switch (selectedSort) {
      case 'جدیدترین':
        return b.id - a.id;
      case 'قدیمی‌ترین':
        return a.id - b.id;
      case 'الفبایی':
        return a.type.localeCompare(b.type);
      case 'نوع آیتم':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">امانت های من</h1>
        <div className="flex items-center gap-3">
          {/* Filter Dropdown */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>فیلتر: {selectedFilter}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showFilterMenu && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  {['همه', 'فعال', 'هشدار', '��کمیل شده'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => {
                        setSelectedFilter(filter);
                        setShowFilterMenu(false);
                      }}
                      className={`w-full text-right px-4 py-2 hover:bg-gray-50 transition-colors ${
                        selectedFilter === filter ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SortAsc className="w-4 h-4" />
              <span>مرتب‌سازی: {selectedSort}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showSortMenu && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  {['جدیدترین', 'قدیمی‌ترین', 'الفبایی', 'نوع آیتم'].map((sort) => (
                    <button
                      key={sort}
                      onClick={() => {
                        setSelectedSort(sort);
                        setShowSortMenu(false);
                      }}
                      className={`w-full text-right px-4 py-2 hover:bg-gray-50 transition-colors ${
                        selectedSort === sort ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {sort}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Deposits List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-900">ثبت امانت جدید</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>ثبت امانت جدید</span>
            </button>
          </div>
        </div>

        {/* Add New Deposit Form */}
        {showAddForm && (
          <div className="px-6 py-4 border-b border-gray-200 bg-blue-50">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">نوع آیتم</label>
                  <input
                    type="text"
                    placeholder="مثال: لباس ورزشی"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">دسته‌بندی</label>
                  <input
                    type="text"
                    placeholder="مثال: کفش کوهنوردی"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">کد/شناسه</label>
                  <input
                    type="text"
                    placeholder="مثال: ۱۳۶۲۰۴۰۳۲۸"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">تاریخ تحویل</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">توضیحات</label>
                <textarea
                  placeholder="جزئیات اضافی..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ثبت امانت
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="divide-y divide-gray-100">
          {sortedDeposits.map((deposit) => (
            <div key={deposit.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {deposit.hasAlert && (
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                  )}
                  <span className="font-medium text-gray-900">{deposit.type}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 transition-colors text-sm">
                  {deposit.action}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">{deposit.date}</span>
                  <div className="font-medium text-gray-900 mt-1">{deposit.amount}</div>
                </div>
                <div>
                  <span className="text-gray-500">دسته‌بندی</span>
                  <div className="font-medium text-gray-900 mt-1">{deposit.category}</div>
                </div>
                <div>
                  <span className="text-gray-500">توضیحات</span>
                  <div className="font-medium text-gray-900 mt-1">{deposit.description || '-'}</div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    deposit.status === 'active'
                      ? 'bg-green-500'
                      : deposit.status === 'warning'
                      ? 'bg-orange-500'
                      : 'bg-gray-400'
                  }`}
                />
                <span className="text-xs text-gray-500">
                  {deposit.status === 'active' && 'فعال'}
                  {deposit.status === 'warning' && 'هشدار'}
                  {deposit.status === 'completed' && 'تکمیل شده'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Deposits;
