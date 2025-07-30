import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Reports from "./pages/Reports";
import Shopping from "./pages/Shopping";
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
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/add" element={<AddItem />} />
          <Route path="/items/edit/:id" element={
            <PlaceholderPage
              title="ویرایش قلم"
              description="صفحه ویرایش اطلاعات قلم شامل تغییر تصویر، نام، دسته‌بندی و سایر ویژگی‌ها"
              pageName="ویرایش قلم"
            />
          } />
          <Route path="/items/:id" element={
            <PlaceholderPage
              title="جزئیات قلم"
              description="مشاهده جزئیات کامل قلم شامل تصاویر، موقعیت مکانی، تاریخچه و سایر اطلاعات"
              pageName="جزئیات قلم"
            />
          } />
          <Route path="/reports" element={<Reports />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/categories" element={
            <PlaceholderPage
              title="دسته‌بندی‌ها"
              description="مدیریت دسته‌بندی‌های اقلام، افزودن دسته جدید و سازماندهی اقلام بر اساس نوع"
              pageName="دسته‌بندی‌ها"
            />
          } />
          <Route path="/deposits" element={
            <PlaceholderPage
              title="انبارها و مکان‌ها"
              description="مدیریت مکان‌های نگهداری اقلام مانند اتاق‌ها، انبارها و محل‌های مختلف"
              pageName="انبارها"
            />
          } />
          <Route path="/deposits/add" element={
            <PlaceholderPage
              title="افزودن مکان جدید"
              description="افزودن مکان یا انبار جدید برای نگهداری اقلام"
              pageName="افزودن مکان"
            />
          } />
          <Route path="/profile" element={
            <PlaceholderPage
              title="ویرایش پروفایل"
              description="ویرایش اطلاعات شخصی، تنظیمات حساب کاربری و ترجیحات کاربری"
              pageName="پروفایل"
            />
          } />
          <Route path="/account" element={
            <PlaceholderPage
              title="حساب کاربری"
              description="مدیریت حساب کاربری، آدرس‌ها، تنظیمات امنیتی و خروج از حساب"
              pageName="حساب کاربری"
            />
          } />
          <Route path="/terms" element={
            <PlaceholderPage
              title="قوانین و مقررات"
              description="قوانین استفاده از سرویس چی‌دارم و حریم خصوصی کاربران"
              pageName="قوانین"
            />
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
