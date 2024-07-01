import React from 'react';
import { Link } from 'react-router-dom';
import carData from './Data.jsx';

const CarCard = ({ car }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col">
    <div className="relative w-full h-48">
      <img 
        src={car.carImage} 
        alt={`${car.carMake} ${car.carName}`} 
        className="rounded-t-md w-full h-full object-cover"
      />
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold mb-2">{`${car.carMake} ${car.carName}`}</h2>
        <p><strong>Year:</strong> {car.carYear}</p>
        <p><strong>Price:</strong> {car.carPrice}</p>
        <p><strong>Category:</strong> {car.carCategory}</p>
        <p><strong>Mileage:</strong> {car.carMileage}</p>
      </div>
      <Link 
        to={`/car/${car.id}`} 
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md self-end mt-4"
      >
        View More
      </Link>
    </div>
  </div>
);

const CarPage = () => {
  return (
    <section id='featured' className="bg-gray-100 min-h-screen py-8">
      <h1>Featured</h1>
      <div className="container mx-auto px-4">
        <Link to="/cars/stock" className="text-blue-800 text-lg font-semibold mb-4 inline-block">
          All Cars
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {carData.map((car) => (
            <div key={car.id}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default CarPage;
