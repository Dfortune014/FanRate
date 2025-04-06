
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SportSelector from './SportSelector';

const Header: React.FC = () => {
  return (
    <header className="bg-sport-dark text-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-sport-red font-bold text-2xl mr-1">FAN</span>
              <span className="font-bold text-2xl">SCORE</span>
            </a>
          </div>
          
          <SportSelector />
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search players, teams..."
                className="bg-sport-gray rounded-md py-1 px-3 pl-8 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-sport-red"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-sport-dark">
              Sign In
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <Button variant="ghost" size="sm" className="px-2">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
