import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import carData from './Data'; 

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const make = searchParams.get('make');
  const body = searchParams.get('body');
  const year = searchParams.get('year');

  const filteredCars = carData.filter(car =>
    (make ? car.carMake.toLowerCase() === make.toLowerCase() : true) &&
    (body ? car.carCategory.toLowerCase() === body.toLowerCase() : true) &&
    (year ? car.carYear.toString() === year : true)
  );

  if (filteredCars.length === 0) {
    return (
      <div className="p-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Back to Home
        </Link>
        <h2 className="text-xl font-bold mt-4">No cars found for the selected criteria</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <strong>Click on the item to view</strong>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white shadow-md rounded-md p-4">
            <Link to={`/car/${car.id}`}>
              <img src={car.imageUrl} alt={car.model} className="w-full h-40 object-cover rounded-md mb-2" />
              <h2 className="text-lg font-semibold">{car.carMake} {car.model}</h2>
              <p>{car.carYear}</p>
              <p>{car.carCategory}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
