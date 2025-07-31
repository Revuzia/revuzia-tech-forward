import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
          <h1 className="text-4xl font-bold text-foreground mb-8">Affiliate Disclosure</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Transparency</h2>
              <p>
                At Revuzia, we believe in complete transparency with our readers. This page explains our affiliate partnerships and how they may affect our content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Affiliate Partnerships</h2>
              <p>
                Revuzia participates in affiliate programs with various technology companies and retailers. When you click on certain links and make a purchase, we may receive a small commission at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Editorial Independence</h2>
              <p>
                Our affiliate partnerships do not influence our editorial decisions or product recommendations. We only recommend products and services that we genuinely believe will benefit our readers, regardless of affiliate status.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Affiliate Revenue</h2>
              <p>
                Revenue from affiliate partnerships helps us maintain our website, purchase products for testing, and continue providing free, high-quality content to our readers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Identification of Affiliate Links</h2>
              <p>
                We clearly identify affiliate content with appropriate disclosures. Look for phrases like "affiliate link," "sponsored," or commission disclaimers near relevant links.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Partners</h2>
              <p>
                We work with reputable affiliate networks and retailers including Amazon Associates, Best Buy, and various technology manufacturers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
              <p>
                If you have any questions about our affiliate partnerships or this disclosure, please contact us at{" "}
                <a href="mailto:partnerships@revuzia.com" className="text-brand hover:underline">
                  partnerships@revuzia.com
                </a>
              </p>
            </section>

            <section>
              <p className="text-sm">
                <strong>Last updated:</strong> January 2024
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