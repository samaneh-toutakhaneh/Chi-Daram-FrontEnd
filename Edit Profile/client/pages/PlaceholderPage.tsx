import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg border border-border p-12">
          <Construction className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-muted-foreground mb-6">{description}</p>
          <p className="text-sm text-muted-foreground">
            این صفحه در حال توسعه است. برای اضافه کردن محتوا به این بخش، لطفاً درخواست خود را ادامه دهید.
          </p>
        </div>
      </div>
    </div>
  );
}
