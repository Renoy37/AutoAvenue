// SellerNav Component
import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

function SellerNav({ autoavenue }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-white shadow-md fixed w-full z-10'>
      <div className='container mx-auto p-4 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center mb-4 md:mb-0 w-full md:w-auto'>
          <img src={autoavenue} alt='logo' width={50} height={50}/>
          <a href="/" className="ml-2 text-gray-700 hover:text-gray-900 text-xl font-bold cursor-pointer">
            AutoAvenue
          </a>
          <div className="ml-auto md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <nav className={`flex-col md:flex-row md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} w-full md:w-auto`}>
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer"
          >
            Products
          </Link> 
          <Link
            to="customers"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer"
          >
            Customers
          </Link>
          <a href="/signUp" className="text-gray-700 hover:text-gray-900 flex items-center mb-2 md:mb-0 ml-3 cursor-pointer">
            <CgProfile className="mr-2" />
            Shop Name
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SellerNav;
