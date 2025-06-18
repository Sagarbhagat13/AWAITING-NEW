import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-tripvidya-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png" 
                alt="Awaiting Adventures Logo" 
                className="h-10 w-10 mr-2 logo-image"
                style={{ filter: "invert(55%) sepia(95%) saturate(1752%) hue-rotate(18deg) brightness(99%) contrast(96%)" }}
              />
              <h3 className="text-xl font-bold">Awaiting Adventures</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Awaiting Adventures is your one-stop destination for hassle-free travel experiences 
              across India and beyond. We craft memorable trips that balance adventure, 
              comfort, and authentic local experiences.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-tripvidya-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-tripvidya-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-tripvidya-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-tripvidya-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-tripvidya-primary transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/weekends" className="text-gray-300 hover:text-tripvidya-primary transition-colors">
                  Weekend Trips
                </Link>
              </li>
              <li>
                <Link to="/backpacking" className="text-gray-300 hover:text-tripvidya-primary transition-colors">
                  Backpacking Trips
                </Link>
              </li>
              <li>
                <Link to="/custom-trip" className="text-gray-300 hover:text-tripvidya-primary transition-colors">
                  Customise Trip
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tripvidya-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tripvidya-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-tripvidya-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Mail className="h-5 w-5 text-tripvidya-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@awaitingadventures.in</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-tripvidya-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 9999999999</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-tripvidya-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Delhi, India
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest travel updates and exclusive offers.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-r-none"
              />
              <Button className="bg-tripvidya-primary hover:bg-tripvidya-primary/90 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Awaiting Adventures. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-white text-sm">
              FAQs
            </Link>
            <Link to="/careers" className="text-gray-400 hover:text-white text-sm">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
