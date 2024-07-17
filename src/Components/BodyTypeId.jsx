import React from 'react';
import { useParams, Link } from 'react-router-dom';
import carData from '../Components/Data'; 

const BodyTypePage = () => {
  const { bodyType } = useParams();
  const filteredCars = carData.filter(car => car.carCategory.toLowerCase() === bodyType.toLowerCase());

  if (filteredCars.length === 0) {
    return (
      <div className="p-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Back to Home
        </Link>
        <h2 className="text-xl font-bold mt-4">No cars found for {bodyType}</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">{bodyType} Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCars.map((car) => (
          <div key={car.id} className="bg-white shadow-md rounded-md p-4">
            <Link to={`/car/${car.id}`}>
              <div className="relative w-full h-48">
                <img
                  src={car.carImage}
                  alt={`${car.carMake} ${car.carName}`}
                  className="rounded-md w-84 h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold mt-2">{`${car.carMake} ${car.carName}`}</h2>
              <p className="text-gray-600">{car.carYear}</p>
              <p className="text-gray-800 font-bold">${car.carPrice}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyTypePage;
