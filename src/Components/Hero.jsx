import React from 'react';
import heroImage from '../assets/hero.jpg';

export const Hero = () => {
  return (
    <section id='home' className="relative h-screen">
      <img src={heroImage} alt="Your Most Trusted Dealer" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold">Your Most Trusted Dealer</h2>
        <h3 className="text-lg md:text-2xl mt-4">Let's Find your Dream Car</h3>
        <button className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none" aria-label="Explore Now">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
