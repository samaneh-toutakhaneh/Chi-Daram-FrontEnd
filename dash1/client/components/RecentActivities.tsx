import { cn } from "@/lib/utils";

interface Activity {
  id: number;
  name: string;
  date: string;
  status: "completed" | "pending" | "cancelled";
  description: string;
}

const activities: Activity[] = [
  {
    id: 1,
    name: "نشریات ورزشی",
    date: "۱۴۰۲/۰۲/۲۶ ۲۱:۱۵",
    status: "completed",
    description: "لباس ورزشی"
  },
  {
    id: 2,
    name: "کفش پیاده روی",
    date: "۱۴۰۲/۰۲/۲۶ ۱۵:۱۳",
    status: "pending", 
    description: "لباس ورزشی"
  },
  {
    id: 3,
    name: "اجازه",
    date: "۱۴۰۲/۰۲/۲۶ ۱۲:۱۳",
    status: "cancelled",
    description: "تحویل"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-blue-100 text-blue-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "موجود";
    case "pending":
      return "درحال";
    case "cancelled":
      return "حذف";
    default:
      return "";
  }
};

export default function RecentActivities() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">فعالیت های اخیر</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                نوع عملیات
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                تاریخ
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                برچسب
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                نام آیتم
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={cn(
                    "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full",
                    getStatusColor(activity.status)
                  )}>
                    {getStatusText(activity.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {activity.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {activity.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {activity.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
          مشاهده بیشتر
        </button>
      </div>
    </div>
  );
}
