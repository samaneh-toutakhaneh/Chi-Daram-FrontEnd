import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">۴۰۴</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            صفحه یافت نشد
          </h2>
          <p className="text-gray-600 mb-8">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button className="w-full sm:w-auto">
              بازگشت به داشبورد
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="w-full sm:w-auto">
              صفحه ورود
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
