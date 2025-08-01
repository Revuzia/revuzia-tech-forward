import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="relative inline-block text-white drop-shadow-2xl">
                Privacy Policy
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  Privacy Policy
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  Privacy Policy
                </span>
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Your privacy matters to us. Here's how we protect your information.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground text-center">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Information We Collect
              </h2>
              <p className="text-lg leading-relaxed">
                We collect information you provide directly (email, account details) and automatically (usage data, device info, cookies) to improve our service and your experience.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                How We Use Your Information
              </h2>
              <p className="text-lg leading-relaxed">
                Your information helps us provide personalized content, send newsletters, improve our website, and ensure security. We never sell your personal data.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Data Protection
              </h2>
              <p className="text-lg leading-relaxed">
                We use industry-standard security measures including SSL encryption, secure servers, and strict access controls to protect your information.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Your Rights
              </h2>
              <p className="text-lg leading-relaxed">
                You can access, correct, or delete your personal information. Contact us at <a href="mailto:privacy@revuzia.com" className="text-brand hover:underline">privacy@revuzia.com</a> for any privacy-related requests.
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

export default Privacy;