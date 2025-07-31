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
            <h3 className="text-xl font-bold text-brand mb-6">EXPLORE</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                   <Link 
                     to={category.path} 
                     className="text-white hover:text-brand transition-colors duration-300"
                   >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* REVUZIA Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-brand mb-6">REVUZIA</h3>
            <ul className="space-y-3">
              <li>
                 <Link 
                   to="/team" 
                   className="text-white hover:text-brand transition-colors duration-300"
                 >
                   Meet Our Team
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/privacy" 
                   className="text-white hover:text-brand transition-colors duration-300"
                 >
                   Privacy Policy
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/terms" 
                   className="text-white hover:text-brand transition-colors duration-300"
                 >
                   Terms & Conditions
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/affiliate" 
                   className="text-white hover:text-brand transition-colors duration-300"
                 >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-brand mb-6">CONNECT</h3>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleEmailSubmit} className="w-full max-w-sm mb-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-border focus:border-brand focus:ring-brand"
                  required
                />
                <Button 
                  type="submit" 
                  variant="outline" 
                  size="sm" 
                  className="border-brand text-brand hover:bg-brand hover:text-background"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              {isSubscribed && (
                <p className="text-sm text-brand mt-2">Thank you for subscribing!</p>
              )}
            </form>

            {/* Social Links */}
             <a 
               href="https://twitter.com/revuzia" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center space-x-3 text-white hover:text-brand transition-colors duration-300 group"
             >
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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