import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, X as CloseIcon } from 'lucide-react';
export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="sticky top-0 z-50 bg-white shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-brand-dark-blue font-bold text-xl">
            Christian Leadership Movement
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-navy-ink hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/programs" className="text-navy-ink hover:text-gold transition-colors">
            Programs
          </Link>
          <Link to="/events" className="text-navy-ink hover:text-gold transition-colors">
            Events
          </Link>
          <Link to="/partners" className="text-navy-ink hover:text-gold transition-colors">
            Partners
          </Link>
        </div>
        {/* Login/Apply Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-navy-ink hover:text-gold transition-colors font-medium">
            Login
          </Link>
          <Link to="/apply" className="bg-gold hover:bg-opacity-90 text-white px-4 py-2 rounded-card font-medium transition-all">
            Apply Now
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy-ink" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/about" className="text-navy-ink py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/programs" className="text-navy-ink py-2" onClick={toggleMenu}>
              Programs
            </Link>
            <Link to="/events" className="text-navy-ink py-2" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/partners" className="text-navy-ink py-2" onClick={toggleMenu}>
              Partners
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <Link to="/login" className="text-navy-ink font-medium py-2" onClick={toggleMenu}>
                Login
              </Link>
              <Link to="/apply" className="bg-gold text-white px-4 py-2 rounded-card font-medium text-center" onClick={toggleMenu}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>}
    </nav>;
}