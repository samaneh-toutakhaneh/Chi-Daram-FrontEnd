import { useState, useEffect } from 'react';
import { Plus, Grid, List } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import AddCategoryForm from '@/components/AddCategoryForm';
import { Button } from '@/components/ui/button';
import { Category } from '@shared/types';

// Mock data for categories - replace with API call
const mockCategories: Category[] = [
  {
    id: '1',
    title: 'پوشاک',
    description: 'لباس، کفش، کیف و لوازم پوشاک',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    date: '1402/12/01',
    views: 245,
    slug: 'clothing'
  },
  {
    id: '2',
    title: 'لوازم دیجیتال',
    description: 'گوشی، لپ‌تاپ، تبلت و سایر وسایل الکترونیکی',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    date: '1402/11/28',
    views: 189,
    slug: 'digital'
  },
  {
    id: '3',
    title: 'خانه و آشپزخانه',
    description: 'لوازم خانگی، ظروف و وسایل آشپزخانه',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
    date: '1402/12/15',
    views: 156,
    slug: 'home-kitchen'
  },
  {
    id: '4',
    title: 'ورزشی',
    description: 'لوازم ورزشی، کفش ورزشی و تجهی��ات ورزشی',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
    date: '1402/11/20',
    views: 98,
    slug: 'sports'
  },
  {
    id: '5',
    title: 'زیبایی و سلامت',
    description: 'لوازم آرایشی، بهداشتی و مراقبت شخصی',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
    date: '1402/12/10',
    views: 134,
    slug: 'beauty-health'
  }
];

export default function Dashboard() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchCategories = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCategories(mockCategories);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleAddCategory = (newCategoryData: Omit<Category, 'id'>) => {
    const newCategory: Category = {
      ...newCategoryData,
      id: (categories.length + 1).toString()
    };
    setCategories(prev => [newCategory, ...prev]);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-xl h-64 animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8 mr-60">
      {/* Central Container */}
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 w-full max-w-4xl h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900">دسته بندی ها</h1>
            <p className="text-gray-600 text-sm mt-1">مدیریت و نمایش دسته بندی های محصولات</p>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-lg rounded-l-none border-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-lg rounded-r-none border-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setIsAddFormOpen(true)}
            >
              <Plus className="w-4 h-4 ml-2" />
              افزودن دسته جدید
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className={
          viewMode === 'grid'
            ? "grid grid-cols-3 gap-6"
            : "space-y-4"
        }>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Empty State */}
      {categories.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Grid className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">هیچ دسته بندی یافت نشد</h3>
          <p className="text-gray-600 mb-6">برای شروع، اولین دسته بندی خود را ایجاد کنید</p>
          <Button>
            <Plus className="w-4 h-4 ml-2" />
            ایجاد دسته بندی
          </Button>
        </div>
      )}

      {/* Add Category Form */}
      <AddCategoryForm
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
        onAdd={handleAddCategory}
      />
    </div>
  );
}
