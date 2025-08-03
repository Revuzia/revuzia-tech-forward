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
      
      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground">
              The passionate tech experts behind Revuzia's trusted reviews and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Link key={index} to={`/author/${member.slug}`} className="block group" onClick={() => window.scrollTo(0, 0)}>
                <div className="bg-gradient-card rounded-lg border border-border p-6 hover:border-brand/50 transition-all duration-300 group-hover:scale-105 h-[520px] flex flex-col">
                  <div className="flex flex-col items-center text-center mb-6">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full border-2 border-brand/30 mb-4 group-hover:border-brand/60 transition-all duration-300"
                      width="96"
                      height="96"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors duration-300">{member.name}</h2>
                      <p className="text-brand font-medium">{member.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">
                    {member.bio}
                  </p>
                  
                  <div className="mt-auto">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Expertise</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-brand/20 text-brand rounded-full text-xs border border-brand/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Team;