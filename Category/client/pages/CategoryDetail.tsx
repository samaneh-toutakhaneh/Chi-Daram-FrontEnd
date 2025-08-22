import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Plus, Search, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddItemForm from '@/components/AddItemForm';
import { Category, Item } from '@shared/types';

// Mock data for items in each category
const mockItems: Record<string, Item[]> = {
  'clothing': [
    { id: '1', name: 'کت زمستانی', categoryId: 'clothing', addedDate: '1402/11/15', location: 'کمد اتاق خواب', description: 'کت زمستانی گرم و راحت' },
    { id: '2', name: 'شلوار جین آبی', categoryId: 'clothing', addedDate: '1402/10/20', location: 'کمد اتاق خواب' },
    { id: '3', name: 'کفش ورزشی نایک', categoryId: 'clothing', addedDate: '1402/09/05', location: 'جاکفشی ورودی' },
    { id: '4', name: 'پیراهن سفید', categoryId: 'clothing', addedDate: '1402/12/01', location: 'کمد اتاق خواب' },
  ],
  'digital': [
    { id: '5', name: 'لپ‌تاپ ایسوس', categoryId: 'digital', addedDate: '1401/03/15', location: 'میز کار', description: 'لپ‌تاپ گیمینگ با مشخصات بالا' },
    { id: '6', name: 'گوشی سامسونگ', categoryId: 'digital', addedDate: '1402/06/10', location: 'میز شب' },
    { id: '7', name: 'هدفون بی‌سیم', categoryId: 'digital', addedDate: '1402/08/22', location: 'میز کار' },
    { id: '8', name: 'شارژر همراه', categoryId: 'digital', addedDate: '1402/05/18', location: 'کیف' },
  ],
  'home-kitchen': [
    { id: '9', name: 'قابلمه استیل', categoryId: 'home-kitchen', addedDate: '1401/01/10', location: 'کابینت آشپزخانه', description: 'قابلمه سایز متوسط برای پخت و پز' },
    { id: '10', name: 'ظرف یخچالی', categoryId: 'home-kitchen', addedDate: '1402/02/14', location: 'یخچال' },
    { id: '11', name: 'چای‌ساز برقی', categoryId: 'home-kitchen', addedDate: '1401/11/30', location: 'کانتر آشپزخانه' },
  ],
  'sports': [
    { id: '12', name: 'توپ فوتبال', categoryId: 'sports', addedDate: '1402/07/12', location: 'انباری', description: 'توپ فوتبال سایز استاندارد' },
    { id: '13', name: 'کفش ورزشی دویدن', categoryId: 'sports', addedDate: '1402/09/25', location: 'جاکفشی' },
    { id: '14', name: 'دمبل 5 کیلویی', categoryId: 'sports', addedDate: '1401/08/15', location: 'اتاق ورزش' },
  ],
  'beauty-health': [
    { id: '15', name: 'کرم مرطوب‌کننده', categoryId: 'beauty-health', addedDate: '1402/10/05', location: 'حمام', description: 'کرم مرطوب‌کننده طبیعی' },
    { id: '16', name: 'شامپو گیاهی', categoryId: 'beauty-health', addedDate: '1402/11/18', location: 'حمام' },
    { id: '17', name: 'ماسک صورت', categoryId: 'beauty-health', addedDate: '1402/09/12', location: 'اتاق خواب' },
  ]
};

const categories: Category[] = [
  { id: '1', title: 'پوشاک', description: 'لباس، کفش، کیف و لوازم پوشاک', image: '', date: '', views: 0, slug: 'clothing' },
  { id: '2', title: 'لوازم دیجیتال', description: 'گوشی، لپ‌تاپ، تبلت و سایر وسایل الکترونیکی', image: '', date: '', views: 0, slug: 'digital' },
  { id: '3', title: 'خانه و آشپزخانه', description: 'لوازم خانگی، ظروف و وسایل آشپزخانه', image: '', date: '', views: 0, slug: 'home-kitchen' },
  { id: '4', title: 'ورزشی', description: 'لوازم ورزشی، کفش ورزشی و تجهیزات ورزشی', image: '', date: '', views: 0, slug: 'sports' },
  { id: '5', title: 'زیبایی و سلامت', description: 'لوازم آرایشی، بهداشتی و مراقبت شخصی', image: '', date: '', views: 0, slug: 'beauty-health' },
];

export default function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  
  const category = categories.find(c => c.slug === slug);
  
  useEffect(() => {
    // Simulate API call
    const fetchItems = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setItems(mockItems[slug || ''] || []);
      setLoading(false);
    };
    
    fetchItems();
  }, [slug]);

  const handleAddItem = (newItemData: Omit<Item, 'id'>) => {
    const newItem: Item = {
      ...newItemData,
      id: (Date.now()).toString()
    };
    setItems(prev => [newItem, ...prev]);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );


  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8 mr-60">
        <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 w-full max-w-4xl h-[85vh] overflow-y-auto">
          <div className="text-center py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">دسته‌��ندی یافت نشد</h2>
            <Button asChild>
              <Link to="/">
                <ArrowRight className="w-4 h-4 ml-2" />
                بازگشت به داشبورد
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8 mr-60">
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 w-full max-w-4xl h-[85vh] overflow-y-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">دسته بندی</Link>
          <span>/</span>
          <span className="text-gray-900">{category.title}</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{category.title}</h1>
            <p className="text-gray-600 mt-1">{category.description}</p>
          </div>
          
          <div className="flex items-center space-x-3 space-x-reverse">
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowRight className="w-4 h-4 ml-2" />
                بازگشت
              </Link>
            </Button>
            
            <Button onClick={() => setIsAddFormOpen(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 ml-2" />
              افزودن آیتم جدید
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center space-x-4 space-x-reverse mb-6">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="جستجو در آیتم‌ها..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 text-gray-900 placeholder-gray-500 rounded-lg px-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-200"
              />
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            {filteredItems.length} آیتم
          </div>
        </div>

        {/* Items List */}
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-20 animate-pulse"></div>
            ))}
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    )}
                    
                    <div className="flex items-center space-x-4 space-x-reverse mt-2 text-sm text-gray-500">
                      {item.location && (
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Calendar className="w-4 h-4" />
                        <span>{item.addedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm ? 'آیتمی یافت نشد' : 'هنوز آیتمی اضافه نشده'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm 
                ? 'آیتمی با این نام یافت نشد. عبارت جستجو را تغییر دهید.'
                : 'اولین آیتم خود را در این دسته‌بندی اضافه کنید.'
              }
            </p>
            {!searchTerm && (
              <Button onClick={() => setIsAddFormOpen(true)} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 ml-2" />
                اف��ودن آیتم جدید
              </Button>
            )}
          </div>
        )}

        {/* Add Item Form */}
        <AddItemForm
          isOpen={isAddFormOpen}
          onClose={() => setIsAddFormOpen(false)}
          onAdd={handleAddItem}
          categoryId={category.id}
          categoryTitle={category.title}
        />
      </div>
    </div>
  );
}
