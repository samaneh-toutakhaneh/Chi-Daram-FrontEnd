import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Package, 
  Plus, 
  Search, 
  BarChart3, 
  Settings,
  User,
  ShoppingBag
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">چی</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">چی‌دارم</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            خوش آمدید!
          </h1>
          <p className="text-gray-600">
            اقلام خود را مدیریت کنید و همیشه بدانید چه چیزی کجا دارید
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">افزودن قلم</h3>
                <p className="text-sm text-gray-600">قلم جدید اضافه کنید</p>
              </div>
            </div>
            <Button asChild className="w-full mt-4">
              <Link to="/items/add">افزودن</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">اقلام من</h3>
                <p className="text-sm text-gray-600">مشاهده همه اقلام</p>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link to="/items">مشاهده</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">گزارش‌ها</h3>
                <p className="text-sm text-gray-600">آمار و گزارش‌ها</p>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link to="/reports">مشاهده</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">لیست خرید</h3>
                <p className="text-sm text-gray-600">اقلام مورد نیاز</p>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link to="/shopping">مشاهده</Link>
            </Button>
          </Card>
        </div>

        {/* Recent Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              اقلام اخیر
            </h2>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">قلم نمونه {item}</h3>
                    <p className="text-sm text-gray-600">اتاق خواب</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              آمار کلی
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-gray-600">کل اقلام</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">دسته‌بندی</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">5</div>
                <div className="text-sm text-gray-600">مکان</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-gray-600">لیست خرید</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
