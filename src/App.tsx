import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TechNews from "./pages/TechNews";
import GetElectrified from "./pages/GetElectrified";
import ProductReviews from "./pages/ProductReviews";
import BuyingGuides from "./pages/BuyingGuides";
import VideoReviews from "./pages/VideoReviews";
import Search from "./pages/Search";
import Team from "./pages/Team";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Affiliate from "./pages/Affiliate";
import NotFound from "./pages/NotFound";

// Subcategory pages
import SmartphonesTablets from "./pages/subcategories/SmartphonesTablets";
import GamingPCs from "./pages/subcategories/GamingPCs";
import WearablesTech from "./pages/subcategories/WearablesTech";

// Author pages
import AriaLin from "./pages/authors/AriaLin";
import ImaniBrooks from "./pages/authors/ImaniBrooks";
import RajMalhotra from "./pages/authors/RajMalhotra";
import MilesDanner from "./pages/authors/MilesDanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tech-news" element={<TechNews />} />
          <Route path="/get-electrified" element={<GetElectrified />} />
          <Route path="/product-reviews" element={<ProductReviews />} />
          <Route path="/buying-guides" element={<BuyingGuides />} />
          <Route path="/video-reviews" element={<VideoReviews />} />
          <Route path="/search" element={<Search />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/affiliate" element={<Affiliate />} />
          
          {/* Subcategory Routes */}
          <Route path="/smartphones-tablets" element={<SmartphonesTablets />} />
          <Route path="/gaming-pcs" element={<GamingPCs />} />
          <Route path="/wearables-tech" element={<WearablesTech />} />
          
          {/* Author Routes */}
          <Route path="/author/aria-lin" element={<AriaLin />} />
          <Route path="/author/imani-brooks" element={<ImaniBrooks />} />
          <Route path="/author/raj-malhotra" element={<RajMalhotra />} />
          <Route path="/author/miles-danner" element={<MilesDanner />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
