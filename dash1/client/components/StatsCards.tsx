import { cn } from "@/lib/utils";

interface StatCard {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: "blue" | "gray" | "green";
}

const statsData: StatCard[] = [
  {
    title: "تعداد کل لیست ها",
    value: "۱۲",
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "تعداد لیست هایی که اضافه شده",
    value: "۱",
    color: "gray",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "لیست های از رده خارج شده",
    value: "۱",
    color: "gray",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={cn(
            "bg-white rounded-lg p-6 border shadow-sm",
            stat.color === "blue" && "border-l-4 border-l-blue-500",
            stat.color === "gray" && "border-l-4 border-l-gray-300"
          )}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">
                {stat.title}
              </p>
              <p className={cn(
                "text-2xl font-bold",
                stat.color === "blue" ? "text-blue-600" : "text-gray-900"
              )}>
                {stat.value}
              </p>
            </div>
            {stat.icon && (
              <div className={cn(
                "p-3 rounded-lg",
                stat.color === "blue" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
              )}>
                {stat.icon}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
