import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import authorZara from "/lovable-uploads/9edee9f8-dbe2-4df6-a792-4c9c7b92a989.png";
import authorTheo from "/lovable-uploads/1dd03894-c52e-40fe-96c1-08f89456a11c.png";
import authorAria from "@/assets/author-aria.jpg";
import authorMiles from "@/assets/author-miles.jpg";
import authorRaj from "@/assets/author-raj.jpg";
import authorImani from "@/assets/author-imani.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Zara Velez",
      role: "Senior Tech Editor",
      bio: "Zara has over 8 years of experience in tech journalism, specializing in mobile devices, gaming hardware, and emerging technologies. She holds a degree in Computer Science and has written for major tech publications.",
      avatar: "/lovable-uploads/zara-velez-team.png",
      expertise: ["Mobile Technology", "Gaming Hardware", "AI & Machine Learning"],
      slug: "zara-velez",
    },
    {
      name: "Theo Chan",
      role: "Reviews Director",
      bio: "With a background in electrical engineering and 10+ years in tech reviews, Theo leads our product testing and evaluation process. He's passionate about helping consumers make informed purchasing decisions.",
      avatar: "/lovable-uploads/theo-chan-team.png",
      expertise: ["Product Testing", "Consumer Electronics", "Buying Guides"],
      slug: "theo-chan",
    },
    {
      name: "Aria Lin",
      role: "Mobile Technology Specialist",
      bio: "Aria is our go-to expert for everything mobile. With a background in software engineering and a passion for cutting-edge smartphones, she provides in-depth analysis of the latest mobile innovations and trends.",
      avatar: authorAria,
      expertise: ["Smartphones", "Mobile Apps", "Software Development"],
      slug: "aria-lin",
    },
    {
      name: "Miles Danner", 
      role: "Gaming Hardware Expert",
      bio: "Miles brings over 6 years of gaming industry experience to Revuzia. As a former esports player turned tech journalist, he understands what gamers need and delivers comprehensive reviews of gaming peripherals and hardware.",
      avatar: authorMiles,
      expertise: ["Gaming Hardware", "Esports", "PC Building"],
      slug: "miles-danner",
    },
    {
      name: "Raj Malhotra",
      role: "Enterprise Technology Analyst", 
      bio: "Raj specializes in enterprise technology and business solutions. With an MBA and extensive experience in corporate IT, he evaluates tech products from a business perspective, focusing on productivity and value.",
      avatar: authorRaj,
      expertise: ["Enterprise Software", "Business Technology", "Productivity Tools"],
      slug: "raj-malhotra",
    },
    {
      name: "Imani Brooks",
      role: "Emerging Technology Reporter",
      bio: "Imani covers the latest in emerging technologies and innovation. With a degree in Computer Science and a talent for making complex topics accessible, she explores everything from AI to renewable energy tech.",
      avatar: authorImani,
      expertise: ["Artificial Intelligence", "Renewable Energy", "Innovation Trends"],
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
              <Link key={index} to={`/authors/${member.slug}`} className="block group">
                <div className="bg-gradient-card rounded-lg border border-border p-6 hover:border-brand/50 transition-all duration-300 group-hover:scale-105">
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
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                  
                  <div>
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