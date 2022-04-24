import React from 'react';
import Home from '../pages/Home/Home.page';
import Login from '../pages/Login/login.component';

import Novel from 'pages/panel-product/novel/Novel.component';



import Entertain from 'pages/panel-product/Entertainment/Entertainment.component';
import Education from 'pages/panel-product/Educational/Education.component';


import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Academic from 'pages/panel-product/Academic book/Academic.component';
import Basket from '../pages/basket/basket.component';

import TableProduct from 'pages/panel-order/TableProducts/TableProduct.component';
import ProductApproval from 'pages/panel-order/ProductApproval/ProductApproval.component';
import AwaitingApproval from 'pages/panel-order/AwaitingApproval/AwaitingApproval.component';
import ProductDetail from 'pages/panel-product/ProductDetail/ProductDetail';
import Checkout from 'pages/checkout/checkout.component';
import Bank from 'pages/peyment/Bank/Bank';
import PaymentResultSuccess from 'pages/payment-result-success/PaymentResultSuccess.component';
import PaymentResultFail from 'pages/payment-result-fail/paymentResultFail.component';
import ProductApprovalDetail from 'pages/panel-order/ProductApproval/ProductApprovalDetail/ProductApprovalDetail';
import DetailOrder from 'pages/panel-order/AwaitingApproval/detailOrder/DetailOrder';
import Edit from 'pages/panel-order/TableProducts/Edite/Edit';
import EditPrice from 'pages/panel-order/editPrice/editPrice'


const AppRoute = () => {
  return (

    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/TableProduct' element={<TableProduct />} />
        <Route path='/TableProduct/modalAdd' element={<TableProduct />} />
        <Route path='/TableProduct/Edit/:id' element={<Edit />} />
        <Route path='/Novel' element={<Novel />} />
        <Route path='/Entertain' element={<Entertain />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/Academic' element={<Academic />} />
        <Route path='/Basket' element={<Basket />} />
        <Route path='/ProductApproval' element={<ProductApproval />} />
        <Route path='/AwaitingApproval' element={<AwaitingApproval />} />
        <Route path='/ProductDetail/:id' element={<ProductDetail />} />
        <Route path='/Checkout/:sum' element={<Checkout />} />
        <Route path='/Checkout/Bank/:userName' element={<Bank />} />
        <Route path='/PaymentResultSuccess/:userName' element={<PaymentResultSuccess />} />
        <Route path='/PaymentResultFail/:userName' element={<PaymentResultFail />} />
        <Route path='/detailOrder/:id' element={<DetailOrder />} />
        <Route path='/ProductApproval/:id' element={<ProductApprovalDetail />} />
        <Route path='/EditPrice' element={<EditPrice />} />
      
      </Routes>



    </Router>

  );
}

export default AppRoute;
