import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FileComplaint from "./pages/FileComplaint";
import TrackCases from "./pages/TrackCases";
import Emergency from "./pages/Emergency";
import VictimDashboard from "./pages/VictimDashboard";
import PoliceDashboard from "./pages/PoliceDashboard";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground transition-theme">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/file-complaint" element={<FileComplaint />} />
              <Route path="/track-cases" element={<TrackCases />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/victim-dashboard" element={<VictimDashboard />} />
              <Route path="/police-dashboard" element={<PoliceDashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
