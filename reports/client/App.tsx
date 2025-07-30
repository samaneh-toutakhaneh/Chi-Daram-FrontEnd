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
import AddItem from "./pages/AddItem";
import Categories from "./pages/Categories";
import Reports from "./pages/Reports";
import Trusts from "./pages/Trusts";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/items" element={<Items />} />
            <Route path="/items/add" element={<AddItem />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/deposits" element={<PlaceholderPage title="محل های من" description="مدیریت محل‌های نگهداری اشیاء" />} />
            <Route path="/shopping" element={<PlaceholderPage title="خرید ها" description="مدیریت خریدها و اقلامی که نیاز به خرید دارید" />} />
            <Route path="/trusts" element={<Trusts />} />
            <Route path="/profile" element={<PlaceholderPage title="پروفایل کاربری" description="مدیریت اطلاعات شخصی و تنظیمات حساب کاربری" />} />
            <Route path="/settings" element={<PlaceholderPage title="تنظیمات" description="تنظیمات عمومی برنامه و سفارشی‌سازی" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
