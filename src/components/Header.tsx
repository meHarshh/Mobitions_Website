import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Network',
    href: '#network'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/34daace0-d3a1-4a82-b4bd-6d25ccaf02b5.png" alt="Mobtions Logo" className="h-16 w-auto max-w-[200px] object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                {item.name}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:opacity-90 text-white">
              Partner With Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
              <Button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:opacity-90 w-full mt-4 text-white">
                Partner With Us
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;