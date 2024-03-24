import React, { StrictMode, useState } from 'react'   

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import Blog from './pages/Blog';

function App() { 

  return ( 
    <StrictMode>
      <BrowserRouter>
        <Switch> 
          <Route path="/" exact><Home /></Route>
          <Route path="/product/:id" children={<ProductPage />} />
          <Route path="/shop" children={<ProductListPage />} />
          <Route path="/shop/:filter" children={<ProductListPage />} />
          <Route path="/blog/:id" children={<Blog />} />
          <Route path="/acoutUs" children={<AboutUs />} />
          <Route path="/contact" children={<Contact />} />
        </Switch> 
      </BrowserRouter>
    </StrictMode>
  )
}

export default App;