import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail";
import PlaceholderPage from "./components/PlaceholderPage";
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
            <Route path="/items" element={<PlaceholderPage title="آیتم ها" />} />
            <Route path="/categories" element={<Dashboard />} />
            <Route path="/categories/:slug" element={<CategoryDetail />} />
            <Route path="/reports" element={<PlaceholderPage title="گزارش ��ا" />} />
            <Route path="/locations" element={<PlaceholderPage title="محل های من" />} />
            <Route path="/purchases" element={<PlaceholderPage title="خرید ها" />} />
            <Route path="/deposits" element={<PlaceholderPage title="امانات" />} />
            <Route path="/profile" element={<PlaceholderPage title="پروفایل" />} />
            <Route path="/logout" element={<PlaceholderPage title="خروج" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
