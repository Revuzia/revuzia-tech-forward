import React from 'react';
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
import AIMachineLearning from "./pages/subcategories/AIMachineLearning";
import Cybersecurity from "./pages/subcategories/Cybersecurity";
import CloudComputing from "./pages/subcategories/CloudComputing";
import SmartHomeTech from "./pages/subcategories/SmartHomeTech";
import BestInClass from "./pages/subcategories/BestInClass";
import BlockchainCrypto from "./pages/subcategories/BlockchainCrypto";
import DataAnalytics from "./pages/subcategories/DataAnalytics";
import EnterpriseTech from "./pages/subcategories/EnterpriseTech";
import SmartAppliances from "./pages/subcategories/SmartAppliances";
import AudioTech from "./pages/subcategories/AudioTech";
import DisplayTech from "./pages/subcategories/DisplayTech";
import AudioVideo from "./pages/subcategories/AudioVideo";
import CamerasPhotography from "./pages/subcategories/CamerasPhotography";
import BudgetPicks from "./pages/subcategories/BudgetPicks";
import BestOf2025 from "./pages/subcategories/BestOf2025";
import Comparisons from "./pages/subcategories/Comparisons";
import ValueDeals from "./pages/subcategories/ValueDeals";

// Admin pages
import AdminAuthorManagement from "./pages/AdminAuthorManagement";

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
          <Route path="/subcategories/smartphones-tablets" element={<SmartphonesTablets />} />
          <Route path="/gaming-pcs" element={<GamingPCs />} />
          <Route path="/subcategories/wearables-tech" element={<WearablesTech />} />
          <Route path="/subcategories/ai-machine-learning" element={<AIMachineLearning />} />
          <Route path="/subcategories/cybersecurity" element={<Cybersecurity />} />
          <Route path="/subcategories/cloud-computing" element={<CloudComputing />} />
          <Route path="/subcategories/smart-home-tech" element={<SmartHomeTech />} />
          <Route path="/subcategories/best-in-class" element={<BestInClass />} />
          <Route path="/subcategories/blockchain-crypto" element={<BlockchainCrypto />} />
          <Route path="/subcategories/data-analytics" element={<DataAnalytics />} />
          <Route path="/subcategories/enterprise-tech" element={<EnterpriseTech />} />
          <Route path="/subcategories/smart-appliances" element={<SmartAppliances />} />
          <Route path="/subcategories/audio-tech" element={<AudioTech />} />
          <Route path="/subcategories/display-tech" element={<DisplayTech />} />
          <Route path="/subcategories/audio-video" element={<AudioVideo />} />
          <Route path="/subcategories/cameras-photography" element={<CamerasPhotography />} />
          <Route path="/subcategories/budget-picks" element={<BudgetPicks />} />
          <Route path="/subcategories/best-of-2025" element={<BestOf2025 />} />
          <Route path="/subcategories/comparisons" element={<Comparisons />} />
          <Route path="/subcategories/value-deals" element={<ValueDeals />} />
          
          {/* Admin routes */}
          <Route path="/admin/authors" element={<AdminAuthorManagement />} />
          
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