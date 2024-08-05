import React, { useState } from 'react';
import AutoAvenue from '../assets/AutoAvenue.png';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll as ScrollLink
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaHome, FaUserPlus, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">
          <img src={AutoAvenue} alt="logo" width={50} height={50} />
          <a href="#" className="ml-2 text-gray-700 hover:text-gray-900 text-xl font-bold cursor-pointer">
            AutoAvenue
          </a>
          <div className="ml-auto md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <nav className={`flex-col md:flex-row md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} w-full md:w-auto`}>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer"
          >
            <FaHome className="mr-2" />
            Home
          </ScrollLink>
          <ScrollLink
            to="body"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer"
          >
            Body
          </ScrollLink>
          <ScrollLink
            to="featured"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer"
          >
            Featured
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer"
          >
            Contact
          </ScrollLink>
          <Link to="/signUp" className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer">
            <FaUserPlus className="mr-2" />
            Register
          </Link>
          <Link to="/signUp" className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer">
            <FaSignInAlt className="mr-2" />
            Log In
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
