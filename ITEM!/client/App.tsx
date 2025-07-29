import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import Categories from "./pages/Categories";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./components/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/items" element={<Items />} />
            <Route path="/items/:id" element={
              <PlaceholderPage 
                title="جزئیات آیتم" 
                description="مشاهده کامل اطلاعات آیتم انتخابی." 
              />
            } />
            <Route path="/items/add" element={
              <PlaceholderPage 
                title="افزودن آیتم جدید" 
                description="فرم افزودن آیتم جدید به مجموعه شما." 
              />
            } />
            <Route path="/items/edit/:id" element={
              <PlaceholderPage 
                title="ویرایش آیتم" 
                description="ویرایش اطلاعات آیتم انتخابی." 
              />
            } />
            <Route path="/categories" element={<Categories />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={
              <PlaceholderPage 
                title="ویرایش پروفایل" 
                description="مدیریت اطلاعات شخصی و تنظیمات حساب کاربری." 
              />
            } />
            <Route path="/history" element={
              <PlaceholderPage 
                title="تاریخچه سفارش‌ها" 
                description="مشاهده تمام سفارشات و خریدهای قبلی." 
              />
            } />
            <Route path="/addresses" element={
              <PlaceholderPage 
                title="آدرس‌های من" 
                description="مدیریت آدرس‌های ذخیره شده برای ارسال." 
              />
            } />
            <Route path="/purchases" element={
              <PlaceholderPage 
                title="خریدها" 
                description="لیست خریدها و مدیریت سبد خرید." 
              />
            } />
            <Route path="/logout" element={
              <PlaceholderPage 
                title="خروج از حساب" 
                description="آیا مطمئن هستید که می‌خواهید از حساب خود خارج شوید؟" 
              />
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
