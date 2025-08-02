import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/items" element={
              <PlaceholderPage
                title="مدیریت اقلام"
                description="در این بخش می‌توانید اقلام خود را مشاهده، ویرایش و مدیریت کنید."
              />
            } />
            <Route path="/items/add" element={
              <PlaceholderPage
                title="افزودن قلم جدید"
                description="فرم افزودن قلم جدید به مجموعه اقلام شما."
              />
            } />
            <Route path="/categories" element={
              <PlaceholderPage
                title="دسته‌بندی‌ها"
                description="مدیریت دسته‌بندی‌های اقلام شما."
              />
            } />
            <Route path="/reports" element={
              <PlaceholderPage
                title="گزارش‌ها"
                description="مشاهده گزارش‌ها و آمارهای اقلام شما."
              />
            } />
            <Route path="/shopping" element={
              <PlaceholderPage
                title="لیست خرید"
                description="مدیریت لیست خرید و اقلام مورد نیاز."
              />
            } />
            <Route path="/locations" element={
              <PlaceholderPage
                title="محل‌های نگهداری"
                description="مدیریت محل‌های نگهداری اقلام شما."
              />
            } />
            <Route path="/deposits" element={
              <PlaceholderPage
                title="امانات"
                description="مدیریت امانات و اقلام امانی."
              />
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
