import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CarCard = ({ car, onOrder, onCancelOrder, token }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrderClick = async () => {
    if (!token) {
      Swal.fire({
        icon: 'warning',
        title: 'Please log in to place an order',
        showConfirmButton: true,
      });
      return;
    }
    if (orderPlaced) {
      await onCancelOrder(car);
      setOrderPlaced(false);
    } else {
      await onOrder(car);
      setOrderPlaced(true);
    }
  };

  return (
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
        <div className="flex justify-between mt-4">
          <button 
            className={`py-2 px-4 rounded-md flex items-center ${orderPlaced ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
            onClick={handleOrderClick}
          >
            {orderPlaced ? 'Cancel Order' : 'Place Order'}
          </button>
          <Link 
            to={`/car/${car.id}`} 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

const CarPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://autoavenuebackend.onrender.com/api/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCars(data.slice(0, 12));  
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleOrder = async (car) => {
    try {
      const response = await fetch(`https://autoavenuebackend.onrender.com/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ carId: car.id }),
      });
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
      const newOrder = await response.json();
      Swal.fire({
        icon: 'success',
        title: 'Order placed successfully',
        showConfirmButton: true,
      });
    } catch (error) {
      console.error('Error placing order:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to place order',
        showConfirmButton: true,
      });
    }
  };

  const handleCancelOrder = async (car) => {
    try {
      const response = await fetch(`https://autoavenuebackend.onrender.com/api/orders/${car.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to cancel order');
      }
      Swal.fire({
        icon: 'success',
        title: 'Order cancelled successfully',
        showConfirmButton: true,
      });
    } catch (error) {
      console.error('Error cancelling order:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to cancel order',
        showConfirmButton: true,
      });
    }
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <section id='featured' className="bg-gray-100 min-h-screen py-8">
      <h1>Featured Cars</h1>
      <div className="container mx-auto px-4">
        <Link to="/cars/stock" className="text-blue-800 text-lg font-semibold mb-4 inline-block">
           <strong className='text-black text-sm mr-2'>Click Here To View cars in stock:</strong>Available Cars
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars.map((car) => (
            <div key={car.id}>
              <CarCard car={car} onOrder={handleOrder} onCancelOrder={handleCancelOrder} token={token} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarPage;
