import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Deposits from "./pages/Deposits";
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
          <Route path="/" element={<Index />} />
          <Route path="/deposits" element={
            <Layout>
              <Deposits />
            </Layout>
          } />
          <Route path="/items" element={
            <Layout>
              <PlaceholderPage
                title="آیتم ها"
                description="مدیریت و مشاهده آیتم‌های موجود در سیستم"
              />
            </Layout>
          } />
          <Route path="/categories" element={
            <Layout>
              <PlaceholderPage
                title="دسته بندی ها"
                description="مدیریت دسته‌بندی‌ها و تنظیمات آن‌ها"
              />
            </Layout>
          } />
          <Route path="/reports" element={
            <Layout>
              <PlaceholderPage
                title="گزارش ها"
                description="مشاهده گزارش‌ها و آمارها"
              />
            </Layout>
          } />
          <Route path="/locations" element={
            <Layout>
              <PlaceholderPage
                title="محل های من"
                description="مدیریت مکان‌ها و محل‌های ذخیره‌سازی"
              />
            </Layout>
          } />
          <Route path="/purchases" element={
            <Layout>
              <PlaceholderPage
                title="خریدها"
                description="تاریخچه و مدیریت خریدهای انجام شده"
              />
            </Layout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
