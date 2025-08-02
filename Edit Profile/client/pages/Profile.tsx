import { useState } from "react";
import { Camera, Edit2, MapPin, Calendar, Phone, Mail, User, Key, Bell, Globe, LogOut } from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("account");

  const menuItems = [
    { id: "account", label: "اطلاعات حساب کاربری", icon: User },
    { id: "password", label: "رمز عبور", icon: Key },
    { id: "notifications", label: "اعلان‌ها", icon: Bell },
    { id: "language", label: "زبان", icon: Globe },
    { id: "locations", label: "آدرس‌ها", icon: MapPin },
    { id: "privacy", label: "حریم خصوصی", icon: User },
    { id: "support", label: "پشتیبانی", icon: User },
    { id: "logout", label: "خروج", icon: LogOut },
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">آیدونو بهافر</h1>
              <p className="text-sm text-gray-500">09123456789</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 text-blue-500 text-sm hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors">
            <Edit2 className="w-4 h-4" />
            ویرایش
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Menu */}
        <div className="w-80 bg-white border-l border-gray-200 min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 text-right rounded-lg transition-colors text-sm
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-500' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === "account" && (
            <div className="max-w-2xl space-y-6">
              {/* Profile Picture Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">تصویر پروفایل</h2>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <button className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">فرمت‌های مجاز: JPG, PNG</p>
                    <p className="text-sm text-gray-600">حداکثر حجم: ۲ مگابایت</p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">اطلاعات شخصی</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                    <div className="relative">
                      <input
                        type="text"
                        value="آیدونو بهافر"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                      <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">تأیید شده</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">شماره موبایل</label>
                    <div className="relative">
                      <input
                        type="text"
                        value="09123456789"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                      <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">تأیید شده</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل</label>
                    <div className="relative">
                      <input
                        type="email"
                        value="chidaram@gmail.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">شماره همراه</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="شماره همراه"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-red-600">تأیید نشده</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    ذخیره تغییرات
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "password" && (
            <div className="max-w-2xl space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">تغییر رمز عبور</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رمز عبور فعلی</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رمز عبور جدید</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">تکرار رمز عبور جدید</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    تغییر رمز عبور
                  </button>
                </div>
              </div>
            </div>
          )}

          {(activeTab !== "account" && activeTab !== "password") && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {menuItems.find(item => item.id === activeTab)?.label}
                </h2>
                <p className="text-gray-600">این بخش در حال توسعه است و به زودی در دسترس خواهد بود.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
