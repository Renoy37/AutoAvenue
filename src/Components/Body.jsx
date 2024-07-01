
import React from 'react';
import SuvImage from '../assets/suv.webp';
import HatchbackImage from '../assets/hatchback.jpg';
import SaloonImage from '../assets/saloon.png';
import PickupImage from '../assets/pickup.jpg';
import WagonsImage from '../assets/minivan.jpg';
import TrucksImage from '../assets/Trucks.png';

export const Body = () => {
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1990; year--) {
      years.push(year.toString());
    }
    return years;
  };

  const years = generateYears();

  return (
    <section id='body' className="relative">
      <div className="absolute inset-x-0 top-10 left-1/2 transform -translate-x-1/2 mt-[-350px] bg-gray-100 bg-opacity-75 p-6 rounded-md shadow-lg flex flex-col md:flex-row items-center justify-center z-10 space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Find</button>
        <div className="flex flex-col items-start w-full md:w-auto">
          <label htmlFor="make" className="mb-2 text-gray-700 m-4">Select Make</label>
          <input list="carmake" id="make" name="make" className="p-2 border rounded-md w-full m-2" />
          <datalist id="carmake">
            <option value="BMW" />
            <option value="Volvo" />
            <option value="Toyota" />
            <option value="Honda" />
            <option value="Ford" />
            <option value="Chevrolet" />
          </datalist>
        </div>
        <div className="flex flex-col items-start w-full md:w-auto">
          <label htmlFor="body" className="mb-2 text-gray-700 m-4">Select Body Type</label>
          <input list="CarBodyType" id="body" name="body" className="p-2 border rounded-md w-full m-2" />
          <datalist id="CarBodyType">
            <option value="Saloon" />
            <option value="Hatchback" />
            <option value="SUV" />
            <option value="Crossover" />
            <option value="Convertible" />
            <option value="Coupe" />
          </datalist>
        </div>
        <div className="flex flex-col items-start w-full md:w-auto">
          <label htmlFor="year" className="mb-2 text-gray-700 m-4">Select Year</label>
          <input list="CarYear" id="year" name="year" className="p-2 border rounded-md w-full m-2" />
          <datalist id="CarYear">
            {years.map((year) => (
              <option key={year} value={year} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="mt-64">
        <h2 className="text-center text-xl font-semibold mb-4">Body Types</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={SuvImage} alt="SUV" width={200} height={100} className="rounded-md shadow-md" />
            <h2 className="mt-2 text-gray-800 font-semibold">SUVs</h2>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={HatchbackImage} alt="Hatchback" width={200} height={100} />
            <h2 className="mt-2">Hatchbacks</h2>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={SaloonImage} alt="Saloon" width={200} height={100} />
            <h2 className="mt-2">Saloon</h2>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={PickupImage} alt="Pickup" width={200} height={100} />
            <h2 className="mt-2">Pickups</h2>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={WagonsImage} alt="Wagons" width={200} height={100} />
            <h2 className="mt-2">Wagons</h2>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={TrucksImage} alt="Trucks" width={200} height={100} />
            <h2 className="mt-2">Trucks</h2>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Body;
