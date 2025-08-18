import { useState } from 'react';
import { Plus, Trash2, Edit3, Copy } from 'lucide-react';
import { useShoppingList } from '@/hooks/useShoppingList';
import { ShoppingItem } from '@/types/shopping';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ShoppingList() {
  const { shoppingList, addItem, updateItem, deleteItem, toggleComplete } = useShoppingList();
  const navigate = useNavigate();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    quantity: 1,
    unit: 'عدد',
  });

  const handleAddItem = async () => {
    if (newItem.name && newItem.category) {
      await addItem(newItem);
      setNewItem({ name: '', category: '', quantity: 1, unit: 'عدد' });
      setIsAddDialogOpen(false);
    }
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    if (quantity > 0) {
      updateItem(itemId, { quantity });
    }
  };

  const handleCopyList = () => {
    if (shoppingList) {
      const listText = shoppingList.items.map(item =>
        `${item.name} - ${item.category} - ${item.quantity} ${item.unit}`
      ).join('\n');
      navigator.clipboard.writeText(listText);
      alert('لیست کپی شد!');
    }
  };

  const handleEditList = () => {
    const newName = prompt('نام جدید لیست:', 'لیست خریدها');
    if (newName) {
      alert(`نام لیست به "${newName}" تغییر یافت!`);
    }
  };

  const handleDeleteList = () => {
    if (confirm('آیا مطمئن هستید که می‌خواهید لیست را پاک کنید؟')) {
      alert('لیست پاک شد!');
    }
  };

  if (!shoppingList) {
    return <div className="p-6">در حال بارگذاری...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header with list name and add button */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">لیست خریدها</h2>
          <div className="flex space-x-2 space-x-reverse">
            <Button
              onClick={() => navigate('/categories')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="h-4 w-4 ml-2" />
              دسته بندی
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="h-4 w-4 ml-2" />
                  افزودن آیتم
                </Button>
              </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>افزودن آیتم جدید</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">نام آیتم</Label>
                  <Input
                    id="name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    placeholder="نام آیتم را وارد کنید"
                  />
                </div>
                <div>
                  <Label htmlFor="category">دسته بندی</Label>
                  <Input
                    id="category"
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    placeholder="دسته بندی را وارد کنید"
                  />
                </div>
                <div className="flex space-x-2 space-x-reverse">
                  <div className="flex-1">
                    <Label htmlFor="quantity">تعداد</Label>
                    <Input
                      id="quantity"
                      type="number"
                      value={newItem.quantity}
                      onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 1 })}
                      min="1"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="unit">واحد</Label>
                    <Input
                      id="unit"
                      value={newItem.unit}
                      onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                      placeholder="واحد"
                    />
                  </div>
                </div>
                <Button onClick={handleAddItem} className="w-full">
                  افزودن آیتم
                </Button>
              </div>
            </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-medium text-gray-500">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-4">نام خرید</div>
          <div className="col-span-3">دسته بندی</div>
          <div className="col-span-2 text-center">تعداد</div>
          <div className="col-span-2 text-center">عملیات</div>
        </div>

        {/* Shopping items */}
        <div className="space-y-2 mt-4">
          {shoppingList.items.map((item, index) => (
            <div key={item.id} className="grid grid-cols-12 gap-4 py-3 items-center hover:bg-gray-50 rounded-lg px-2">
              <div className="col-span-1 text-center">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-4">
                <span className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                  {item.name}
                </span>
              </div>
              <div className="col-span-3">
                <span className="text-gray-600">{item.category}</span>
              </div>
              <div className="col-span-2 text-center">
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <button className="p-1 text-orange-500 hover:bg-orange-50 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => deleteItem(item.id)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* List controls */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">لیست خرید ها</span>
          <div className="flex space-x-2 space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyList}
            >
              <Copy className="h-4 w-4 ml-1" />
              کپی
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleEditList}
            >
              ویرایش
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeleteList}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              پاک کردن
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
