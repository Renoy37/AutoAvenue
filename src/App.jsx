import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CarPage from "./Components/CarPage";
import CarDetails from "./Components/CarDetails";
import AllCars from './Components/AllCars';
import SignUp from './Components/Registration/SignUp.jsx';
import SellerHome from './SellerHome';
import BodyTypePage from './Components/BodyTypeId';
import SearchResultsPage from './Components/SearchResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars/page" element={<CarPage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/cars/stock" element={<AllCars />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/body-type/:bodyType" element={<BodyTypePage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />

        {/* Seller page routes */}
        <Route path='/seller/home' element={<SellerHome />} />
      </Routes>
    </Router>
  );
}

export default App;
