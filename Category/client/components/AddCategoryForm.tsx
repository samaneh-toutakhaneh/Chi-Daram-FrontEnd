import { useState } from 'react';
import { X, Upload, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Category } from '@shared/types';

interface AddCategoryFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (category: Omit<Category, 'id'>) => void;
}

export default function AddCategoryForm({ isOpen, onClose, onAdd }: AddCategoryFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setIsSubmitting(true);
    
    // Create slug from title
    const slug = title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');

    const newCategory: Omit<Category, 'id'> = {
      title: title.trim(),
      description: description.trim(),
      image: image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      date: new Date().toLocaleDateString('fa-IR'),
      views: 0,
      slug
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onAdd(newCategory);
    setIsSubmitting(false);
    
    // Reset form
    setTitle('');
    setDescription('');
    setImage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">افزودن دسته‌بندی جدید</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              عنوان دسته‌بندی
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="مثال: کتاب و مجله"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              توضیحات
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="توضیح کوتاهی در مورد این دسته‌بندی"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              لینک تصویر (اختیاری)
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-xs text-gray-500 mt-1">
              در صورت خالی بودن، تصویر پیش‌فرض استفاده خواهد شد
            </p>
          </div>

          <div className="flex space-x-3 space-x-reverse pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              انصراف
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !title.trim() || !description.trim()}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                  در حال افزودن...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 ml-2" />
                  افزودن دسته‌بندی
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
