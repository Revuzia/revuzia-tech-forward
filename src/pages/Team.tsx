import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import authorZara from "/lovable-uploads/zara-velez-team-final.png";
import authorTheo from "/lovable-uploads/theo-chan-team-final.png";
import authorAria from "@/assets/author-aria.jpg";
import authorMiles from "@/assets/author-miles.jpg";
import authorRaj from "@/assets/author-raj.jpg";
import authorImani from "@/assets/author-imani.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Zara Velez",
      role: "Emerging Technology Editor",
      bio: "Forward-thinking tech journalist who connects breakthrough innovations with market impact, specializing in disruptive technologies, startup funding trends, and early-stage tech developments. Analytical approach helps readers understand which emerging technologies will actually matter.",
      avatar: authorZara,
      expertise: ["Emerging Technologies", "Startup Ecosystem", "Disruptive Technologies"],
      slug: "zara-velez",
    },
    {
      name: "Theo Chan",
      role: "Hardware Testing Director",
      bio: "Methodical hardware expert with uncompromising testing standards. Thorough technical analysis and detailed benchmarking have made him the industry standard for hardware reviews. Systematic approach ensures accurate, reliable information about computer hardware and technical specifications.",
      avatar: authorTheo,
      expertise: ["Hardware Testing", "Technical Analysis", "Benchmarking"],
      slug: "theo-chan",
    },
    {
      name: "Aria Lin",
      role: "Enterprise Technology Analyst",
      bio: "Authoritative enterprise tech journalist who cuts through hype to focus on real business implications. Specializes in AI, machine learning, and enterprise software. Skeptical approach helps readers understand which technologies will actually transform industries.",
      avatar: authorAria,
      expertise: ["Enterprise Technology", "AI Developments", "Machine Learning"],
      slug: "aria-lin",
    },
    {
      name: "Miles Danner", 
      role: "Consumer Electronics Editor",
      bio: "Enthusiastic but balanced electronics expert who bridges technical complexity with real-world value. Specializes in smartphones, laptops, and audio equipment. Practical focus helps readers make informed purchasing decisions.",
      avatar: authorMiles,
      expertise: ["Consumer Electronics", "Product Launches", "Audio Equipment"],
      slug: "miles-danner",
    },
    {
      name: "Raj Malhotra",
      role: "Market Analysis Director", 
      bio: "Strategic market analyst with data-driven approach and excellent comparative analysis skills. Helps readers understand market trends and competitive positioning. Strategic recommendations guide both consumers and industry professionals.",
      avatar: authorRaj,
      expertise: ["Market Analysis", "Competitive Intelligence", "Strategic Recommendations"],
      slug: "raj-malhotra",
    },
    {
      name: "Imani Brooks",
      role: "Consumer Advocacy Editor",
      bio: "Honest consumer advocate who emphasizes practical benefits over specifications. Focuses on user experience and value assessment. Accessible approach helps everyday consumers navigate complex technology purchases.",
      avatar: authorImani,
      expertise: ["Consumer Advocacy", "Real-World Testing", "Value Assessment"],
      slug: "imani-brooks",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container mx-auto px-4 py-16 font-poppins">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="relative inline-block text-white drop-shadow-2xl">
                Meet Our Team
                {/* Glow effect layers */}
                <span className="absolute inset-0 text-white opacity-60 blur-sm animate-pulse">
                  Meet Our Team
                </span>
                <span className="absolute inset-0 text-brand opacity-40 blur-md animate-pulse">
                  Meet Our Team
                </span>
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              The tech journalists behind Revuzia's independent coverage
            </p>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-16">
            <div className="bg-card/50 rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-foreground">
                At Revuzia, our mission is to provide unbiased, in-depth technology journalism that helps readers make informed decisions about the products and trends shaping our digital future. Our editorial team combines decades of experience in technology journalism, product testing, and industry analysis.
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-brand text-center mb-12">Our Editorial Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-card/50 rounded-2xl p-6 border border-border/50 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-brand/30">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand mb-2">{member.name}</h3>
                  <p className="text-sm text-brand/80 mb-3 font-semibold">{member.role}</p>
                  <p className="text-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill) => (
                      <span key={skill} className="bg-brand/10 text-brand text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/authors/${member.slug}`}
                    className="inline-block mt-4 text-brand hover:text-brand/80 text-sm font-medium"
                  >
                    View Articles →
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-brand text-center mb-12">Editorial Leadership</h2>
            
            <div className="space-y-8">
              <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-brand mb-3">Editor-in-Chief</h3>
                <p className="text-lg italic text-foreground/70 mb-4">Leading Revuzia's editorial vision and maintaining our standards for independent tech journalism.</p>
                <p className="text-foreground leading-relaxed">
                  Our Editor-in-Chief oversees all editorial content, ensuring that our reviews, news coverage, and analysis maintain the highest standards of accuracy and independence. With over 15 years of experience in technology journalism, they guide our editorial strategy and uphold our commitment to unbiased reporting.
                </p>
              </div>

              <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-brand mb-3">Senior Technology Editor</h3>
                <p className="text-lg italic text-foreground/70 mb-4">Specializing in emerging technologies, enterprise solutions, and industry analysis.</p>
                <p className="text-foreground leading-relaxed">
                  Our Senior Technology Editor brings deep expertise in cutting-edge technologies, from artificial intelligence and machine learning to enterprise software and cybersecurity. They lead our coverage of tech industry trends and provide expert analysis on how new technologies impact businesses and consumers.
                </p>
              </div>
            </div>
          </div>

          {/* Product Review Team */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-brand text-center mb-12">Product Review Team</h2>
            
            <div className="space-y-8">
              <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-brand mb-3">Consumer Electronics Editor</h3>
                <p className="text-lg italic text-foreground/70 mb-4">Expert testing and reviews of smartphones, laptops, audio equipment, and consumer gadgets.</p>
                <p className="text-foreground leading-relaxed">
                  Our Consumer Electronics Editor has tested thousands of products over the past decade, developing rigorous testing methodologies that prioritize real-world performance over marketing claims.
                </p>
              </div>

              <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-brand mb-3">Hardware Testing Specialist</h3>
                <p className="text-lg italic text-foreground/70 mb-4">In-depth analysis of computer hardware, gaming equipment, and technical specifications.</p>
                <p className="text-foreground leading-relaxed">
                  Our Hardware Testing Specialist brings technical expertise in computer architecture, performance benchmarking, and component analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Standards */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-brand text-center mb-12">Editorial Standards</h2>
            
            <div className="space-y-8">
              <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-brand mb-4">Independence and Integrity</h3>
                <p className="text-foreground leading-relaxed">
                  Our editorial team operates with complete independence from our business operations. Product reviews and recommendations are based solely on merit, testing results, and reader value – never on business relationships or potential revenue.
                </p>
              </div>

              <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-brand mb-4">Testing Methodology</h3>
                <p className="text-foreground leading-relaxed">
                  We maintain rigorous testing standards across all product categories. Our reviewers use products in real-world conditions over extended periods, comparing performance against stated specifications and competitive alternatives.
                </p>
              </div>

              <div className="bg-card/50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-brand mb-4">Transparency</h3>
                <p className="text-foreground leading-relaxed">
                  We clearly disclose all business relationships, review policies, and testing methodologies. When we receive products for review, we note this relationship while maintaining complete editorial independence.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Editorial Team */}
          <div className="text-center">
            <div className="bg-card/50 rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-brand mb-6">Contact Our Editorial Team</h2>
              <ul className="text-left list-disc list-inside space-y-2 text-foreground mb-6">
                <li><strong>General support and questions:</strong> <a href="mailto:support@revuzia.com" className="text-brand hover:underline">support@revuzia.com</a></li>
              </ul>
              <p className="text-foreground/70 italic">Individual author contact information will be added in the future.</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Team;