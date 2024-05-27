import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
