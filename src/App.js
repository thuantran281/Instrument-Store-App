import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blogs/Blog";
import Contact from "./Pages/Contact/Contact";
import News from "./Pages/News/News";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
