import { ChevronLeft, ChevronRight, Package, Upload } from "lucide-react";

export function DashboardContent() {
  // Sample items for demonstration
  const itemThumbnails = [
    {
      id: 1,
      name: "لپ تاپ",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "کتاب",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "هدفون",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "عینک",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=150&h=150&fit=crop"
    },
    {
      id: 5,
      name: "آیتم جدید",
      image: null
    }
  ];

  return (
    <div className="flex gap-6 h-full">
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Main Item Display */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop" 
                  alt="لپ تاپ" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Item Thumbnails */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex justify-center space-x-4 space-x-reverse">
            {itemThumbnails.map((item) => (
              <button
                key={item.id}
                className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-colors overflow-hidden"
              >
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Package className="w-6 h-6 text-gray-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Item Information Panel - Right Side (Left in RTL) */}
      <div className="w-80 bg-white rounded-lg border border-gray-200 p-6 h-fit">
        <div className="space-y-6">
          {/* Image Upload Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              عکس آیتم
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">برای آپلود کلیک کنید</span>
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG یا JPEG</p>
                </div>
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>
          </div>

          {/* Item Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نام آیتم
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="نام آیتم را وارد کنید"
            />
          </div>

          {/* Category Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              دسته‌بندی
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">انتخاب دسته‌بندی</option>
              <option value="electronics">الکترونیک</option>
              <option value="clothing">پوشاک</option>
              <option value="books">کتاب</option>
              <option value="furniture">مبلمان</option>
            </select>
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              محل نگهداری
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">انتخاب محل</option>
              <option value="bedroom">اتاق خواب</option>
              <option value="living-room">اتاق نشیمن</option>
              <option value="kitchen">آشپزخانه</option>
              <option value="storage">انبار</option>
              <option value="parents-house">خانه والدین</option>
            </select>
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              توضیحات
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="توضیحات اضافی در مورد آیتم"
            />
          </div>

          {/* Quantity Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              تعداد
            </label>
            <input
              type="number"
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1"
            />
          </div>

          {/* Tags Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              برچسب‌ها
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="برچسب‌ها را با کاما جدا کنید"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
              ذخیره
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
              لغو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
