import { useState } from 'react';
import { X } from 'lucide-react';

export default function Dashboard() {
  const [showAddressModal, setShowAddressModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg border border-chi-daram-border p-8 min-h-96">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-chi-daram-text-dark">محل های من</h2>
          <button
            onClick={() => setShowAddressModal(true)}
            className="bg-chi-daram-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            ثبت آدرس
          </button>
        </div>
        <div className="text-right">
          <p className="text-chi-daram-text-light">آدرسی از شما ثبت نشده، یک آدرس ثبت کنید</p>
        </div>
      </div>

      {/* Address Registration Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" dir="rtl">
          <div className="bg-white rounded-lg border border-chi-daram-border p-6 w-96 max-w-90vw">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-chi-daram-text-dark">ثبت آدرس جدید</h3>
              <button
                onClick={() => setShowAddressModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-chi-daram-text-dark mb-2">
                  نام محل
                </label>
                <input
                  type="text"
                  placeholder="مثال: خانه، دفتر، انبار"
                  className="w-full px-3 py-2 border border-chi-daram-border rounded-lg focus:outline-none focus:ring-2 focus:ring-chi-daram-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-chi-daram-text-dark mb-2">
                  آدرس کامل
                </label>
                <textarea
                  rows={3}
                  placeholder="آدرس کامل را وارد کنید"
                  className="w-full px-3 py-2 border border-chi-daram-border rounded-lg focus:outline-none focus:ring-2 focus:ring-chi-daram-blue"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddressModal(false)}
                  className="flex-1 px-4 py-2 border border-chi-daram-border rounded-lg text-chi-daram-text-dark hover:bg-gray-50 transition-colors"
                >
                  لغو
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-chi-daram-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  ثبت آدرس
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
