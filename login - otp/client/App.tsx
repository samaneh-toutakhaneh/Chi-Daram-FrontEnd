import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/Login";
import PhoneInput from "./pages/PhoneInput";
import OtpVerify from "./pages/OtpVerify";
import Dashboard from "./pages/Dashboard";
import { AboutPage, ProfilePage, SettingsPage } from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./constants";

const queryClient = new QueryClient();

const AppContent = () => {
  useEffect(() => {
    // Set RTL direction on document
    document.body.dir = 'rtl';
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'fa';
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<PhoneInput />} />
        <Route path={ROUTES.PHONE_INPUT} element={<PhoneInput />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.OTP_VERIFY} element={<OtpVerify />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
