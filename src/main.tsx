import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Index from "./pages/Index";
import TechNews from "./pages/TechNews";
import GetElectrified from "./pages/GetElectrified";
import ProductReviews from "./pages/ProductReviews";
import BuyingGuides from "./pages/BuyingGuides";
import VideoReviews from "./pages/VideoReviews";
import Team from "./pages/Team";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Affiliate from "./pages/Affiliate";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

// Subcategory pages
import SmartphonesTablets from "./pages/subcategories/SmartphonesTablets";
import GamingPCs from "./pages/subcategories/GamingPCs";
import WearablesTech from "./pages/subcategories/WearablesTech";

// Author pages
import AriaLin from "./pages/authors/AriaLin";
import ImaniBrooks from "./pages/authors/ImaniBrooks";
import MilesDanner from "./pages/authors/MilesDanner";
import RajMalhotra from "./pages/authors/RajMalhotra";
import TheoChan from "./pages/authors/TheoChan";
import ZaraVelez from "./pages/authors/ZaraVelez";

import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tech-news" element={<TechNews />} />
          <Route path="/get-electrified" element={<GetElectrified />} />
          <Route path="/product-reviews" element={<ProductReviews />} />
          <Route path="/buying-guides" element={<BuyingGuides />} />
          <Route path="/video-reviews" element={<VideoReviews />} />
          <Route path="/team" element={<Team />} />
          <Route path="/search" element={<Search />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Subcategory routes */}
          <Route path="/smartphones-tablets" element={<SmartphonesTablets />} />
          <Route path="/gaming-pcs" element={<GamingPCs />} />
          <Route path="/wearables-tech" element={<WearablesTech />} />
          
          {/* Author routes */}
          <Route path="/authors/aria-lin" element={<AriaLin />} />
          <Route path="/authors/imani-brooks" element={<ImaniBrooks />} />
          <Route path="/authors/miles-danner" element={<MilesDanner />} />
          <Route path="/authors/raj-malhotra" element={<RajMalhotra />} />
          <Route path="/authors/theo-chan" element={<TheoChan />} />
          <Route path="/authors/zara-velez" element={<ZaraVelez />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
