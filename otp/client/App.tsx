import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder page components for different sections
const ItemsPage = () => (
  <PlaceholderPage
    title="اقلام"
    description="مدیریت و مشاهده تمام اقلام شخصی"
    icon={
      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    }
  />
);

const AddItemPage = () => (
  <PlaceholderPage
    title="اضافه کردن قلم جدید"
    description="یک قلم جدید به مجموعه خود اضافه کنید"
    icon={
      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    }
  />
);

const CategoriesPage = () => (
  <PlaceholderPage
    title="دسته‌بندی‌ها"
    description="مدیریت دسته‌بندی‌های اقلام"
    icon={
      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    }
  />
);

const DepositsPage = () => (
  <PlaceholderPage
    title="انبارها"
    description="مدیریت مکان���های نگهداری اقلام"
    icon={
      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
      </svg>
    }
  />
);

const ReportsPage = () => (
  <PlaceholderPage
    title="گزارش‌ها"
    description="گزارش‌های تفصیلی از اقلام و موجودی"
    icon={
      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    }
  />
);

const ProfilePage = () => (
  <PlaceholderPage
    title="پروفایل کاربری"
    description="مدیریت اطلاعات شخصی و تنظیمات حساب"
    icon={
      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    }
  />
);

const TermsPage = () => (
  <PlaceholderPage
    title="قوانین و مقررات"
    description="قوانین و شرایط استفاده از چی‌دارم"
    icon={
      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    }
  />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          
          {/* Main App Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Items Management */}
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items/add" element={<AddItemPage />} />
          <Route path="/items/edit/:id" element={<AddItemPage />} />
          <Route path="/items/view/:id" element={<ItemsPage />} />
          
          {/* Categories */}
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/add" element={<CategoriesPage />} />
          
          {/* Deposits/Storage Locations */}
          <Route path="/deposits" element={<DepositsPage />} />
          <Route path="/deposits/add" element={<DepositsPage />} />
          
          {/* Reports */}
          <Route path="/reports" element={<ReportsPage />} />
          
          {/* User Profile */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfilePage />} />
          <Route path="/account/exit" element={<ProfilePage />} />
          
          {/* Legal */}
          <Route path="/terms" element={<TermsPage />} />
          
          {/* 404 - Keep as last route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
