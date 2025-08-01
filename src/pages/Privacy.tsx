import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
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
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
          
          <div className="space-y-12 text-foreground">
            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🛡️</span>
                </span>
                Our Privacy Commitment
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                At Revuzia, we are deeply committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-lg leading-relaxed">
                We believe transparency is key to building trust, so we've made this policy comprehensive yet easy to understand.
              </p>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">📊</span>
                </span>
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Personal Information You Provide:</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• <strong>Account Information:</strong> Name, email address, username, and password when you create an account</li>
                    <li>• <strong>Contact Information:</strong> Email address and message content when you contact us</li>
                    <li>• <strong>Newsletter Subscriptions:</strong> Email address and preferences for our newsletters</li>
                    <li>• <strong>Comments and Reviews:</strong> Content you post in comments or user reviews</li>
                    <li>• <strong>Profile Information:</strong> Any additional information you choose to add to your profile</li>
                  </ul>
                </div>
                
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Information We Collect Automatically:</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• <strong>Usage Data:</strong> Pages visited, time spent on site, click patterns, and navigation paths</li>
                    <li>• <strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution</li>
                    <li>• <strong>Location Data:</strong> General geographic location based on IP address</li>
                    <li>• <strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🎯</span>
                </span>
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Service Provision:</h3>
                  <ul className="space-y-2">
                    <li>• Create and manage user accounts</li>
                    <li>• Deliver personalized content</li>
                    <li>• Process newsletter subscriptions</li>
                    <li>• Enable commenting and user interaction</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-xl font-semibold text-brand mb-3">Site Improvement:</h3>
                  <ul className="space-y-2">
                    <li>• Analyze website usage and performance</li>
                    <li>• Improve user experience and design</li>
                    <li>• Develop new features and content</li>
                    <li>• Optimize page loading and functionality</li>
                    <li>• Ensure website security</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🍪</span>
                </span>
                Cookies and Tracking Technologies
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We use cookies and similar technologies to enhance your browsing experience and collect information about how you use our website.
              </p>
              <div className="space-y-4">
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Essential Cookies</h3>
                  <p>Required for basic website functionality, account management, and security</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Analytics Cookies</h3>
                  <p>Help us understand how visitors interact with our website to improve user experience</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Preference Cookies</h3>
                  <p>Remember your settings and preferences for a personalized experience</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Marketing Cookies</h3>
                  <p>Used to deliver relevant advertisements and track campaign effectiveness</p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🤝</span>
                </span>
                Information Sharing and Disclosure
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-brand">We do not sell your personal information.</strong> We may share your information only in the following circumstances:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-brand mb-3">When We May Share:</h3>
                  <ul className="space-y-2">
                    <li>• With your explicit consent</li>
                    <li>• To comply with legal obligations</li>
                    <li>• To protect rights and safety</li>
                    <li>• In business transfers (mergers, acquisitions)</li>
                    <li>• With trusted service providers under strict agreements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand mb-3">Service Providers We Work With:</h3>
                  <ul className="space-y-2">
                    <li>• Web hosting and infrastructure providers</li>
                    <li>• Email service providers</li>
                    <li>• Analytics services (Google Analytics)</li>
                    <li>• Customer support platforms</li>
                    <li>• Security and fraud prevention services</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🔒</span>
                </span>
                Data Security and Protection
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We implement comprehensive security measures to protect your personal information:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background/50 rounded-xl border border-brand/20">
                  <div className="text-3xl mb-3">🔐</div>
                  <h3 className="text-lg font-semibold text-brand mb-2">Encryption</h3>
                  <p>All data transmission is protected with SSL/TLS encryption</p>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-xl border border-brand/20">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h3 className="text-lg font-semibold text-brand mb-2">Access Controls</h3>
                  <p>Strict access controls and authentication requirements</p>
                </div>
                <div className="text-center p-6 bg-background/50 rounded-xl border border-brand/20">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="text-lg font-semibold text-brand mb-2">Monitoring</h3>
                  <p>Continuous monitoring for security threats and vulnerabilities</p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">⚖️</span>
                </span>
                Your Privacy Rights
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <div className="space-y-4">
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Access and Portability</h3>
                  <p>Request a copy of the personal information we have about you</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Correction</h3>
                  <p>Request that we correct inaccurate or incomplete information</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Deletion</h3>
                  <p>Request that we delete your personal information in certain circumstances</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-brand/20">
                  <h3 className="font-semibold text-brand">Opt-Out</h3>
                  <p>Unsubscribe from marketing communications or opt-out of certain data processing</p>
                </div>
              </div>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">🌍</span>
                </span>
                International Data Transfers
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Revuzia operates globally, and your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:
              </p>
              <ul className="space-y-2 text-lg">
                <li>• Adherence to international data protection frameworks</li>
                <li>• Standard contractual clauses with service providers</li>
                <li>• Ensuring adequate protection levels in destination countries</li>
              </ul>
            </section>

            <section className="bg-card/50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-3xl font-bold text-brand mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand/20 rounded-full flex items-center justify-center">
                  <span className="text-brand text-lg">📞</span>
                </span>
                Contact Us About Privacy
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please don't hesitate to contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-semibold text-brand mb-3">General Privacy Questions:</h3>
                  <a href="mailto:privacy@revuzia.com" className="text-brand hover:underline text-lg">
                    privacy@revuzia.com
                  </a>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-brand/20">
                  <h3 className="text-lg font-semibold text-brand mb-3">Data Protection Officer:</h3>
                  <a href="mailto:dpo@revuzia.com" className="text-brand hover:underline text-lg">
                    dpo@revuzia.com
                  </a>
                </div>
              </div>
            </section>

            <section className="text-center py-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> January 2025 | <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                We may update this Privacy Policy from time to time. We'll notify you of any material changes.
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