import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  const defaultIcon = (
    <svg
      className="w-12 h-12 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </Link>
              <h1 className="text-xl font-bold text-gray-900">چی‌دارم</h1>
            </div>
            
            <nav className="flex items-center gap-6">
              <Link to="/items" className="text-gray-600 hover:text-gray-900">
                اقلام
              </Link>
              <Link to="/categories" className="text-gray-600 hover:text-gray-900">
                دسته‌بندی‌ها
              </Link>
              <Link to="/deposits" className="text-gray-600 hover:text-gray-900">
                انبارها
              </Link>
              <Link to="/reports" className="text-gray-600 hover:text-gray-900">
                گزارش‌ها
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">
                پروفایل
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                {icon || defaultIcon}
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                {description}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                این صفحه در حال توسعه است. برای تکمیل محتوای این بخش، لطفاً درخواست خود را ادامه دهید.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/dashboard">
                  <Button variant="outline" className="w-full sm:w-auto">
                    بازگشت به داشبورد
                  </Button>
                </Link>
                <Button className="w-full sm:w-auto">
                  درخواست تکمیل
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
