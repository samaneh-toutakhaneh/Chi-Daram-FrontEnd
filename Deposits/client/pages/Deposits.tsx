import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ChevronDown } from 'lucide-react';

interface Deposit {
  id: string;
  title: string;
  category: string;
  status: 'در امانت' | 'بازگشت داده شده';
  recipient?: string;
  deliveryDate?: string;
  returnDate?: string;
  image: string;
  detailsOpen: boolean;
}

const Deposits: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deposits, setDeposits] = useState<Deposit[]>([
    {
      id: '1',
      title: 'کفش کتونی‌رودی',
      category: 'لباس ورزشی',
      status: 'در امانت',
      recipient: 'جناب',
      deliveryDate: '1404/03/28',
      returnDate: 'نامعلوم',
      image: '/api/placeholder/48/48',
      detailsOpen: true,
    },
    {
      id: '2',
      title: 'آیپد پرو',
      category: 'دسته بندی',
      status: 'در امانت',
      recipient: 'علی',
      deliveryDate: '1404/03/25',
      returnDate: 'نامعلوم',
      image: '/api/placeholder/48/48',
      detailsOpen: false,
    },
    {
      id: '3',
      title: 'کتاب صد سال تنهایی',
      category: 'کتاب ها',
      status: 'بازگشت داده شده',
      recipient: 'احمد',
      deliveryDate: '1404/03/20',
      returnDate: '1404/03/27',
      image: '/api/placeholder/48/48',
      detailsOpen: false,
    },
  ]);

  const [newDepositForm, setNewDepositForm] = useState({
    title: '',
    category: '',
    recipient: '',
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDeposit, setEditingDeposit] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    category: '',
    recipient: '',
  });

  const toggleDetails = (id: string) => {
    setDeposits(prev => 
      prev.map(deposit => 
        deposit.id === id 
          ? { ...deposit, detailsOpen: !deposit.detailsOpen }
          : deposit
      )
    );
  };

  const addNewDeposit = () => {
    if (!newDepositForm.title || !newDepositForm.category) {
      alert('لطفاً نام امانت و دسته بندی را وارد کنید');
      return;
    }

    const newDeposit: Deposit = {
      id: Date.now().toString(),
      title: newDepositForm.title,
      category: newDepositForm.category,
      status: 'در امانت',
      recipient: newDepositForm.recipient || 'نامعلوم',
      deliveryDate: new Date().toLocaleDateString('fa-IR'),
      returnDate: 'نامعلوم',
      image: '/api/placeholder/48/48',
      detailsOpen: false,
    };

    setDeposits(prev => [newDeposit, ...prev]);
    setNewDepositForm({ title: '', category: '', recipient: '' });
    setShowAddForm(false);
  };

  const removeDeposit = (id: string) => {
    if (confirm('آیا مطمئن هستید که می‌خواهید این امانت را حذف کنید؟')) {
      setDeposits(prev => prev.filter(deposit => deposit.id !== id));
    }
  };

  const startEdit = (deposit: Deposit) => {
    setEditingDeposit(deposit.id);
    setEditForm({
      title: deposit.title,
      category: deposit.category,
      recipient: deposit.recipient || '',
    });
  };

  const cancelEdit = () => {
    setEditingDeposit(null);
    setEditForm({ title: '', category: '', recipient: '' });
  };

  const updateDeposit = () => {
    if (!editForm.title || !editForm.category) {
      alert('لطفاً نام امانت و دسته بندی را وارد کنید');
      return;
    }

    setDeposits(prev =>
      prev.map(deposit =>
        deposit.id === editingDeposit
          ? {
              ...deposit,
              title: editForm.title,
              category: editForm.category,
              recipient: editForm.recipient || 'نامعلوم',
            }
          : deposit
      )
    );

    cancelEdit();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={cn(
        'fixed inset-y-0 right-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <Sidebar />
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="pt-8">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">امانت های من</h2>
                </div>
                <button 
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <div className="w-4 h-4 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-600 text-xs font-bold">+</span>
                  </div>
                  <span className="text-sm font-medium">ثبت امانت جدید</span>
                </button>
              </div>

              {/* Add New Deposit Form */}
              {showAddForm && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-md font-medium text-gray-900 mb-4">افزودن امانت جدید</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="نام امانت"
                      value={newDepositForm.title}
                      onChange={(e) => setNewDepositForm(prev => ({ ...prev, title: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                    />
                    <input
                      type="text"
                      placeholder="دسته بندی"
                      value={newDepositForm.category}
                      onChange={(e) => setNewDepositForm(prev => ({ ...prev, category: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                    />
                    <input
                      type="text"
                      placeholder="نام دریافت کننده"
                      value={newDepositForm.recipient}
                      onChange={(e) => setNewDepositForm(prev => ({ ...prev, recipient: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                    />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={addNewDeposit}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      افزودن
                    </button>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      لغو
                    </button>
                  </div>
                </div>
              )}

              {/* Deposits List */}
              <div className="space-y-4">
                {deposits.map((deposit) => (
                  <div key={deposit.id}>
                    {/* Edit Form */}
                    {editingDeposit === deposit.id && (
                      <div className="mb-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h4 className="text-md font-medium text-gray-900 mb-4">ویرایش امانت</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <input
                            type="text"
                            placeholder="نام امانت"
                            value={editForm.title}
                            onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                          />
                          <input
                            type="text"
                            placeholder="دسته بندی"
                            value={editForm.category}
                            onChange={(e) => setEditForm(prev => ({ ...prev, category: e.target.value }))}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                          />
                          <input
                            type="text"
                            placeholder="نام دریافت کننده"
                            value={editForm.recipient}
                            onChange={(e) => setEditForm(prev => ({ ...prev, recipient: e.target.value }))}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                          />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <button
                            onClick={updateDeposit}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            ذخیره
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                          >
                            لغو
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Main Item Row */}
                    <div className="flex items-start justify-between gap-6">
                      {/* Product Info - Right Side */}
                      <div className="flex items-center gap-4">
                        <img
                          src={deposit.image}
                          alt={deposit.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{deposit.title}</p>
                          <p className="text-xs text-gray-600">{deposit.category}</p>
                        </div>
                      </div>

                      {/* Details in the middle - Only show when expanded */}
                      {deposit.detailsOpen && (
                        <div className="bg-gray-50 rounded-lg p-3 flex-1 max-w-md">
                          <div className="flex items-center justify-end mb-2">
                            <button 
                              onClick={() => removeDeposit(deposit.id)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                            >
                              <span className="text-xs">🗑</span>
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="text-right">
                              <p className="font-medium text-gray-900">{deposit.returnDate}</p>
                              <p className="text-gray-500">تاریخ بازگشت</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">{deposit.deliveryDate}</p>
                              <p className="text-gray-500">تاریخ تحویل</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">{deposit.category}</p>
                              <p className="text-gray-500">دسته بندی</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">{deposit.recipient}</p>
                              <p className="text-gray-500">نام دریافت کننده</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Actions - Left Side */}
                      <div className="flex items-center gap-3">
                        {/* Edit and Delete Buttons */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => startEdit(deposit)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="ویرایش"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => removeDeposit(deposit.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="حذف"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>

                        <button className={cn(
                          "px-3 py-1 text-xs rounded-full",
                          deposit.status === 'در امانت'
                            ? "text-orange-600 bg-orange-100"
                            : "text-blue-600 bg-blue-100"
                        )}>
                          {deposit.status}
                        </button>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-blue-500">
                            {deposit.detailsOpen ? 'بستن جزئیات' : 'مشاهده جزئیات'}
                          </span>
                          <button
                            onClick={() => toggleDetails(deposit.id)}
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                          >
                            <ChevronDown
                              size={16}
                              className={cn(
                                "transition-transform duration-200",
                                deposit.detailsOpen ? "rotate-180" : ""
                              )}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {deposits.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>هیچ امانتی ثبت نشده است</p>
                  </div>
                )}

                <div className="text-right text-xs text-gray-500 mt-4">
                  <p>کتاب ها</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Deposits;
