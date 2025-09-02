import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Privacy = () => {
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
            <p className="text-xl text-white/100 max-w-2xl mx-auto">
              Your privacy matters to us. Here's how we protect your information.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground text-left">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Information We Collect
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We collect information you provide directly (email, account details) and automatically (usage data, device info, cookies) to improve our service and your experience.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Information you provide directly:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>Email address and account registration details</li>
                <li>Newsletter subscriptions and communication preferences</li>
                <li>Survey responses and feedback submissions</li>
                <li>Comments and user-generated content</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">Information we collect automatically:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>Device and browser information</li>
                <li>Usage patterns and reading preferences</li>
                <li>IP address and location data (general geographic area)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">Information from third parties:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Social media platform integrations</li>
                <li>Analytics and advertising partners</li>
                <li>Public databases and industry sources</li>
              </ul>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                How We Use Your Information
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Your information helps us provide personalized content, send newsletters, improve our website, and ensure security. We never sell your personal data.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">We use your information to:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>Deliver and personalize content recommendations</li>
                <li>Send newsletters and important updates</li>
                <li>Analyze website performance and user behavior</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
                <li>Improve our products and services</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">Personalization and recommendations:</h3>
              <p className="text-foreground/80">
                We use your reading history and preferences to suggest relevant articles and product reviews that match your interests in technology and electronics.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Data Protection
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We use industry-standard security measures including SSL encryption, secure servers, and strict access controls to protect your information.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Security measures include:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Secure cloud storage with enterprise-grade protection</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Limited access controls for staff members</li>
                <li>Automatic data backup and recovery systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">Data retention:</h3>
              <p className="text-foreground/80">
                We retain your personal information only as long as necessary to provide our services or as required by law. You can request deletion of your data at any time.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Your Rights
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You can access, correct, or delete your personal information. Contact us at <a href="mailto:support@revuzia.com" className="text-brand hover:underline">support@revuzia.com</a> for any privacy-related requests.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Your privacy rights include:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request removal of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Objection:</strong> Object to certain data processing activities</li>
              </ul>

              <p className="text-foreground/80">
                <strong>For California residents:</strong> You have additional rights under the California Consumer Privacy Act (CCPA), including the right to opt-out of the sale of personal information and the right to non-discrimination.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6">
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed mb-4">For privacy-related questions or requests:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>Email: <a href="mailto:support@revuzia.com" className="text-brand hover:underline">support@revuzia.com</a></li>
                <li>Website: Contact form at revuzia.com/contact</li>
              </ul>
              <p className="text-foreground/80">
                <strong>Data Protection Officer:</strong> For users in the European Union, you may contact our Data Protection Officer at <a href="mailto:support@revuzia.com" className="text-brand hover:underline">support@revuzia.com</a> for privacy-related inquiries.
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