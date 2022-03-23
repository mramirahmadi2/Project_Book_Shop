import React from 'react';
import Home  from '../pages/Home/Home.page';
import Login  from '../pages/Login/login.component';

import Novel from 'pages/panel-product/novel/Novel.component';



import Entertain from 'pages/panel-product/Entertainment/Entertainment.component';
import Education from 'pages/panel-product/Educational/Education.component';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Academic from 'pages/panel-product/Academic book/Academic.component';
import Basket from '../pages/basket/basket.component';

import TableProduct from 'pages/panel-order/TableProducts/TableProduct.component';
import ProductApproval from 'pages/panel-order/ProductApproval/ProductApproval.component';
import AwaitingApproval from 'pages/panel-order/AwaitingApproval/AwaitingApproval.component';








const AppRoute = () => {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/TableProduct' element={<TableProduct/>} />
    <Route path='/Novel' element={<Novel/>} />
    <Route path='/Entertain' element={<Entertain/>} />
    <Route path='/Education' element={<Education/>} />
    <Route path='/Academic' element={<Academic/>} />
    <Route path='/Basket' element={<Basket/>} />
    <Route path='/ProductApproval' element={<ProductApproval/>} />
    <Route path='/AwaitingApproval' element={<AwaitingApproval/>} />
   
    </Routes>
    
    
    
    </BrowserRouter>
    
  );
}

export default AppRoute;
