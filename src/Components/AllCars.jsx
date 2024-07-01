import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import carData from './Data'; // Import your car data array

const AllCars = () => {
    const [make, setMake] = useState('');
    const [category, setCategory] = useState('');
    const [year, setYear] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Number of items to display per page
    const itemsPerPage = 5;

    // Calculate total number of pages
    const totalPages = Math.ceil(carData.length / itemsPerPage);

    // Function to filter cars based on current page and filters
    const filteredCars = carData
        .filter(car => {
            return (!make || car.carMake === make) &&
                   (!category || car.carCategory === category) &&
                   (!year || car.carYear === parseInt(year));
        });

    // Calculate cars to display for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleCars = filteredCars.slice(startIndex, startIndex + itemsPerPage);

    // Function to handle page navigation
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    // Generate page navigation buttons
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
            <button
                key={i}
                className={`bg-gray-200 p-2 rounded ${currentPage === i ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => goToPage(i)}
            >
                {i}
            </button>
        );
    }

    return (
        <div className="flex">
            <div className="fixed left-0 w-1/4 h-screen overflow-y-auto bg-gray-100 p-4">
                {/* Filters */}
                <h3 className="font-bold mb-2">Make</h3>
                <select
                    className="w-full p-2 border rounded"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                >
                    <option value="">All Makes</option>
                    {/* Render makes dynamically from carData */}
                    {[...new Set(carData.map(car => car.carMake))].map((make, index) => (
                        <option key={index} value={make}>{make}</option>
                    ))}
                </select>

                <h3 className="font-bold mb-2 mt-4">Year</h3>
                <select
                    className="w-full p-2 border rounded"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                    <option value="">All Years</option>
                    {/* Render years dynamically from carData */}
                    {[...new Set(carData.map(car => car.carYear))].map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>

                <h3 className="font-bold mb-2 mt-4">Categories</h3>
                <select
                    className="w-full p-2 border rounded"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {/* Render categories dynamically from carData */}
                    {[...new Set(carData.map(car => car.carCategory))].map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="w-3/4 ml-auto p-4">
                {/* Render visible cars */}
                {visibleCars.map(car => (
                    <div key={car.id} className="mb-4">
                        <div className="flex items-center">
                            <img src={car.carImage} alt={`${car.carMake} ${car.carName}`}  width={100} height={75} />
                            <div className="ml-4">
                            <h2 className="text-xl font-bold">{`${car.carMake} ${car.carName}`}</h2>
                            <p>{car.carPrice}</p>
                                <p>Year: {car.carYear} &nbsp; Mileage: {car.carMileage}</p>
                                <p>Body/Category: {car.carCategory}</p>
                                <p>+254712345678</p>
                                <button className="bg-green-500 p-2 rounded text-white flex items-center">
                                    <FaWhatsapp className="mr-2" /> WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Pagination buttons */}
                <div className="mt-4 flex justify-center">
                    {pageButtons}
                </div>
            </div>
        </div>
    );
};

export default AllCars;
