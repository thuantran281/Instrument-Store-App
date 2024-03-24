import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import News from "./Pages/News/News";
import Guitar from "./Pages/Products/Guitar/Guitar";
import Organ from "./Pages/Products/Organ/Organ";
import Drum from "./Pages/Products/Drum/Drum";
import Piano from "./Pages/Products/Piano/Piano";
import Ukulele from "./Pages/Products/Ukulele/Ukulele";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import NotFound from "./Pages/Not Found/NotFound";
import ProductDetail from "./Pages/Products/Product Detail/ProductDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/products/guitar" exact Component={Guitar} />
          <Route path="/products/piano" Component={Piano} />
          <Route path="/products/drum" Component={Drum} />
          <Route path="/products/organ" Component={Organ} />
          <Route path="/products/ukulele" Component={Ukulele} />
          <Route path="/shopping-cart" exact Component={ShoppingCart} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:category/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
