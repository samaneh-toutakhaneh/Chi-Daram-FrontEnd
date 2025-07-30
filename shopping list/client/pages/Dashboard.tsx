import { Package, MapPin, Tags, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const statsCards = [
  {
    title: "کل اقلام",
    value: "۱۲۴",
    icon: Package,
    trend: "+۱۲",
    trendLabel: "این ماه"
  },
  {
    title: "دسته بندی ها",
    value: "۸",
    icon: Tags,
    trend: "+۲",
    trendLabel: "جدید"
  },
  {
    title: "انبارها",
    value: "۵",
    icon: MapPin,
    trend: "۱۰۰%",
    trendLabel: "فعال"
  },
  {
    title: "ارزش کل",
    value: "۱۲٫۵۰۰٫۰۰۰",
    icon: TrendingUp,
    trend: "+۱۵%",
    trendLabel: "افزایش"
  }
];

const recentItems = [
  {
    id: 1,
    name: "لپ تاپ ایسوس",
    category: "الکترونیک",
    location: "اتاق خواب",
    date: "۱۴۰۳/۰۸/۱۵",
    status: "فعال"
  },
  {
    id: 2,
    name: "کتاب برنامه نویسی",
    category: "کتاب",
    location: "کتابخانه",
    date: "۱۴۰۳/۰۸/۱۲",
    status: "فعال"
  },
  {
    id: 3,
    name: "لوازم آرایشی",
    category: "شخصی",
    location: "حمام",
    date: "۱۴۰۳/۰۸/۱۰",
    status: "فعال"
  }
];

const quickActions = [
  { label: "افزودن قلم جدید", path: "/items/add", primary: true },
  { label: "جستجوی اقلام", path: "/items" },
  { label: "مدیریت دسته بندی ها", path: "/categories" },
  { label: "گزارش گیری", path: "/reports" }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Recent Items Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>آخرین اقلام افزوده شده</CardTitle>
            <Button variant="outline" size="sm">
              مشاهده همه
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right py-2 text-sm font-medium text-muted-foreground">
                    نام آیتم
                  </th>
                  <th className="text-right py-2 text-sm font-medium text-muted-foreground">
                    دسته بندی
                  </th>
                  <th className="text-right py-2 text-sm font-medium text-muted-foreground">
                    محل قرارگیری
                  </th>
                  <th className="text-right py-2 text-sm font-medium text-muted-foreground">
                    تاریخ افزودن
                  </th>

                </tr>
              </thead>
              <tbody>
                {recentItems.map((item) => (
                  <tr key={item.id} className="border-b border-border last:border-b-0">
                    <td className="py-3 text-sm font-medium">{item.name}</td>
                    <td className="py-3 text-sm text-muted-foreground">
                      <Badge variant="secondary">{item.category}</Badge>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{item.location}</td>
                    <td className="py-3 text-sm text-muted-foreground">{item.date}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>پربازدیدترین دسته بندی ها</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "الکترونیک", count: "۴۲ قلم", percentage: 85 },
                { name: "کتاب", count: "۲۸ قلم", percentage: 65 },
                { name: "لباس", count: "۱۹ قلم", percentage: 45 },
                { name: "لوازم خانه", count: "۳۵ قلم", percentage: 75 }
              ].map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.count}</p>
                  </div>
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>محل ها</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "اتاق خواب", count: "۳۲ قلم" },
                { name: "آشپزخانه", count: "۲۴ قلم" },
                { name: "انباری", count: "۱۸ قلم" },
                { name: "سالن", count: "۱۵ قلم" }
              ].map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-medium">{location.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{location.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
