import { DashboardLayout } from "./DashboardLayout";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-gray-400">📝</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-sm text-gray-500">
            این صفحه در حال توسعه است. برای اتمام آن، لطفاً درخواست خود را ادامه دهید.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
