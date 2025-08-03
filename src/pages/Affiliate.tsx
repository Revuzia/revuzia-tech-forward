import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16 font-poppins">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="relative inline-block text-white drop-shadow-2xl">
                Affiliate Disclosure
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  Affiliate Disclosure
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  Affiliate Disclosure
                </span>
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Transparency is important to us. Here's how we handle affiliate relationships.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground text-center">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Our Commitment
              </h2>
              <p className="text-lg leading-relaxed">
                Revuzia participates in affiliate programs, which means we may earn commissions from purchases made through our links. This never affects our review integrity or recommendations.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                How It Works
              </h2>
              <p className="text-lg leading-relaxed">
                When you click our affiliate links and make a purchase, we may receive a small commission at no extra cost to you. This helps support our independent testing and content creation.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Editorial Independence
              </h2>
              <p className="text-lg leading-relaxed">
                Our reviews and recommendations are based solely on our testing and expertise. Affiliate partnerships never influence our editorial decisions or product rankings.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Supporting Our Work
              </h2>
              <p className="text-lg leading-relaxed">
                By using our affiliate links, you help support our mission to provide honest, in-depth tech reviews and buying guides for consumers like you.
              </p>
            </section>

            <section className="text-center py-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> January 2025
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Affiliate;