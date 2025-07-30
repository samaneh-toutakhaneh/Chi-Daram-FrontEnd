import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Construction className="w-8 h-8 text-muted-foreground" />
              </div>
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              {description}
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                این صفحه هنوز در حال توسعه است.
              </p>
              <p className="text-xs text-muted-foreground">
                برای اضافه کردن محتوای این صفحه، لطفاً ادامه دهید.
              </p>
            </div>
            <div className="mt-6">
              <Button variant="outline" onClick={() => window.history.back()}>
                بازگشت
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
