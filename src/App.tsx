import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KofiButton from "./components/KofiButton";
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
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

// Subcategory pages
import SmartphonesTablets from "./pages/subcategories/SmartphonesTablets";
import GamingPCs from "./pages/subcategories/GamingPCs";
import WearablesTech from "./pages/subcategories/WearablesTech";
import AIMachineLearning from "./pages/subcategories/AIMachineLearning";
import Cybersecurity from "./pages/subcategories/Cybersecurity";
import AutomationLLM from "./pages/subcategories/AutomationLLM";
import BlockchainCrypto from "./pages/subcategories/BlockchainCrypto";
import AudioTech from "./pages/subcategories/AudioTech";
import DisplayTech from "./pages/subcategories/DisplayTech";
import AudioVideo from "./pages/subcategories/AudioVideo";
import CamerasPhotography from "./pages/subcategories/CamerasPhotography";
import BestInClass from "./pages/subcategories/BestInClass";
import BudgetPicks from "./pages/subcategories/BudgetPicks";
import BestOf2025 from "./pages/subcategories/BestOf2025";
import Comparisons from "./pages/subcategories/Comparisons";
import ValueDeals from "./pages/subcategories/ValueDeals";
import SmartHomeTech from "./pages/subcategories/SmartHomeTech";

// Author pages
import AriaLin from "./pages/authors/AriaLin";
import ImaniBrooks from "./pages/authors/ImaniBrooks";
import RajMalhotra from "./pages/authors/RajMalhotra";
import MilesDanner from "./pages/authors/MilesDanner";
import TheoChan from "./pages/authors/TheoChan";
import ZaraVelez from "./pages/authors/ZaraVelez";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <KofiButton />
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
          <Route path="/auth" element={<Auth />} />
          
          {/* Subcategory Routes */}
          <Route path="/subcategories/smartphones-tablets" element={<SmartphonesTablets />} />
          <Route path="/subcategories/gaming-pcs" element={<GamingPCs />} />
          <Route path="/subcategories/wearables-tech" element={<WearablesTech />} />
          <Route path="/subcategories/ai-machine-learning" element={<AIMachineLearning />} />
          <Route path="/subcategories/cybersecurity" element={<Cybersecurity />} />
          <Route path="/subcategories/automation-llm" element={<AutomationLLM />} />
          <Route path="/subcategories/blockchain-crypto" element={<BlockchainCrypto />} />
          <Route path="/subcategories/audio-tech" element={<AudioTech />} />
          <Route path="/subcategories/display-tech" element={<DisplayTech />} />
          <Route path="/subcategories/audio-video" element={<AudioVideo />} />
          <Route path="/subcategories/cameras-photography" element={<CamerasPhotography />} />
          <Route path="/subcategories/best-in-class" element={<BestInClass />} />
          <Route path="/subcategories/budget-picks" element={<BudgetPicks />} />
          <Route path="/subcategories/best-of-2025" element={<BestOf2025 />} />
          <Route path="/subcategories/comparisons" element={<Comparisons />} />
          <Route path="/subcategories/value-deals" element={<ValueDeals />} />
          <Route path="/subcategories/smart-home-tech" element={<SmartHomeTech />} />
          
          {/* Author Routes */}
          <Route path="/author/aria-lin" element={<AriaLin />} />
          <Route path="/author/imani-brooks" element={<ImaniBrooks />} />
          <Route path="/author/raj-malhotra" element={<RajMalhotra />} />
          <Route path="/author/miles-danner" element={<MilesDanner />} />
          <Route path="/author/theo-chan" element={<TheoChan />} />
          <Route path="/author/zara-velez" element={<ZaraVelez />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
