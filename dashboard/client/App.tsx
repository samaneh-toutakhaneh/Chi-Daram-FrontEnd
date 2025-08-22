import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";

import Category from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail";
import Reports from "./pages/Reports";
import Address from "./pages/Address";
import ShoppingList from "./pages/ShoppingList";
import Deposits from "./pages/Deposits";
import Exit from "./pages/Exit";
import Login from "./pages/Login";
import OtpVerify from "./pages/OtpVerify";
import PhoneInput from "./pages/PhoneInput";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/otp-verify" element={<OtpVerify />} />
          <Route path="/phone-input" element={<PhoneInput />} />

          {/* Main Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/address" element={<Address />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/exit" element={<Exit />} />

          {/* Catch-all */}
        
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
