import { Package, Plus, Search, TrendingUp, Archive, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-0">
      <div className="bg-white h-[calc(100vh-4rem)] p-6">
        <div className="w-80 ml-0">
          <h2 className="text-lg font-semibold text-foreground mb-6 text-right">اطلاعات حساب کاربری</h2>

          <div className="space-y-4 text-right">
          <div className="text-right">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">نام و نام خانوادگی</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="نام و نام خانوادگی خود را وارد کنید"
            />
          </div>

          <div className="text-right">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">رمز عبور</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>

          <div className="text-right">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">شماره موبایل</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="شماره موبایل خود را وارد کنید"
            />
          </div>

          <div className="text-right">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">ایمیل</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
