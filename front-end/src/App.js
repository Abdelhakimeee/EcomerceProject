import React from 'react';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import './Components/Compo.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Product</h1>} />
        <Route path='/add' element={<h1>AddProduct</h1>} />
        <Route path='/update' element={<h1>Update product</h1>} />
        <Route path='/logout' element={<h1>Logout Compo</h1>} />
        <Route path='/profile' element={<h1>Porfile Compo</h1>} />
      </Routes>

      <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
