import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/VHunt%20logo%20blue.png" 
              alt="VHunt Logo" 
              className="h-8 w-auto"
            />
            <p className="text-primary-foreground/80 text-sm">
              Your partner in digital excellence. Hunting the best solutions for
              your business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/global-reach"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Global Reach
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>SEO Optimization</li>
              <li>PPC Campaigns</li>
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
              <li>Viral Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-accent rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-accent rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-accent rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-accent rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} VHunt. All rights reserved. |
            Delivering digital excellence worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
