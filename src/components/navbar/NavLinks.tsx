
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLink {
  name: string;
  path: string;
  isDropdown?: boolean;
  subItems?: { name: string; path: string }[];
}

interface NavLinksProps {
  isScrolled: boolean;
  links: NavLink[];
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ isScrolled, links, mobile = false, onClick }: NavLinksProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!mobile) {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [mobile]);

  // For mobile view
  if (mobile) {
    return (
      <nav className="flex flex-col space-y-3">
        {links.map((link, index) => (
          <div key={link.name} className="w-full">
            {link.isDropdown ? (
              <div className="w-full">
                <div 
                  className="text-tripvidya-dark text-sm font-medium py-2 border-b border-gray-100 flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                </div>
                
                {openDropdown === link.name && link.subItems && (
                  <div className="pl-4 mt-1 space-y-2 border-l border-gray-100 ml-2">
                    {link.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        to={subItem.path}
                        className="text-tripvidya-dark text-xs font-medium py-1.5 flex items-center hover:text-tripvidya-primary transition-colors"
                        onClick={onClick}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to={link.path}
                className="text-tripvidya-dark text-sm font-medium py-2 border-b border-gray-100 flex justify-between items-center hover:text-tripvidya-primary transition-colors"
                onClick={onClick}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
                <span className="text-tripvidya-primary text-xs">→</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }

  // For desktop view
  return (
    <nav className="hidden lg:flex items-center space-x-6" ref={dropdownRef}>
      {links.map((link) => (
        link.isDropdown ? (
          <DropdownMenu key={link.name}>
            <DropdownMenuTrigger asChild>
              <button 
                className={cn(
                  "text-sm font-medium hover:text-tripvidya-primary transition-colors flex items-center",
                  isScrolled ? "text-tripvidya-dark" : "text-white"
                )}
              >
                {link.name}
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {link.subItems?.map((subItem) => (
                <DropdownMenuItem key={subItem.name} asChild>
                  <Link 
                    to={subItem.path}
                    className="w-full py-2 text-sm hover:bg-gray-50 hover:text-tripvidya-primary transition-colors cursor-pointer"
                  >
                    {subItem.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link 
            key={link.name}
            to={link.path}
            className={cn(
              "text-sm font-medium hover:text-tripvidya-primary transition-colors",
              isScrolled ? "text-tripvidya-dark" : "text-white"
            )}
          >
            {link.name}
          </Link>
        )
      ))}
    </nav>
  );
};

export default NavLinks;
