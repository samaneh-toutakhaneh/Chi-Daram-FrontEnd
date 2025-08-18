import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div className="min-h-screen bg-gray-50 flex"><Sidebar /><div className="flex-1 flex flex-col"><Header /><div className="flex-1"><PlaceholderPage title="داشبورد" description="به داشبورد مدیریت وسایل شخصی خوش آمدید" /></div></div></div>} />
          <Route path="/items" element={<div className="min-h-screen bg-gray-50 flex"><Sidebar /><div className="flex-1 flex flex-col"><Header /><div className="flex-1"><PlaceholderPage title="آیتم ها" /></div></div></div>} />
          <Route path="/categories" element={<div className="min-h-screen bg-gray-50 flex"><Sidebar /><div className="flex-1 flex flex-col"><Header /><div className="flex-1"><PlaceholderPage title="دسته بندی ها" /></div></div></div>} />
          <Route path="/reports" element={<div className="min-h-screen bg-gray-50 flex"><Sidebar /><div className="flex-1 flex flex-col"><Header /><div className="flex-1"><PlaceholderPage title="گزارش ها" /></div></div></div>} />
          <Route path="/locations" element={<div className="min-h-screen bg-gray-50 flex"><Sidebar /><div className="flex-1 flex flex-col"><Header /><div className="flex-1"><PlaceholderPage title="محل های من" /></div></div></div>} />
          <Route path="/purchases" element={<Index />} />
          <Route path="/loans" element={<div className="min-h-screen bg-gray-50 flex"><Sidebar /><div className="flex-1 flex flex-col"><Header /><div className="flex-1"><PlaceholderPage title="امانات" /></div></div></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
