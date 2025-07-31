import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// Import author images
import authorAria from "@/assets/author-aria.jpg";
import authorImani from "@/assets/author-imani.jpg";
import authorRaj from "@/assets/author-raj.jpg";
import authorMiles from "@/assets/author-miles.jpg";
import authorTheo from "@/assets/author-theo.jpg";
import authorZara from "@/assets/author-zara.jpg";

const teamMembers = [
  {
    name: "Aria Lin",
    title: "Senior Tech Journalist",
    image: authorAria,
    slug: "aria-lin",
    bio: "Specialist in AI and emerging technologies with 8+ years of experience.",
  },
  {
    name: "Imani Brooks",
    title: "Mobile Tech Reviewer",
    image: authorImani,
    slug: "imani-brooks",
    bio: "Expert in mobile devices and wearables with a UX design background.",
  },
  {
    name: "Raj Malhotra",
    title: "Hardware Analyst",
    image: authorRaj,
    slug: "raj-malhotra",
    bio: "Deep hardware analysis and performance benchmarking specialist.",
  },
  {
    name: "Miles Danner",
    title: "Future Tech Correspondent",
    image: authorMiles,
    slug: "miles-danner",
    bio: "Covers emerging technologies and future industry trends.",
  },
  {
    name: "Theo Chan",
    title: "Buying Guide Specialist",
    image: authorTheo,
    slug: "theo-chan",
    bio: "Creates comprehensive buying guides and product comparisons.",
  },
  {
    name: "Zara Velez",
    title: "Gaming & Entertainment Tech Editor",
    image: authorZara,
    slug: "zara-velez",
    bio: "Covers gaming, graphics cards, and entertainment technology.",
  },
];

const Team = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand text-center mb-8">Meet Our Team</h1>
        <p className="text-xl text-foreground/80 text-center mb-16 max-w-2xl mx-auto">
          Our passionate team of tech experts brings diverse perspectives and deep expertise 
          to deliver the most comprehensive tech reviews and insights.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Link
              key={index}
              to={`/author/${member.slug}`}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-brand/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,191,0.3)] hover:scale-105"
            >
              <div className="text-center">
                <div className="relative mx-auto mb-6 w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-brand/30 group-hover:border-brand transition-all duration-300"
                  />
                  {/* Animated elements */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-brand mb-2 group-hover:text-brand/80 transition-colors">
                  {member.name}
                </h3>
                <p className="text-foreground/70 font-medium mb-3">{member.title}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{member.bio}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-card rounded-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for passionate tech enthusiasts to join our growing team.
          </p>
          <a 
            href="mailto:careers@revuzia.com" 
            className="inline-flex items-center px-6 py-3 bg-brand text-background rounded-lg font-medium hover:bg-brand/90 transition-colors duration-300"
          >
            View Open Positions
          </a>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Team;