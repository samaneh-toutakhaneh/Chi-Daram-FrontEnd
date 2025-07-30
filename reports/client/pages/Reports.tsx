import React from 'react';
import { ChevronDown, ChevronUp, Download, ExternalLink, Eye, MapPin, Package, Clock } from 'lucide-react';

const Reports: React.FC = () => {
  const [expandedRows, setExpandedRows] = React.useState<Record<string, boolean>>({});

  const toggleRow = (id: string) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const activities = [
    {
      id: '1',
      type: 'اضافه کرد شیء',
      details: 'اضافه کرد شیء',
      count: 1,
      summary: '۱',
      date: '۱۴۰۳/۰۹/۱۲ - ۱۰:۳۰',
      amount: '۲۸۷۸۰۷۴۱',
      actions: [
        { text: 'ویرایش فعالیت', variant: 'primary' },
        { text: 'بررسی لوازم دیجیتال', variant: 'secondary' },
        { text: 'نام آیتم: مدل ۲۰۲۴', variant: 'outline' }
      ]
    },
    {
      id: '2',
      type: 'اضافه کرد شیء',
      details: 'اضافه کرد شیء',
      count: 1,
      summary: '۱',
      date: '۱۴۰۳/۰۹/۱۲ - ۱۰:۳۰',
      amount: '۲۸۷۸۰۷۴۱',
      actions: []
    },
    {
      id: '3',
      type: 'ویرایش دسته بندی',
      details: 'ویرایش دسته بندی',
      count: 1,
      summary: '۱',
      date: '۱۴۰۳/۰۹/۱۲ - ۱۰:۳۰',
      amount: '۲۸۷۸۰۷۴۱',
      actions: []
    },
    {
      id: '4',
      type: 'حذف شیء',
      details: 'حذف شیء',
      count: 1,
      summary: '۱',
      date: '۱۴۰۳/۰۹/۱۲ - ۱۰:۳۰',
      amount: '۲۸۷۸۰۷۴۱',
      actions: []
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">گزارش‌ها</h1>
          <p className="text-gray-600 mt-1">تاریخچه فعالیت‌ها</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">آخرین بروزرسانی:</span>
          <span className="text-sm text-gray-700">۱۴۰۳/۰۹/۱۹</span>
        </div>
      </div>

      {/* Activity Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-12"></th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  نوع فعالیت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تعداد
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  خلاصه آیتم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  زمان فعالیت
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities.map((activity) => (
                <React.Fragment key={activity.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleRow(activity.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {expandedRows[activity.id] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {activity.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{activity.count}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{activity.summary}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{activity.date}</div>
                      <div className="text-xs text-gray-500">{activity.amount}</div>
                    </td>
                  </tr>
                  
                  {expandedRows[activity.id] && (
                    <tr className="bg-blue-50">
                      <td colSpan={5} className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {activity.actions.map((action, index) => (
                            <button
                              key={index}
                              className={`
                                px-3 py-1 rounded-full text-xs font-medium transition-colors
                                ${action.variant === 'primary' 
                                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                  : action.variant === 'secondary'
                                  ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }
                              `}
                            >
                              {action.text}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">کل اشیاء</p>
              <p className="text-2xl font-bold text-gray-900">۱۲۴</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">انبارها</p>
              <p className="text-2xl font-bold text-gray-900">۸</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">فعالیت‌های اخیر</p>
              <p className="text-2xl font-bold text-gray-900">۱۵</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
