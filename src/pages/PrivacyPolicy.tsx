import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-brand mb-8 text-center">Privacy Policy</h1>
          <p className="text-foreground/70 text-center mb-12">Last updated: January 2025</p>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">1. Information We Collect</h2>
              <p>
                At Revuzia, we collect information you provide directly to us, such as when you create an account, 
                subscribe to our newsletter, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and personalize your experience on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">5. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience, analyze site traffic, 
                and personalize content. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. 
                Contact us if you wish to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at 
                <span className="text-brand"> privacy@revuzia.com</span>.
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

export default PrivacyPolicy;