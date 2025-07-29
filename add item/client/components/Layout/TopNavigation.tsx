import { Search, Bell, Settings, User, Plus, Edit, Eye, MapPin, Archive } from "lucide-react";
import { cn } from "@/lib/utils";

export function TopNavigation() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Right side - User info and actions */}
        <div className="flex items-center space-x-4 space-x-reverse">
          {/* User Profile */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">اولدوز بهادری</p>
              <p className="text-xs text-gray-500">09123456789</p>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 space-x-reverse pr-4 border-r border-gray-200">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Plus className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Edit className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Eye className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MapPin className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Archive className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-red-500">
              <Archive className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center - Empty space */}
        <div className="flex-1"></div>

        {/* Left side - Search */}
        <div className="flex items-center">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="جستجو"
              className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
