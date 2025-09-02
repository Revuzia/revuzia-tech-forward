import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Terms = () => {
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
            <p className="text-xl text-white/100 max-w-2xl mx-auto">
              Please read these terms carefully before using Revuzia.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground text-left">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Agreement to Terms
              </h2>
              <p className="text-lg leading-relaxed">
                By accessing and using Revuzia, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you disagree with any part of these terms, please do not use our service.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Description of Service
              </h2>
              <p className="text-lg leading-relaxed">
                Revuzia is a technology journalism platform providing news, reviews, buying guides, and analysis of consumer electronics and emerging technologies. We offer both free and premium content to our users.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Acceptable Use Policy
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">You may use Revuzia to:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>Read and share our content for personal, non-commercial use</li>
                <li>Participate in discussions and comment on articles</li>
                <li>Subscribe to newsletters and notifications</li>
                <li>Create user accounts and manage your preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">You may not:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Copy, redistribute, or republish our content without permission</li>
                <li>Use automated systems (bots, scrapers) to access our content</li>
                <li>Attempt to hack, disrupt, or damage our website or services</li>
                <li>Post spam, malicious content, or engage in harassment</li>
                <li>Impersonate other users or provide false information</li>
                <li>Use our service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Intellectual Property Rights
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Our content:</h3>
              <p className="text-lg leading-relaxed mb-6">
                All content on Revuzia, including articles, reviews, images, logos, and design elements, is protected by copyright and other intellectual property laws. We own or have licensed rights to all content on our platform.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">User-generated content:</h3>
              <p className="text-lg leading-relaxed mb-6">
                When you submit comments, reviews, or other content to Revuzia, you grant us a non-exclusive, royalty-free license to use, modify, and display that content in connection with our service.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Respect for others' rights:</h3>
              <p className="text-lg leading-relaxed">
                We respect intellectual property rights and expect our users to do the same. If you believe your copyrighted work has been used without permission, please contact us at <a href="mailto:support@revuzia.com" className="text-brand hover:underline">support@revuzia.com</a>.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Contact Information
              </h2>
              <p className="text-lg leading-relaxed mb-4">For questions about these Terms & Conditions:</p>
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

export default Terms;