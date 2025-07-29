import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
        <Construction className="w-8 h-8 text-muted-foreground" />
      </div>
      
      <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
      
      {description && (
        <p className="text-muted-foreground mb-6 max-w-md">
          {description}
        </p>
      )}
      
      <p className="text-sm text-muted-foreground">
        این صفحه در دست توسعه است. برای پیاده‌سازی محتوای این بخش، دستورات بیشتری بدهید.
      </p>
    </div>
  );
}
