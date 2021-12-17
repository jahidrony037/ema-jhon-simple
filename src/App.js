import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Notmatch from './components/Notmatch/Notmatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
function App() {
  return (

    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop></Shop>}>
          </Route>
          <Route path="/review" element={<Review></Review>}>
          </Route>
          <Route path="/inventory" element={<Inventory></Inventory>}>
          </Route>
          <Route exact path="/" element={<Shop></Shop>}>
          </Route>
          <Route path='/product/:productKey' element={<ProductDetail></ProductDetail>}>
          </Route>
          <Route path="*" element={<Notmatch></Notmatch>}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
