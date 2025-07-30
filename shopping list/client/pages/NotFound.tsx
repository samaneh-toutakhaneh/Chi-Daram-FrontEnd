import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
            </div>
            <CardTitle className="text-2xl">۴۰۴</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              متأسفانه صفحه مورد نظر یافت نشد
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              ممکن است آدرس صفحه تغییر کرده یا حذف شده باشد.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link to="/">
                  <Home className="w-4 h-4 ml-2" />
                  بازگشت به داشبورد
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                بازگشت به صفحه قبل
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NotFound;
