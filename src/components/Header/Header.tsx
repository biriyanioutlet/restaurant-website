import React, { useState } from 'react';
import Container from '../Container/Container';
import { addBaseUrl } from '../../utils/imageUrl';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(''); // Track active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  const closeMenu = (section: string) => {
    setActiveLink(section); // Set the active link on click
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header id="header" className="header bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="header-content flex items-center justify-between py-2">
          {/* Logo on the left */}
          <div className="logo">
            <img
              src={addBaseUrl('/images/biryanioutlet_logo.png')}
              alt="Logo"
              className="h-16 w-auto md:h-20" // Responsive height
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-gray-700 text-lg">
            <a
              href="#home"
              className={`${
                activeLink === '#home' ? 'bg-gray-700 text-white' : ''
              } px-4 py-2 hover:bg-gray-200 hover:text-gray-700`}
              onClick={() => closeMenu('#home')}
            >
              Home
            </a>
            <a
              href="#catering"
              className={`${
                activeLink === '#catering' ? 'bg-gray-700 text-white' : ''
              } px-4 py-2 hover:bg-gray-200 hover:text-gray-700`}
              onClick={() => closeMenu('#catering')}
            >
              Catering
            </a>
            <a
              href="#menu"
              className={`${
                activeLink === '#menu' ? 'bg-gray-700 text-white' : ''
              } px-4 py-2 hover:bg-gray-200 hover:text-gray-700`}
              onClick={() => closeMenu('#menu')}
            >
              Menu
            </a>
            <a
              href="#partners"
              className={`${
                activeLink === '#partners' ? 'bg-gray-700 text-white' : ''
              } px-4 py-2 hover:bg-gray-200 hover:text-gray-700`}
              onClick={() => closeMenu('#partners')}
            >
              Partners
            </a>
            <a
              href="#contact"
              className={`${
                activeLink === '#contact' ? 'bg-gray-700 text-white' : ''
              } px-4 py-2 hover:bg-gray-200 hover:text-gray-700`}
              onClick={() => closeMenu('#contact')}
            >
              Contact Us
            </a>
          </nav>

          {/* Hamburger menu button (visible on small screens) */}
          <button
            className="block md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {/* Icon for the hamburger menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Close icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Vertical List of Navigation Links */}
            <nav className="text-white text-2xl flex flex-col space-y-8">
              <a
                href="#home"
                className={`${
                  activeLink === '#home' ? 'bg-gray-700' : ''
                } px-4 py-2`}
                onClick={() => closeMenu('#home')}
              >
                Home
              </a>
              <a
                href="#catering"
                className={`${
                  activeLink === '#catering' ? 'bg-gray-700' : ''
                } px-4 py-2`}
                onClick={() => closeMenu('#catering')}
              >
                Catering
              </a>
              <a
                href="#menu"
                className={`${
                  activeLink === '#menu' ? 'bg-gray-700' : ''
                } px-4 py-2`}
                onClick={() => closeMenu('#menu')}
              >
                Menu
              </a>
              <a
                href="#partners"
                className={`${
                  activeLink === '#partners' ? 'bg-gray-700' : ''
                } px-4 py-2`}
                onClick={() => closeMenu('#partners')}
              >
                Partners
              </a>
              <a
                href="#contact"
                className={`${
                  activeLink === '#contact' ? 'bg-gray-700' : ''
                } px-4 py-2`}
                onClick={() => closeMenu('#contact')}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
