import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Globe, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ArticleCard from "@/components/ArticleCard";

// Import author images
import authorAria from "@/assets/author-aria.jpg";
import authorImani from "@/assets/author-imani.jpg";
import authorRaj from "@/assets/author-raj.jpg";
import authorMiles from "@/assets/author-miles.jpg";
import authorTheo from "@/assets/author-theo.jpg";
import authorZara from "@/assets/author-zara.jpg";
import gamingHero from "@/assets/gaming-article-hero.jpg";
import buyingGuideHero from "@/assets/buying-guide-hero.jpg";

const authorsData = {
  "aria-lin": {
    name: "Aria Lin",
    avatar: authorAria,
    title: "Senior Tech Journalist",
    bio: "Aria Lin is a seasoned technology journalist with over 8 years of experience covering cutting-edge innovations in consumer electronics, AI, and emerging technologies. Her expertise lies in making complex tech concepts accessible to everyday users while providing in-depth analysis for industry professionals.",
    location: "San Francisco, CA",
    joinDate: "January 2020",
    specialties: ["Artificial Intelligence", "Consumer Electronics", "Tech Policy", "Startup Coverage"],
    articles: 142,
    social: {
      twitter: "@aria_tech",
      linkedin: "/in/aria-lin-tech"
    }
  },
  "imani-brooks": {
    name: "Imani Brooks",
    avatar: authorImani,
    title: "Mobile Tech Reviewer",
    bio: "Imani Brooks specializes in mobile technology and wearables, bringing a fresh perspective to smartphone reviews and mobile innovation coverage. With a background in computer science and a passion for user experience design, she evaluates tech from both technical and user-centric viewpoints.",
    location: "Austin, TX",
    joinDate: "March 2021",
    specialties: ["Mobile Devices", "Wearables", "UX Design", "App Reviews"],
    articles: 89,
    social: {
      twitter: "@imani_mobile",
      linkedin: "/in/imani-brooks"
    }
  },
  "raj-malhotra": {
    name: "Raj Malhotra",
    avatar: authorRaj,
    title: "Hardware Analyst",
    bio: "Raj Malhotra is our go-to expert for deep hardware analysis and performance benchmarking. With an engineering background and over 10 years in the tech industry, he provides comprehensive reviews of gaming hardware, processors, and cutting-edge computer components.",
    location: "Seattle, WA",
    joinDate: "June 2019",
    specialties: ["Gaming Hardware", "Processors", "Benchmarking", "PC Building"],
    articles: 156,
    social: {
      twitter: "@raj_hardware",
      linkedin: "/in/raj-malhotra-tech"
    }
  },
  "miles-danner": {
    name: "Miles Danner",
    avatar: authorMiles,
    title: "Future Tech Correspondent",
    bio: "Miles Danner focuses on emerging technologies and future trends in the tech industry. His coverage spans from electric vehicles and renewable energy tech to space technology and biotechnology innovations that will shape our tomorrow.",
    location: "Denver, CO",
    joinDate: "September 2020",
    specialties: ["Electric Vehicles", "Space Tech", "Renewable Energy", "Future Trends"],
    articles: 76,
    social: {
      twitter: "@miles_future",
      linkedin: "/in/miles-danner"
    }
  },
  "theo-chan": {
    name: "Theo Chan",
    avatar: authorTheo,
    title: "Buying Guide Specialist",
    bio: "Theo Chan creates comprehensive buying guides and product comparisons to help consumers make informed tech purchases. His methodical approach to testing and comparison shopping has helped thousands of readers find the perfect tech products for their needs and budgets.",
    location: "Los Angeles, CA",
    joinDate: "February 2021",
    specialties: ["Buying Guides", "Product Comparisons", "Budget Tech", "Consumer Advice"],
    articles: 98,
    social: {
      twitter: "@theo_guides",
      linkedin: "/in/theo-chan-tech"
    }
  },
  "zara-velez": {
    name: "Zara Velez",
    avatar: authorZara,
    title: "Gaming & Entertainment Tech Editor",
    bio: "Zara Velez covers the intersection of gaming, entertainment, and technology. From the latest gaming consoles and graphics cards to streaming technology and virtual reality experiences, she brings expertise and enthusiasm to every review and analysis.",
    location: "New York, NY",
    joinDate: "November 2020",
    specialties: ["Gaming", "Graphics Cards", "Streaming Tech", "Virtual Reality"],
    articles: 134,
    social: {
      twitter: "@zara_gaming",
      linkedin: "/in/zara-velez"
    }
  }
};

const AuthorProfile = () => {
  const { authorSlug } = useParams();
  const author = authorSlug ? authorsData[authorSlug as keyof typeof authorsData] : null;

  if (!author) {
    return <div>Author not found</div>;
  }

  // Sample articles for each author
  const sampleArticles = [
    {
      title: "Latest Tech Innovation Analysis",
      image: gamingHero,
      author: {
        name: author.name,
        avatar: author.avatar,
      },
      readTime: "8 min read",
      category: "Tech News",
      slug: "latest-tech-innovation",
    },
    {
      title: "Comprehensive Product Review",
      image: buyingGuideHero,
      author: {
        name: author.name,
        avatar: author.avatar,
      },
      readTime: "12 min read",
      category: "Product Reviews",
      slug: "comprehensive-review",
    },
    {
      title: "Buying Guide for Tech Enthusiasts",
      image: gamingHero,
      author: {
        name: author.name,
        avatar: author.avatar,
      },
      readTime: "6 min read",
      category: "Buying Guides",
      slug: "tech-buying-guide",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link to="/team">
          <Button variant="ghost" className="mb-8 text-brand hover:text-brand/80">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Team
          </Button>
        </Link>

        {/* Author Header */}
        <div className="bg-gradient-card rounded-xl p-8 mb-12 border border-border">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Animated Avatar */}
            <div className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-brand/30 group-hover:border-brand transition-all duration-300">
                <img 
                  src={author.avatar} 
                  alt={author.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Floating elements around avatar */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Author Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-brand mb-2">{author.name}</h1>
              <p className="text-xl text-foreground/80 mb-4">{author.title}</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 text-sm text-foreground/70">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {author.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {author.joinDate}
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  {author.articles} Articles
                </div>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">{author.bio}</p>

              {/* Specialties */}
              <div className="mb-6">
                <h3 className="text-brand font-semibold mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {author.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-brand/20 text-brand text-sm rounded-full border border-brand/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-brand hover:text-brand/80 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-brand hover:text-brand/80 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Articles */}
        <section>
          <h2 className="text-3xl font-bold text-brand mb-8 text-center">Recent Articles by {author.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AuthorProfile;