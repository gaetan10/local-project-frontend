import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


import './App.css';
import Farmers from './farmers/pages/Farmers';
import NewFarmer from './farmers/pages/NewFarmer';
import FarmerDetail from './farmers/pages/FarmerDetail';
import Header from './shared/components/Header';
import EditFarmer from './farmers/pages/EditFarmer';
import NewProduct from './products/pages/NewProduct';

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Farmers />}/>
        <Route path="/farmers/:farmerId/edit" element={<EditFarmer />}/>
        <Route path="/farmers/:farmerId/products/new" element={<NewProduct />}/>
        <Route path="/farmers/:farmerId" element={<FarmerDetail />}/>
        <Route path="/farmers/new" element={<NewFarmer />}/>
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>
    </Router>
  );
}

export default App;
