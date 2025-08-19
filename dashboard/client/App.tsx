import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
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
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/items" element={<Items />} />
          <Route path="/categories" element={<PlaceholderPage title="دسته بندی ها" description="مدیریت دسته بندی های محصولات" />} />
          <Route path="/reports" element={<PlaceholderPage title="گزارش ها" description="گزارش های مالی و عملکرد" />} />
          <Route path="/locations" element={<PlaceholderPage title="مکان های من" description="مدیریت آدرس ها و مکان ها" />} />
          <Route path="/purchase" element={<PlaceholderPage title="خرید ها" description="تاریخچه خریدها" />} />
          <Route path="/security" element={<PlaceholderPage title="امانات" description="مدیریت امانات و امنیت" />} />
          <Route path="/profile" element={<PlaceholderPage title="پروفایل" description="اطلاعات حساب کاربری" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
