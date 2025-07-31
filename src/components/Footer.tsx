import { Link } from "react-router-dom";
import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* REVUZIA Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">REVUZIA</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/team" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/affiliate" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* STAY UPDATED Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">STAY UPDATED</h3>
            <a 
              href="https://twitter.com/revuzia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
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