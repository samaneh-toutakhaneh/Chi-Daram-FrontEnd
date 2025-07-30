import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Categories from "./pages/Categories";
import Deposits from "./pages/Deposits";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Shopping from "./pages/Shopping";
import Loans from "./pages/Loans";
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
          <Route path="/items" element={<Items />} />
          <Route path="/items/add" element={<AddItem />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/loans" element={<Loans />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
