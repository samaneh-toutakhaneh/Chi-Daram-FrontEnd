import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">۴۰۴</h1>
        <p className="text-xl text-gray-600 mb-6">متأسفیم! صفحه مورد نظر یافت نشد</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>بازگشت به صفحه اصلی</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
