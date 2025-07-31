import { Link } from "react-router-dom";
import { Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you would integrate with your email service
      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const categories = [
    { name: "Tech News", path: "/tech-news" },
    { name: "Get Electrified", path: "/get-electrified" },
    { name: "Product Reviews", path: "/product-reviews" },
    { name: "Buying Guides", path: "/buying-guides" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Explore Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-poppins font-bold text-brand mb-6">EXPLORE</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                   <Link 
                     to={category.path} 
                     className="text-white text-lg hover:text-brand transition-colors duration-300 font-poppins font-medium"
                   >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* REVUZIA Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-poppins font-bold text-brand mb-6">REVUZIA</h3>
            <ul className="space-y-4">
              <li>
                 <Link 
                   to="/team" 
                   className="text-white text-lg hover:text-brand transition-colors duration-300 font-poppins font-medium"
                 >
                   Meet Our Team
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/privacy" 
                   className="text-white text-lg hover:text-brand transition-colors duration-300 font-poppins font-medium"
                 >
                   Privacy Policy
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/terms" 
                   className="text-white text-lg hover:text-brand transition-colors duration-300 font-poppins font-medium"
                 >
                   Terms & Conditions
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/affiliate" 
                   className="text-white text-lg hover:text-brand transition-colors duration-300 font-poppins font-medium"
                 >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-poppins font-bold text-brand mb-6">CONNECT</h3>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleEmailSubmit} className="w-full max-w-sm mb-6">
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-border focus:border-brand focus:ring-brand font-poppins text-lg"
                  required
                />
                <Button 
                  type="submit" 
                  variant="outline" 
                  className="border-brand text-brand hover:bg-brand hover:text-background font-poppins font-semibold text-lg"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  SUBSCRIBE
                </Button>
              </div>
              {isSubscribed && (
                <p className="text-sm text-brand mt-2 font-poppins">Thank you for subscribing!</p>
              )}
            </form>

            {/* Social Links */}
             <a 
               href="https://twitter.com/revuzia4455" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center space-x-3 text-white text-lg hover:text-brand transition-colors duration-300 group font-poppins font-medium"
             >
              <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Follow Us on X</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Revuzia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;