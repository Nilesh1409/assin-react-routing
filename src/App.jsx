import React from 'react';
import { Navbar } from "./component/Navbar"
import { Routes, Route} from "react-router-dom"
import { Home } from './component/Home';
import { ProductDetails } from './component/ProductDetails';
import { Product } from './component/Products';
import {RouteNotExist} from "./component/RouteNotExist";

function App() {
  return <>
   <Navbar></Navbar>
   {/* <ProductDetails></ProductDetails> */}
  <Routes>
    <Route path='/' element={<Home></Home>} ></Route>
    <Route path='/products' element={<Product></Product>} ></Route>
    <Route path='/product/:id' element={<ProductDetails></ProductDetails>} ></Route>
    <Route path="/:Something" element={<RouteNotExist></RouteNotExist>} ></Route>
  </Routes>
  </>
}

export default App;
