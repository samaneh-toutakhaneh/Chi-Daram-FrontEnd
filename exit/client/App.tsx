import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exit from "./pages/Exit";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exit" element={<Exit />} />
          <Route path="/items" element={<PlaceholderPage title="آیتم ها" description="مدیریت آیتم‌های موجود در سیستم." />} />
          <Route path="/categories" element={<PlaceholderPage title="دسته بندی ها" description="مدیریت دسته‌بندی‌های مختلف." />} />
          <Route path="/reports" element={<PlaceholderPage title="گزارش ها" description="مشاهده گزارش‌های مختلف سیستم." />} />
          <Route path="/locations" element={<PlaceholderPage title="محل های من" description="مدیریت مکان‌های ثبت شده." />} />
          <Route path="/purchases" element={<PlaceholderPage title="خریدها" description="مدیریت خریدهای انجام شده." />} />
          <Route path="/deposits" element={<PlaceholderPage title="امانات" description="مدیریت امانات و ودایع." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
