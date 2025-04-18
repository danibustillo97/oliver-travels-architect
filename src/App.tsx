
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import AdminDashboard from "./pages/admin/Dashboard";
import PackageBuilder from "./pages/admin/PackageBuilder";
import AuthForm from "./components/auth/AuthForm";
import AuthGuard from "./components/auth/AuthGuard";
import NotFound from "./pages/NotFound";
import VirtualOfficePage from "./pages/VirtualOfficePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/virtual-office" element={<VirtualOfficePage />} />
          <Route path="/admin" element={
            <AuthGuard>
              <AdminDashboard />
            </AuthGuard>
          } />
          <Route path="/admin/package-builder" element={
            <AuthGuard>
              <PackageBuilder />
            </AuthGuard>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </QueryClientProvider>
  );
};

export default App;
