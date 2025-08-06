import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AuthProvider } from "@/components/AuthProvider";
import KofiButton from "./components/KofiButton";
import Index from "./pages/Index";
import TechNews from "./pages/TechNews";
import GetElectrified from "./pages/GetElectrified";
import ProductReviews from "./pages/ProductReviews";
import BuyingGuides from "./pages/BuyingGuides";
import VideoReviews from "./pages/VideoReviews";
import Search from "./pages/Search";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Affiliate from "./pages/Affiliate";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";

// Subcategory pages
import SmartphonesTablets from "./pages/subcategories/SmartphonesTablets";
import GamingPCs from "./pages/subcategories/GamingPCs";
import AIMachineLearning from "./pages/subcategories/AIMachineLearning";
import Cybersecurity from "./pages/subcategories/Cybersecurity";
import AutomationLLM from "./pages/subcategories/AutomationLLM";
import BlockchainCrypto from "./pages/subcategories/BlockchainCrypto";
import HomeAutomation from "./pages/subcategories/HomeAutomation";
import AudioElectronics from "./pages/subcategories/AudioElectronics";
import DisplayElectronics from "./pages/subcategories/DisplayElectronics";
import GadgetsCoolTech from "./pages/subcategories/GadgetsCoolTech";
import AudioVideo from "./pages/subcategories/AudioVideo";
import CamerasPhotography from "./pages/subcategories/CamerasPhotography";
import BatteryPower from "./pages/subcategories/BatteryPower";
import NetworkingConnectivity from "./pages/subcategories/NetworkingConnectivity";
import ToolsAccessories from "./pages/subcategories/ToolsAccessories";
import BestInClass from "./pages/subcategories/BestInClass";
import BudgetPicks from "./pages/subcategories/BudgetPicks";
import BestOf2025 from "./pages/subcategories/BestOf2025";
import Comparisons from "./pages/subcategories/Comparisons";
import BeginnersGuides from "./pages/subcategories/BeginnersGuides";
import AIDevelopmentTools from "./pages/subcategories/AIDevelopmentTools";
import AIContentCreation from "./pages/subcategories/AIContentCreation";
import DevelopmentTools from "./pages/subcategories/DevelopmentTools";
import AIHardwareAccelerators from "./pages/subcategories/AIHardwareAccelerators";
import ContentCreationHardware from "./pages/subcategories/ContentCreationHardware";
import ArticleEditor from "./pages/ArticleEditor";
import ArticlePreview from "./pages/ArticlePreview";

// Author pages
import AriaLin from "./pages/authors/AriaLin";
import ImaniBrooks from "./pages/authors/ImaniBrooks";
import RajMalhotra from "./pages/authors/RajMalhotra";
import MilesDanner from "./pages/authors/MilesDanner";
import TheoChan from "./pages/authors/TheoChan";
import ZaraVelez from "./pages/authors/ZaraVelez";

const App = () => {
  console.log("App component rendering...");
  
  const queryClient = new QueryClient();

  // Component to handle scroll-to-top on route changes
  const ScrollToTop = () => {
    const location = useLocation();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return null;
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <KofiButton />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tech-news" element={<TechNews />} />
          <Route path="/get-electrified" element={<GetElectrified />} />
          <Route path="/product-reviews" element={<ProductReviews />} />
          <Route path="/buying-guides" element={<BuyingGuides />} />
          <Route path="/video-reviews" element={<VideoReviews />} />
          <Route path="/search" element={<Search />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Subcategory Routes */}
          <Route path="/subcategories/smartphones-tablets" element={<SmartphonesTablets />} />
          <Route path="/subcategories/gaming-pcs" element={<GamingPCs />} />
          <Route path="/subcategories/ai-machine-learning" element={<AIMachineLearning />} />
          <Route path="/subcategories/cybersecurity" element={<Cybersecurity />} />
          <Route path="/subcategories/automation-llm" element={<AutomationLLM />} />
          <Route path="/subcategories/blockchain-crypto" element={<BlockchainCrypto />} />
          <Route path="/subcategories/home-automation" element={<HomeAutomation />} />
          <Route path="/subcategories/audio-electronics" element={<AudioElectronics />} />
          <Route path="/subcategories/display-electronics" element={<DisplayElectronics />} />
          <Route path="/subcategories/gadgets-cool-tech" element={<GadgetsCoolTech />} />
          <Route path="/subcategories/audio-video" element={<AudioVideo />} />
          <Route path="/subcategories/cameras-photography" element={<CamerasPhotography />} />
          <Route path="/subcategories/battery-power" element={<BatteryPower />} />
          <Route path="/subcategories/networking-connectivity" element={<NetworkingConnectivity />} />
          <Route path="/subcategories/tools-accessories" element={<ToolsAccessories />} />
          <Route path="/subcategories/best-in-class" element={<BestInClass />} />
          <Route path="/subcategories/budget-picks" element={<BudgetPicks />} />
          <Route path="/subcategories/best-of-2025" element={<BestOf2025 />} />
          <Route path="/subcategories/comparisons" element={<Comparisons />} />
          <Route path="/subcategories/beginners-guides" element={<BeginnersGuides />} />
          <Route path="/subcategories/ai-development-tools" element={<AIDevelopmentTools />} />
          <Route path="/subcategories/ai-content-creation" element={<AIContentCreation />} />
          <Route path="/subcategories/development-tools" element={<DevelopmentTools />} />
          <Route path="/subcategories/ai-hardware-accelerators" element={<AIHardwareAccelerators />} />
          <Route path="/subcategories/content-creation-hardware" element={<ContentCreationHardware />} />

          {/* Admin/Editor Routes */}
          <Route path="/admin/articles/new" element={<ArticleEditor />} />
          <Route path="/admin/articles/:slug" element={<ArticleEditor />} />
          <Route path="/article-preview" element={<ArticlePreview />} />

          {/* Article Route */}
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/articles/:slug" element={<Article />} />
          
          {/* Author Routes */}
          <Route path="/authors/aria-lin" element={<AriaLin />} />
          <Route path="/authors/imani-brooks" element={<ImaniBrooks />} />
          <Route path="/authors/raj-malhotra" element={<RajMalhotra />} />
          <Route path="/authors/miles-danner" element={<MilesDanner />} />
          <Route path="/authors/theo-chan" element={<TheoChan />} />
          <Route path="/authors/zara-velez" element={<ZaraVelez />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
