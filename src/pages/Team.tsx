import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import authorZara from "@/assets/author-zara.jpg";
import authorTheo from "@/assets/author-theo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Zara Velez",
      role: "Senior Tech Editor",
      bio: "Zara has over 8 years of experience in tech journalism, specializing in mobile devices, gaming hardware, and emerging technologies. She holds a degree in Computer Science and has written for major tech publications.",
      avatar: authorZara,
      expertise: ["Mobile Technology", "Gaming Hardware", "AI & Machine Learning"],
    },
    {
      name: "Theo Chan",
      role: "Reviews Director",
      bio: "With a background in electrical engineering and 10+ years in tech reviews, Theo leads our product testing and evaluation process. He's passionate about helping consumers make informed purchasing decisions.",
      avatar: authorTheo,
      expertise: ["Product Testing", "Consumer Electronics", "Buying Guides"],
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

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-card rounded-lg border border-border p-6 hover:border-brand/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full border-2 border-brand/30 mr-4"
                    width="80"
                    height="80"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{member.name}</h2>
                    <p className="text-brand font-medium">{member.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-brand/20 text-brand rounded-full text-sm border border-brand/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Team;