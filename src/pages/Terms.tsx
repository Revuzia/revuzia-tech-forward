import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
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
              The terms that govern your use of Revuzia and our services. Please read carefully.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">📋</span>
                </span>
                Acceptance of Terms
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Welcome to Revuzia! By accessing or using our website, services, or any content provided on this platform, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, then you may not access the service.
              </p>
              <p className="text-lg leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the service, including but not limited to registered users, contributors, and commenters.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🏢</span>
                </span>
                About Revuzia
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Revuzia is a technology review and news platform that provides in-depth analysis, reviews, and insights about consumer electronics, software, and emerging technologies. Our mission is to help consumers make informed purchasing decisions through honest, comprehensive reviews and expert analysis.
              </p>
              <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                <h3 className="text-xl font-semibold text-brand mb-3">Our Services Include:</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Product reviews and comparisons</li>
                  <li>• Technology news and analysis</li>
                  <li>• Buying guides and recommendations</li>
                  <li>• Video content and demonstrations</li>
                  <li>• User community features and discussions</li>
                </ul>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">👤</span>
                </span>
                User Accounts and Registration
              </h2>
              <div className="space-y-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Account Creation:</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• You must provide accurate and complete information when creating an account</li>
                    <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>• You must be at least 13 years old to create an account</li>
                    <li>• One person may not maintain more than one account</li>
                  </ul>
                </div>
                
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Account Responsibilities:</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Keep your login information secure and confidential</li>
                    <li>• Notify us immediately of any unauthorized use of your account</li>
                    <li>• Accept responsibility for all activities that occur under your account</li>
                    <li>• Update your information as needed to keep it current and accurate</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">✍️</span>
                </span>
                User-Generated Content
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We encourage community participation through comments, reviews, and discussions. However, all user content must adhere to our community standards:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Acceptable Content:</h3>
                  <ul className="space-y-2">
                    <li>• Constructive feedback and genuine reviews</li>
                    <li>• Respectful discussions about technology</li>
                    <li>• Helpful questions and answers</li>
                    <li>• Original content and proper attribution</li>
                    <li>• Content that adds value to the community</li>
                  </ul>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Prohibited Content:</h3>
                  <ul className="space-y-2">
                    <li>• Spam, advertising, or promotional content</li>
                    <li>• Hateful, discriminatory, or offensive language</li>
                    <li>• False, misleading, or defamatory statements</li>
                    <li>• Copyrighted material without permission</li>
                    <li>• Personal attacks or harassment</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">©️</span>
                </span>
                Intellectual Property Rights
              </h2>
              <div className="space-y-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Revuzia's Content:</h3>
                  <p className="text-lg leading-relaxed">
                    All content on Revuzia, including articles, reviews, images, logos, and design elements, is owned by Revuzia or our content partners and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.
                  </p>
                </div>
                
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">User Content License:</h3>
                  <p className="text-lg leading-relaxed">
                    By submitting content to Revuzia, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content in connection with our services. You retain ownership of your content and can request its removal at any time.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🚫</span>
                </span>
                Prohibited Uses
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                To maintain a safe and positive environment, the following activities are strictly prohibited:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-brand mb-3">Technical Violations:</h3>
                  <ul className="space-y-2">
                    <li>• Attempting to gain unauthorized access to our systems</li>
                    <li>• Using automated bots or scrapers</li>
                    <li>• Introducing malware or harmful code</li>
                    <li>• Overloading our servers or infrastructure</li>
                    <li>• Reverse engineering or decompiling our software</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand mb-3">Content Violations:</h3>
                  <ul className="space-y-2">
                    <li>• Posting false or misleading reviews</li>
                    <li>• Impersonating others or creating fake accounts</li>
                    <li>• Sharing illegal or harmful content</li>
                    <li>• Violating privacy or confidentiality</li>
                    <li>• Commercial use without authorization</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">⚠️</span>
                </span>
                Disclaimers and Limitation of Liability
              </h2>
              <div className="space-y-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Content Disclaimer:</h3>
                  <p className="text-lg leading-relaxed">
                    The information on Revuzia is provided for general informational purposes only. While we strive for accuracy, we make no warranties about the completeness, reliability, or suitability of any information. Product prices, availability, and specifications may change without notice.
                  </p>
                </div>
                
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Limitation of Liability:</h3>
                  <p className="text-lg leading-relaxed">
                    Revuzia shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, incurred as a result of your access to or use of the service.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🔄</span>
                </span>
                Modifications and Termination
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Service Changes:</h3>
                  <p>We reserve the right to modify, suspend, or discontinue any part of our service at any time, with or without notice. We may also update these Terms as needed to reflect changes in our practices or legal requirements.</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Account Termination:</h3>
                  <p>We may terminate or suspend accounts that violate these Terms or for any reason we deem necessary. You may also delete your account at any time through your account settings.</p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">⚖️</span>
                </span>
                Governing Law and Disputes
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                These Terms are governed by and construed in accordance with the laws of [Jurisdiction], without regard to conflict of law principles. Any disputes arising from these Terms or your use of Revuzia will be resolved through:
              </p>
              <div className="space-y-4">
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">First: Direct Communication</h3>
                  <p>We encourage resolving disputes through direct communication with our team</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Second: Mediation</h3>
                  <p>If direct communication fails, disputes will be subject to mediation</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Final: Arbitration</h3>
                  <p>Unresolved disputes will be settled through binding arbitration</p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">📞</span>
                </span>
                Contact Information
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-semibold text-brand mb-3">Legal Inquiries:</h3>
                  <a href="mailto:legal@revuzia.com" className="text-brand hover:underline text-lg">
                    legal@revuzia.com
                  </a>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-semibold text-brand mb-3">General Support:</h3>
                  <a href="mailto:support@revuzia.com" className="text-brand hover:underline text-lg">
                    support@revuzia.com
                  </a>
                </div>
              </div>
            </section>

            <section className="text-center py-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> January 2025 | <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                These Terms & Conditions are effective as of the date listed above and will remain in effect except with respect to any changes in their provisions in the future.
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