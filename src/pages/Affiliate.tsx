import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
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
              Your trust matters to us. Here's how we handle affiliate partnerships with complete transparency.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🤝</span>
                </span>
                Our Commitment to Transparency
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                At Revuzia, transparency isn't just a policy—it's our core value. We believe our readers deserve to know exactly how we operate, how we make money, and how that might influence our content. This comprehensive disclosure explains everything you need to know about our affiliate partnerships.
              </p>
              <p className="text-lg leading-relaxed">
                We're committed to maintaining your trust by being upfront about our business relationships and ensuring they never compromise our editorial integrity.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">💼</span>
                </span>
                What Are Affiliate Partnerships?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Revuzia participates in affiliate marketing programs with technology companies, retailers, and service providers. When you click on certain links in our articles and make a purchase, we may receive a small commission at no additional cost to you.
              </p>
              <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                <h3 className="text-xl font-semibold text-brand mb-3">How It Works:</h3>
                <ul className="space-y-2 text-lg">
                  <li>• You click on a product link in our review or article</li>
                  <li>• You're redirected to the retailer's website (like Amazon, Best Buy, etc.)</li>
                  <li>• If you make a purchase within a certain timeframe, we earn a small commission</li>
                  <li>• Your purchase price remains exactly the same</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">📝</span>
                </span>
                Editorial Independence Guarantee
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-brand">Our affiliate partnerships do not influence our editorial decisions, product recommendations, or review scores.</strong> This is our solemn promise to you.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">What We Promise:</h3>
                  <ul className="space-y-2">
                    <li>• Honest, unbiased reviews</li>
                    <li>• Recommendations based on merit</li>
                    <li>• Critical analysis of products</li>
                    <li>• Transparent testing methodology</li>
                  </ul>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">What We Never Do:</h3>
                  <ul className="space-y-2">
                    <li>• Promote products solely for commission</li>
                    <li>• Hide negative aspects of products</li>
                    <li>• Inflate ratings for financial gain</li>
                    <li>• Compromise our testing standards</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">💰</span>
                </span>
                How We Use Affiliate Revenue
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Every dollar earned through affiliate partnerships goes directly back into improving Revuzia and serving you better:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background/50 rounded-xl border border-brand/20">
                  <div className="text-3xl mb-3">🛒</div>
                  <h3 className="text-lg font-semibold text-brand mb-2">Product Testing</h3>
                  <p>Purchasing the latest tech products for comprehensive, hands-on reviews</p>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-xl border border-brand/20">
                  <div className="text-3xl mb-3">🔧</div>
                  <h3 className="text-lg font-semibold text-brand mb-2">Website Maintenance</h3>
                  <p>Keeping our platform fast, secure, and accessible to all readers</p>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-xl border border-brand/20">
                  <div className="text-3xl mb-3">✍️</div>
                  <h3 className="text-lg font-semibold text-brand mb-2">Content Creation</h3>
                  <p>Supporting our team of expert writers and reviewers</p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🏷️</span>
                </span>
                How We Identify Affiliate Content
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We clearly identify affiliate content to ensure complete transparency:
              </p>
              <div className="space-y-4">
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Article Disclosures</h3>
                  <p>Look for disclaimers at the top or bottom of articles containing affiliate links</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Link Identification</h3>
                  <p>Affiliate links are marked with phrases like "affiliate link" or "commission earned"</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Sponsored Content</h3>
                  <p>Clearly labeled when content is sponsored by partners</p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🤝</span>
                </span>
                Our Trusted Partners
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We work exclusively with reputable companies and platforms that we trust:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-brand mb-3">Major Retailers:</h3>
                  <ul className="space-y-1 text-lg">
                    <li>• Amazon Associates Program</li>
                    <li>• Best Buy Affiliate Network</li>
                    <li>• Newegg Partner Program</li>
                    <li>• B&H Photo Affiliate Program</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand mb-3">Tech Manufacturers:</h3>
                  <ul className="space-y-1 text-lg">
                    <li>• Apple Affiliate Program</li>
                    <li>• Samsung Partner Network</li>
                    <li>• Microsoft Affiliate Program</li>
                    <li>• Google Partner Program</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">📋</span>
                </span>
                FTC Compliance
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Revuzia fully complies with FTC guidelines regarding affiliate marketing and sponsored content. We follow all required disclosure practices and maintain the highest standards of transparency.
              </p>
              <p className="text-lg leading-relaxed">
                Our disclosures meet or exceed FTC requirements for clarity, prominence, and comprehensibility.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">❓</span>
                </span>
                Questions or Concerns?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We're always happy to address any questions about our affiliate partnerships or business practices.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-semibold text-brand mb-3">General Inquiries:</h3>
                  <a href="mailto:hello@revuzia.com" className="text-brand hover:underline text-lg">
                    hello@revuzia.com
                  </a>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-semibold text-brand mb-3">Partnership Questions:</h3>
                  <a href="mailto:partnerships@revuzia.com" className="text-brand hover:underline text-lg">
                    partnerships@revuzia.com
                  </a>
                </div>
              </div>
            </section>

            <section className="text-center py-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> January 2025 | <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This disclosure applies to all content published on Revuzia.com
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