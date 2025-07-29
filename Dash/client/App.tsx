import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import PlaceholderPage from "./components/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/items" element={<Layout><PlaceholderPage title="آیتم ها" description="مدیریت آیتم های شخصی شما" /></Layout>} />
          <Route path="/items/add" element={<Layout><PlaceholderPage title="افزودن آیتم جدید" /></Layout>} />
          <Route path="/items/edit/:id" element={<Layout><PlaceholderPage title="ویرایش آیتم" /></Layout>} />
          <Route path="/items/:id" element={<Layout><PlaceholderPage title="جزئیات آیتم" /></Layout>} />
          <Route path="/deposits" element={<Layout><PlaceholderPage title="محل های من" description="مدیریت محل های نگهداری شما" /></Layout>} />
          <Route path="/deposits/add" element={<Layout><PlaceholderPage title="افزودن محل جدید" /></Layout>} />
          <Route path="/categories" element={<Layout><PlaceholderPage title="دسته‌بندی‌ها" description="مدیریت دسته‌بندی اقلام" /></Layout>} />
          <Route path="/reports" element={<Layout><Reports /></Layout>} />
          <Route path="/trusts" element={<Layout><PlaceholderPage title="امانات" description="مدیریت امانات و اشیاء قرضی" /></Layout>} />
          <Route path="/shopping-list" element={<Layout><PlaceholderPage title="خرید ها" description="مدیریت لیست خرید شما" /></Layout>} />
          <Route path="/profile" element={<Layout><PlaceholderPage title="ویرایش پروفایل" description="مدیریت اطلاعات شخصی" /></Layout>} />
          <Route path="/settings" element={<Layout><PlaceholderPage title="تنظیمات" description="تنظیمات سیستم" /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
