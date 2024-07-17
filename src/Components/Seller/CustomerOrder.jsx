import React from 'react';

const CustomerOrderCard = ({ order }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white transform hover:scale-105 transition-transform duration-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Order ID: {order.orderId}</div>
        <p className="text-gray-700 text-base"><strong>Customer:</strong> {order.customerName}</p>
        <p className="text-gray-700 text-base"><strong>Contact:</strong> {order.customerContact}</p>
        <p className="text-gray-700 text-base"><strong>Delivery Address:</strong> {order.deliveryAddress}</p>
        <hr className="my-2"/>
        <p className="text-gray-700 text-base"><strong>Car:</strong> {order.carMake} {order.carName} ({order.carYear})</p>
        <p className="text-gray-700 text-base"><strong>Price:</strong> {order.carPrice}</p>
        <p className="text-gray-700 text-base"><strong>Category:</strong> {order.carCategory}</p>
        <p className="text-gray-700 text-base"><strong>Mileage:</strong> {order.carMileage}</p>
        <p className="text-gray-700 text-base"><strong>Engine:</strong> {order.carEngine}</p>
        <p className="text-gray-700 text-base"><strong>Transmission:</strong> {order.carTransmission}</p>
        <p className="text-gray-700 text-base"><strong>Fuel:</strong> {order.carFuel}</p>
        <hr className="my-2"/>
        <p className="text-gray-700 text-base"><strong>Status:</strong> {order.orderStatus}</p>
        <p className="text-gray-700 text-base"><strong>Order Date:</strong> {order.orderDate}</p>
        <p className="text-gray-700 text-base"><strong>Payment Method:</strong> {order.paymentMethod}</p>
        <p className="text-gray-700 text-base"><strong>Notes:</strong> {order.additionalNotes}</p>
      </div>
    </div>
  );
};

export default CustomerOrderCard;
