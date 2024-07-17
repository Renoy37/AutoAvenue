import React from 'react';
import CustomerOrderCard from './CustomerOrder';
import customerOrdersData from './CustomerCarData';

const CustomerOrders = () => {
  return (
    <section id='customers'>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center">
          {customerOrdersData.map((order) => (
            <CustomerOrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerOrders;
