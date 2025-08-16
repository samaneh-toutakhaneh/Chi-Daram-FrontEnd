import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatsCards from "@/components/StatsCards";
import RecentActivities from "@/components/RecentActivities";
import ProductGrid from "@/components/ProductGrid";
import AddItemModal from "@/components/AddItemModal";

export default function Dashboard() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddItem = (item: {
    name: string;
    category: string;
    location: string;
    description: string;
    price?: string;
    image?: string;
  }) => {
    console.log("آیتم ��دید اضافه شد:", item);
    // اینجا می‌تونید API call برای ذخیره آیتم اضافه کنید
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="mr-64">
        <Header />
        <main className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">داشبورد</h2>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              افزودن آیتم
            </button>
          </div>

          <StatsCards />
          <RecentActivities />
          <ProductGrid />
        </main>
      </div>

      {/* Add Item Modal */}
      <AddItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddItem}
      />
    </div>
  );
}
