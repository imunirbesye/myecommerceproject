import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import Header from "../layout/Header";
import ProductCategories from "../layout/ProductCategories";
import ProductList from "../layout/ProductList";
import ClientList from "../layout/ClientList";
import Footer from "../layout/Footer";

export default function ProductListPage() {
    
    return (
        <div className="bg-light-gray-1">
            <Header />
            <ProductCategories />
            <ProductList />
            <ClientList />
            <Footer />
        </div>
    );
}