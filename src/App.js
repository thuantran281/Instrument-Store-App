import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./View/Home/Home";
import About from "./View/About/About";
import Blogs from "./View/Blogs/Blogs";
import Contact from "./View/Contact/Contact";
import News from "./View/News/News";
import Guitar from "./View/Products/Guitar/Guitar";
import Organ from "./View/Products/Organ/Organ";
import Drum from "./View/Products/Drum/Drum";
import Piano from "./View/Products/Piano/Piano";
import Ukulele from "./View/Products/Ukulele/Ukulele";
import ShoppingCart from "./View/ShoppingCart/ShoppingCart";
import NotFound from "./View/Not Found/NotFound";
import ProductDetail from "./View/Product Detail/ProductDetail";

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
