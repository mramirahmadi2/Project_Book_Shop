import React from 'react';
import Home  from '../pages/Home/Home.page';
import Login  from '../pages/Login/login.component';
import Order from '../pages/panel-order/Order.component';
import Novel from 'pages/panel-product/novel/Novel.component';



import Entertain from 'pages/panel-product/Entertainment/Entertainment.component';
import Education from 'pages/panel-product/Educational/Education.component';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Academic from 'pages/panel-product/Academic book/Academic.component';








const AppRoute = () => {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Order' element={<Order/>} />
    <Route path='/Novel' element={<Novel/>} />
    <Route path='/Entertain' element={<Entertain/>} />
    <Route path='/Education' element={<Education/>} />
    <Route path='/Academic' element={<Academic/>} />

    </Routes>
    
    
    
    </BrowserRouter>
    
  );
}

export default AppRoute;
