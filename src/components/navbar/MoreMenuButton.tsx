import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

interface NavLink {
  name: string;
  path: string;
  isDropdown?: boolean;
  subItems?: { name: string; path: string }[];
}

interface MoreMenuButtonProps {
  isScrolled: boolean;
  menuItems: NavLink[];
}

const MoreMenuButton = ({ isScrolled, menuItems }: MoreMenuButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className={cn(
            "text-sm font-medium hover:text-tripvidya-primary transition-colors flex items-center",
            isScrolled ? "text-tripvidya-dark" : "text-white"
          )}
        >
          More
          <ChevronDown className="ml-1 h-3 w-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        {menuItems.map((item, index) => (
          <React.Fragment key={item.name}>
            {item.isDropdown ? (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  {item.name}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {item.subItems?.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link 
                        to={subItem.path}
                        className="w-full py-2 text-sm hover:bg-gray-50 hover:text-tripvidya-primary transition-colors cursor-pointer"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem asChild>
                <Link 
                  to={item.path}
                  className="w-full py-2 text-sm hover:bg-gray-50 hover:text-tripvidya-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            )}
            {/* Add separator before last item (Contact) */}
            {index === menuItems.length - 2 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreMenuButton;