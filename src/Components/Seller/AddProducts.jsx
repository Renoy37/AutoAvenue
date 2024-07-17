import React, { useState, useContext, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Registration/ContextToken';

function AddProducts() {
  const [showForm, setShowForm] = useState(false);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      Swal.fire({
        title: 'You need to be logged in to add a product',
        text: "Click here to log in",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Log In',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signUp', { state: { from: location.pathname } });
        }
      });
      return;
    }
  
    const form = e.target;
    const formData = new FormData(form);
  
    // Client-side validation
    const carMake = formData.get('carMake').trim();
    const carName = formData.get('carName').trim();
    const carYear = formData.get('carYear').trim();
    const carPrice = formData.get('carPrice').trim();
    const carCategory = formData.get('carCategory').trim();
    const carMileage = formData.get('carMileage').trim();
    const carEngine = formData.get('carEngine').trim();
    const carTransmission = formData.get('carTransmission').trim();
    const carFuel = formData.get('carFuel').trim();
    const carDescription = formData.get('carDescription').trim();
  
    if (!carMake || !carName || !carYear || !carPrice || !carCategory || !carMileage || !carEngine || !carTransmission || !carFuel || !carDescription) {
      Swal.fire('Validation Error', 'All fields are required.', 'error');
      return;
    }
  
    // Log form data
    console.log('Form Data:');
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await fetch('https://autoavenuebackend.onrender.com/api/shop/addproducts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        if (response.status === 401) {
          Swal.fire('Unauthorized', 'You are not authorized to perform this action.', 'error');
        } else if (response.status === 422) {
          Swal.fire('Validation Error', errorData.Message, 'error');
        } else {
          Swal.fire('Error', 'Failed to add product.', 'error');
        }
        return;
      }
  
      setShowForm(false); // Hide form on successful submission
      form.reset(); // Reset form fields
      Swal.fire('Success', 'Product added successfully!', 'success');
  
    } catch (error) {
      console.error('Error adding product:', error);
      Swal.fire('Error', 'Failed to add product.', 'error');
    }
  };
  

  useEffect(() => {
    if (token && location.state?.from === location.pathname) {
      setShowForm(true);
    }
  }, [token, location]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-800'>Products</h1>
        <button 
          onClick={toggleForm} 
          className='flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'
        >
          <GrAdd className='mr-2' />
          Add Products
        </button>
      </div>

      {showForm && (
        <div className='mt-8 p-4 border border-gray-200 rounded shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Make</label>
              <input 
                type='text' 
                name='carMake'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car make' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Name</label>
              <input 
                type='text' 
                name='carName'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car name' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Year</label>
              <input 
                type='number' 
                name='carYear'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car year' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Price</label>
              <input 
                type='text' 
                name='carPrice'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car price' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Category</label>
              <input 
                type='text' 
                name='carCategory'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car category' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Mileage</label>
              <input 
                type='text' 
                name='carMileage'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car mileage' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Engine</label>
              <input 
                type='text' 
                name='carEngine'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car engine' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Transmission</label>
              <input 
                type='text' 
                name='carTransmission'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car transmission' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Fuel</label>
              <input 
                type='text' 
                name='carFuel'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car fuel' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Description</label>
              <textarea 
                name='carDescription'
                className='w-full px-3 py-2 border rounded' 
                placeholder='Enter car description' 
              ></textarea>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Car Image</label>
              <input 
                type='file' 
                name='carImage'
                className='w-full px-3 py-2 border rounded' 
                accept="image/*"
              />
            </div>
            <button 
              type='submit' 
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddProducts;
