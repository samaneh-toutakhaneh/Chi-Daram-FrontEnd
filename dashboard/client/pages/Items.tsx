import { useState } from 'react';
import Layout from '@/components/Layout';
import RecentItemCard from '@/components/RecentItemCard';
import AddItemModal from '@/components/AddItemModal';
import { Plus, Filter, Search } from 'lucide-react';
import { MOCK_RECENT_ITEMS } from '@/constants';

export default function Items() {
  const [items, setItems] = useState(MOCK_RECENT_ITEMS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');

  const handleAddItem = (newItem: {
    name: string;
    category: string;
    description: string;
    image: string;
  }) => {
    const item = {
      id: (items.length + 1).toString(),
      ...newItem,
      date: new Date().toLocaleDateString('fa-IR'),
    };
    setItems(prev => [item, ...prev]);
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'همه' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['همه', ...Array.from(new Set(items.map(item => item.category)))];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">آیتم ها</h1>
            <p className="text-gray-600">مدیریت تمامی آیتم های شما</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            افزودن آیتم
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="جستجو در آیتم ها..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <span>{filteredItems.length} آیتم پیدا شد</span>
            <span>مرتب‌سازی بر اساس: تاریخ اضافه شدن</span>
          </div>

          {/* Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {filteredItems.map((item) => (
                <RecentItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">آیتمی یافت نشد</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedCategory !== 'همه' 
                  ? 'هیچ آیتمی با این فیلترها پیدا نشد. فیلترها را تغییر دهید.'
                  : 'هنوز آیتمی اضافه نکرده‌اید. اولین آیتم خود را اضافه کنید.'
                }
              </p>
              {!searchTerm && selectedCategory === 'همه' && (
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  افزودن اولین آیتم
                </button>
              )}
            </div>
          )}
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
