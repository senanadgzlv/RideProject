import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Footer from "../components/pages/Homecomponents/Footer";
import Home from "../components/pages/Homecomponents/Home";
import Nav from "../components/pages/Navbar/Nav";
import Shop from "../components/pages/Shops/Shop";
// import ProductDetail from "../components/pages/Shops/ProductDetail";
import Contact from "../components/pages/Contact/Contact";
import About from "../components/pages/PageCategory/About";
import Team from "../components/pages/Ourteam/Team"
import Faq from "../components/pages/Faq/Faq"
import Loginpage from "../components/pages/Loginpage/Loginpage";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          {/* <Route path="/product/:id" element={<ProductDetail />}></Route> */}
          <Route path="/contact" element={ <Contact />} ></Route>
          <Route path="/about" element={<About />} ></Route>
      <Route path="/team" element={<Team /> }></Route>
      <Route path="/faq" element={<Faq />} ></Route>
      {/* <Route path="/blog"  exact element={<Blog />} ></Route> */}
      <Route path="/admin" element={<Loginpage />} ></Route>
  
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
