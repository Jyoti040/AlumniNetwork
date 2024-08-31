// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">Alumni Network</Link>
        </h1>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        </nav>
        <IconButton
          className="md:hidden"
          onClick={handleMenuToggle}
          aria-label="Menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700">
          <ul className="space-y-4 p-4">
            <li><Link to="/" className="block text-white">Home</Link></li>
            <li><Link to="/login" className="block text-white">Login</Link></li>
            <li><Link to="/register" className="block text-white">Register</Link></li>
            <li><Link to="/profile" className="block text-white">Profile</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
