import React from 'react';
import { useParams, Link } from 'react-router-dom';
import carData from './Data.jsx';

const CarDetails = () => {
  const { id } = useParams();
  const car = carData.find((car) => car.id.toString() === id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-4">
          Back
        </Link>
        <h2 className="text-xl font-bold">{`${car.carMake} ${car.carName}`}</h2>
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="relative w-full h-60 mb-4">
          <img
            src={car.carImage}
            alt={`${car.carMake} ${car.carName}`}
            className="rounded-md w-84 h-full object-cover"
          />
        </div>
        <p><strong>Year:</strong> {car.carYear}</p>
        <p><strong>Price:</strong> {car.carPrice}</p>
        <p><strong>Category:</strong> {car.carCategory}</p>
        <p><strong>Mileage:</strong> {car.carMileage}</p>
        <p><strong>Engine:</strong> {car.carEngine}</p>
        <p><strong>Transmission:</strong> {car.carTransmission}</p>
        <p><strong>Mileage:</strong> {car.carMileage}</p>
        <p><strong>Description:</strong> {car.carDescription}</p>

      </div>
    </div>
  );
};

export default CarDetails;
