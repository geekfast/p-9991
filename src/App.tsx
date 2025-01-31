import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Riwayat from "./pages/Riwayat";
import AllServices from "./pages/AllServices";
import NotFound from "./pages/NotFound";
import Dompet from "./pages/Dompet";
import Saya from "./pages/Saya";
import Pay from "./pages/Pay";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/dompet" element={<Dompet />} />
          <Route path="/saya" element={<Saya />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;