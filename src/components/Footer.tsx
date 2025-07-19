import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <span className="font-bold text-xl">BashaBari</span>
                <p className="text-sm text-primary-foreground/80">Property Management</p>
              </div>
            </div>
            <p className="text-primary-foreground/80">
              Bangladesh's most trusted platform for rental property management. 
              Connecting landlords, tenants, and agents seamlessly.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/properties" className="hover:text-primary-foreground transition-colors">Find Properties</Link></li>
              <li><Link to="/properties" className="hover:text-primary-foreground transition-colors">List Property</Link></li>
              <li><Link to="/landlords" className="hover:text-primary-foreground transition-colors">For Landlords</Link></li>
              <li><Link to="/agents" className="hover:text-primary-foreground transition-colors">For Agents</Link></li>
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@bashabari.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-primary-foreground/80">
          <p>&copy; 2024 BashaBari. All rights reserved. Made with ❤️ for Bangladesh.</p>
        </div>
      </div>
    </footer>
  );
}