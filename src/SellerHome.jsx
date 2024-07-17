import React from 'react';
import SellerNav from './Components/Seller/SellerNav';
import AutoAvenue from './assets/AutoAvenue.png';
import SellerProducts from './Components/Seller/SellerProducts';
import Orders from './Components/Seller/Orders'

function SellerHome() {
  return (
    <div>
      <SellerNav autoavenue={AutoAvenue} />
      <main className="pt-20"> 
        <SellerProducts />
        <Orders />
      </main>
    </div>
  );
}

export default SellerHome;
