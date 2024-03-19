import React, { useState } from 'react'   

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import Blog from './pages/Blog';

function App() { 

  return ( 
    <BrowserRouter>
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/products/:filter" component={ProductListPage} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/acoutUs" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </Switch> 
    </BrowserRouter>
  )
}

export default App;