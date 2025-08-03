import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - Revuzia</title>
        <meta name="description" content="Get in touch with Revuzia's editorial and business teams." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16 font-poppins">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="relative inline-block text-white drop-shadow-2xl">
                Contact Us
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  Contact Us
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  Contact Us
                </span>
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Get in touch with Revuzia's editorial and business teams
            </p>
          </div>
          
          <div className="space-y-12 text-foreground text-left">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <p className="text-lg leading-relaxed text-center">
                We're committed to providing excellent service to our readers, industry partners, and the technology community. Choose the contact method that best fits your inquiry.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                How to Reach Us
              </h2>
              
              <div className="bg-card/30 rounded-xl p-6 border border-border/30 mb-6">
                <h3 className="text-2xl font-bold text-brand mb-4">Support & General Inquiries</h3>
                <p className="text-lg mb-4"><strong>Email:</strong> <a href="mailto:support@revuzia.com" className="text-brand hover:underline">support@revuzia.com</a></p>
                <p className="text-foreground/80 leading-relaxed">
                  Website issues, account problems, newsletter subscription management, technical difficulties, general questions, feedback, content suggestions, privacy requests, and any other inquiries about Revuzia.
                </p>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Follow Revuzia
              </h2>
              <p className="text-lg leading-relaxed mb-6">Stay connected with our latest content and updates:</p>
              <ul className="list-disc list-inside space-y-3 text-foreground/80">
                <li><strong>X (Twitter):</strong> <a href="https://x.com/revuzia45555" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">@revuzia45555</a> - Daily tech insights and updates</li>
                <li><strong>YouTube:</strong> Revuzia Tech - Video reviews and tech explainers</li>
                <li><strong>RSS Feed:</strong> <a href="/feed" target="_blank" className="text-brand hover:underline">revuzia.com/feed</a> - Subscribe to all our latest content</li>
              </ul>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Response Times
              </h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>All inquiries:</strong> Within 48 hours during business days</li>
                <li><strong>Technical support:</strong> Within 24 hours</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;