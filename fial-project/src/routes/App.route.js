import React from 'react';
import Home from '../pages/Home/HomePage.component';
import Login  from '../pages/Login/login.component';
import Order from '../pages/panel-order/Order.component';







import {BrowserRouter, Route, Routes} from 'react-router-dom';





const AppRoute = () => {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Order' element={<Order/>} />

    </Routes>
    
    
    
    </BrowserRouter>
    
  );
}

export default AppRoute;
