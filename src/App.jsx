import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'
import CarPage from "./Components/CarPage";
import CarDetails from "./Components/CarDetails";
import AllCars from './Components/AllCars';

function App() {

  return (
    <Router>
      <>       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars/page" element={<CarPage />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/cars/stock" element={<AllCars />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
