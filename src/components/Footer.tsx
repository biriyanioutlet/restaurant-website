import React from 'react';
import restroData from '../data/restro.json';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Information */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Company Name</h2>
            <p className="text-sm">
              {restroData.companyName}
              <br />
              <br />

              <address className="not-italic">
                {restroData.address.address1}
                <br /> {restroData.address.address2}
              </address>
              <a href="tel:+16137966199" className="hover:underline">
                {restroData.phoneNumber}
              </a>
              <br />
              <br />
              <a
                href="mailto:biriyanioutlet@gmail.com"
                className="hover:underline"
              >
                {restroData.email}
              </a>
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:underline">
                  Catering
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:underline">
                  Menu
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#contactUs" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/biryanioutlet.ottawa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/biryanioutlet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Biriyani Outlet. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
