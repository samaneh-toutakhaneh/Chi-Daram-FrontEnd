import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="mr-64">
        <Header />
        <main className="p-6">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
              {description && (
                <p className="text-gray-600 mb-6 max-w-md">{description}</p>
              )}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-blue-800 text-sm">
                  این صفحه هنوز در حال توسعه است. برای تکمیل محتوای این صفحه، از ما درخواست کنید.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
