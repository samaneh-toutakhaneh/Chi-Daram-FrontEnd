import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Item } from '@shared/types';

interface AddItemFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: Omit<Item, 'id'>) => void;
  categoryId: string;
  categoryTitle: string;
}

export default function AddItemForm({ isOpen, onClose, onAdd, categoryId, categoryTitle }: AddItemFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    const newItem: Omit<Item, 'id'> = {
      name: name.trim(),
      description: description.trim() || undefined,
      categoryId,
      location: location.trim() || undefined,
      addedDate: new Date().toLocaleDateString('fa-IR'),
      notes: notes.trim() || undefined,
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onAdd(newItem);
    setIsSubmitting(false);
    
    // Reset form
    setName('');
    setDescription('');
    setLocation('');
    setNotes('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
          <h2 className="text-lg font-semibold text-gray-900">افزودن آیتم جدید به {categoryTitle}</h2>
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
              نام آیتم <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
              placeholder="مثال: کتاب ریاضی"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-right"
              placeholder="توضیح کوتاهی د�� مورد این آیتم"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              مکان نگهداری
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
              placeholder="مثال: قفسه کتاب اتاق کار"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              یادداشت‌ها
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-right"
              placeholder="یادداشت‌های اضافی..."
            />
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
              disabled={isSubmitting || !name.trim()}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                  در حال افزودن...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 ml-2" />
                  افزودن آیتم
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
