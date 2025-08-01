import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
       {/* Floating elements */}
       <div className="floating-rockets">
         <div className="rocket">⚖️</div>
         <div className="rocket">📝</div>
         <div className="rocket">✅</div>
       </div>
      
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="relative inline-block text-white drop-shadow-2xl">
                Terms & Conditions
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  Terms & Conditions
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  Terms & Conditions
                </span>
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Please read these terms carefully before using Revuzia.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground text-center">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Acceptance of Terms
              </h2>
              <p className="text-lg leading-relaxed">
                By accessing and using Revuzia, you accept and agree to be bound by these Terms & Conditions. If you disagree with any part, please do not use our website.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Use License
              </h2>
              <p className="text-lg leading-relaxed">
                We grant you a personal, non-transferable license to use Revuzia for personal, non-commercial purposes. You may not redistribute our content without permission.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                User Conduct
              </h2>
              <p className="text-lg leading-relaxed">
                Users must not post harmful, offensive, or illegal content. We reserve the right to remove content and suspend accounts that violate our community standards.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Disclaimer
              </h2>
              <p className="text-lg leading-relaxed">
                Our reviews and recommendations are opinions based on testing. We're not liable for purchasing decisions made based on our content. Always verify product specifications independently.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed">
                Questions about these terms? Contact us at <a href="mailto:legal@revuzia.com" className="text-brand hover:underline">legal@revuzia.com</a>
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

export default Terms;