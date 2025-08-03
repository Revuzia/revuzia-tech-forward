import { Link } from "react-router-dom";
import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleSubscribeClick = () => {
    setShowEmailInput(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter subscription:", email);
      setEmail("");
      setShowEmailInput(false);
      // Show success message or handle subscription
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmailSubmit(e as any);
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
            <h3 className="text-xl font-poppins font-bold text-brand mb-6">EXPLORE</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                   <Link 
                     to={category.path} 
                     className="text-white text-base hover:text-brand transition-colors duration-300 font-poppins font-medium"
                     onClick={() => window.scrollTo(0, 0)}
                   >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* REVUZIA Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-poppins font-bold text-brand mb-6">REVUZIA</h3>
            <ul className="space-y-3">
              <li>
                 <Link 
                   to="/team" 
                   className="text-white text-base hover:text-brand transition-colors duration-300 font-poppins font-medium"
                   onClick={() => window.scrollTo(0, 0)}
                 >
                   Meet Our Team
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/privacy" 
                   className="text-white text-base hover:text-brand transition-colors duration-300 font-poppins font-medium"
                   onClick={() => window.scrollTo(0, 0)}
                 >
                   Privacy Policy
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/terms" 
                   className="text-white text-base hover:text-brand transition-colors duration-300 font-poppins font-medium"
                   onClick={() => window.scrollTo(0, 0)}
                 >
                   Terms & Conditions
                 </Link>
               </li>
               <li>
                 <Link 
                   to="/affiliate" 
                   className="text-white text-base hover:text-brand transition-colors duration-300 font-poppins font-medium"
                   onClick={() => window.scrollTo(0, 0)}
                 >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-poppins font-bold text-brand mb-6">CONNECT</h3>
            
            {/* Newsletter Signup */}
            <div className="w-full max-w-sm mb-6">
              {!showEmailInput ? (
                <Button 
                  onClick={handleSubscribeClick}
                  className="w-full bg-brand hover:bg-brand/90 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 font-poppins text-base"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  SUBSCRIBE
                </Button>
              ) : (
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                   <Input
                    type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="border-gray-300 text-brand placeholder:text-gray-500 focus:border-brand font-poppins text-base mb-3"
                    autoFocus
                  />
                  <Button 
                    onClick={handleEmailSubmit}
                    className="w-full bg-brand hover:bg-brand/90 text-black font-semibold py-2 rounded-lg transition-all duration-300 font-poppins text-base"
                  >
                    Subscribe
                  </Button>
                </div>
              )}
            </div>

            {/* Social Links */}
             <a 
               href="https://twitter.com/revuzia45555"
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center space-x-3 text-white text-base hover:text-brand transition-colors duration-300 group font-poppins font-medium bg-black rounded-full px-6 py-3 hover:bg-brand hover:text-black"
             >
              <span>Follow Us on X</span>
              <div className="bg-black rounded-full p-1">
                <X className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
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