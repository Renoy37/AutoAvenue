import React, { useEffect, useState } from 'react';
import CarCard from './CardComponent';
import AddProducts from './AddProducts';

const SellerProducts = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User is not authenticated.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://autoavenuebackend.onrender.com/api/shop/products', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error response:', response.status, errorData);

          if (response.status === 404) {
            throw new Error('No products found for this seller.');
          } else if (response.status === 500) {
            throw new Error('Server error. Please try again later.');
          } else {
            throw new Error(`Failed to fetch car data: ${response.status} - ${response.statusText}`);
          }
        }

        const data = await response.json();
        setCars(data);
      } catch (error) {
        if (error.name === 'TypeError') {
          setError('Network error. Please check your internet connection.');
        } else {
          setError(error.message);
        }
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id='products'>
      <div className="container mx-auto px-4 py-8">
        <AddProducts />
        <div className="flex flex-wrap justify-center">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerProducts;
