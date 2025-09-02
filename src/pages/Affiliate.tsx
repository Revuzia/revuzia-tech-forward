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
            <h1 className="text-4xl md:text-article-heading font-bold text-brand mb-6">
              <span className="relative inline-block text-brand drop-shadow-2xl">
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
            <p className="text-xl text-white/100 max-w-2xl mx-auto">
              Transparency is important to us. Here's how we handle affiliate relationships.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground text-left">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Our Commitment to Transparency
              </h2>
              <p className="text-lg leading-relaxed">
                At Revuzia, we believe in complete transparency about how we fund our independent technology journalism. This disclosure explains our affiliate relationships and how they support our mission to provide unbiased tech news, reviews, and buying guides.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                How Affiliate Marketing Works
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">What are affiliate links?</h3>
              <p className="text-lg leading-relaxed mb-6">
                Affiliate links are special URLs that track when you click through to a retailer's website from our content. If you make a purchase after clicking one of these links, we may receive a small commission from the retailer.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">No extra cost to you:</h3>
              <p className="text-lg leading-relaxed mb-6">
                Using our affiliate links never costs you anything extra. You pay the same price you would pay if you visited the retailer directly, but your purchase helps support our independent journalism.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Our affiliate partners include:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Amazon Associates Program</li>
                <li>Best Buy Affiliate Program</li>
                <li>Other major electronics and technology retailers</li>
                <li>Software and service providers</li>
              </ul>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Editorial Independence
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Our review process:</h3>
              <p className="text-lg leading-relaxed mb-6">
                Our product reviews, recommendations, and buying guides are based entirely on independent testing, research, and editorial judgment. Affiliate relationships do not influence our editorial opinions or recommendations.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">How we maintain independence:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>We purchase many products for testing with our own funds</li>
                <li>When we receive review units, we clearly disclose this relationship</li>
                <li>Our editorial team has full autonomy over product ratings and recommendations</li>
                <li>Negative reviews are published regardless of affiliate relationships</li>
                <li>We recommend products based on merit, not commission rates</li>
              </ul>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Reader Trust and Ethics
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Our promise to readers:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>We will never recommend a product solely because of affiliate earnings</li>
                <li>We clearly disclose all affiliate relationships</li>
                <li>Our reviews and recommendations prioritize reader value over potential revenue</li>
                <li>We maintain strict editorial standards regardless of business relationships</li>
              </ul>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Questions About Our Affiliate Practices
              </h2>
              <p className="text-lg leading-relaxed mb-4">If you have questions about our affiliate relationships or disclosure practices, please contact us:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Email: <a href="mailto:support@revuzia.com" className="text-brand hover:underline">support@revuzia.com</a></li>
                <li>Website: Contact form at revuzia.com/contact</li>
              </ul>
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