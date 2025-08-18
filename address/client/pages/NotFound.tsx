import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg border border-gray-200 min-h-96">
        <div className="flex flex-col items-center justify-center h-96 text-center p-8">
          <div className="text-gray-400 mb-6">
            <h1 className="text-8xl font-bold">۴۰۴</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            صفحه پیدا نشد
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            متأسفانه صفحه‌ای که دنبال آن می‌گردید یافت نشد. لطفاً آدرس را بررسی کنید یا به صفحه اصلی بازگردید.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
