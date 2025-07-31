import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-brand mb-8 text-center">Terms of Service</h1>
          <p className="text-foreground/70 text-center mb-12">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Revuzia, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">2. Use of the Service</h2>
              <p>
                You may use our service for lawful purposes only. You agree not to use the service 
                in any way that could damage, disable, or impair the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">3. Content</h2>
              <p>
                All content on Revuzia is owned by us or our licensors. You may not reproduce, 
                distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">4. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account 
                and password and for restricting access to your computer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">5. Limitation of Liability</h2>
              <p>
                Revuzia shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">6. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. 
                Your continued use of the service constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">7. Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at 
                <span className="text-brand"> legal@revuzia.com</span>.
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

export default TermsOfService;