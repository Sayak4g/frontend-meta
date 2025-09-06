// components/Navbar.jsx

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: You can use Heroicons or any icon lib

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Playback", href: "/playback" },
    { name: "Analytics", href: "/analytics" },
    { name: "Admin", href: "/admin" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-indigo-600">
            🤟 HandSense
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 transition font-medium"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/premium"
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Go Premium
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white border-t">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-indigo-600 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/premium"
              className="block mt-2 px-4 py-2 bg-indigo-600 text-white rounded text-center hover:bg-indigo-700 transition"
            >
              Go Premium
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
