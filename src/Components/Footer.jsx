import React from 'react';
import AutoAvenueImage from '../assets/AutoAvenue.png';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <img src={AutoAvenueImage} alt="Auto Avenue Logo" className="h-16 w-auto" />
          <strong className="text-xl">Auto Avenue</strong>
        </div>

        <ul className="text-center md:text-left space-y-2">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <li>Sales Department</li>
          <li>Phone: 12345678</li>
          <li>Email: sales@autoavenue.com</li>
        </ul>

        <ul className="text-center md:text-left space-y-2">
          <h2 className="text-lg font-semibold">Service Department</h2>
          <li>Phone: 1234789</li>
          <li>Email: service@autoavenue.com</li>
        </ul>

        <ul className="text-center md:text-left space-y-2">
          <h2 className="text-lg font-semibold">Address</h2>
          <li>Auto Avenue</li>
          <li>123 Car Street</li>
          <li>Nairobi</li>
        </ul>
      </div>
    </footer>
  );
};
