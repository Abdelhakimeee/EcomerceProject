import React from 'react';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import './Components/Compo.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import PrivateComponent from './Components/PrivateComponent';
import ProductList from './Components/ProductList';
import UpdateComponent from './Components/UpdateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateComponent />} />
            <Route path='/logout' element={<h1>Logout Compo</h1>} />
            <Route path='/profile' element={<h1>Porfile Compo</h1>} />
            
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />


      </Routes>

      <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
