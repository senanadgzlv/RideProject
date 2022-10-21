import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Footer from "../components/pages/Homecomponents/Footer";
import Home from "../components/pages/Homecomponents/Home";
import Nav from "../components/pages/Navbar/Nav";
import Shop from "../components/pages/Shops/Shop";
import ProductDetail from "../components/pages/Shops/ProductDetail";
import Contact from "../components/pages/Contact/Contact";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/contact" element={ <Contact />} ></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
