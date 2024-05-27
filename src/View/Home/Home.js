import React from "react";
import Carousels from "../../Components/Carousels";
import ScrollToTop from "../../Components/ScrollToTop";
import "react-multi-carousel/lib/styles.css";
import Layouts from "../Layouts";
import InstrumentProps from "./InstrumentProps";
import ProductCarousel from "./ProductCarousel";

const Home = () => {
  return (
    <>
      <Layouts>
        <Carousels />
        <div className="my-3 my-sm-3 my-md-3 my-lg-4 my-xl-4"></div>
        <h1 className="product-title">Products</h1>
        {Object.entries(InstrumentProps.slideUrlsMap).map(
          ([category, { slideUrls, icon }]) => (
            <ProductCarousel
              key={category}
              title={category}
              slideUrls={slideUrls}
              icon={icon}
              linkTo={`/products/${category.toLowerCase()}`}
            />
          )
        )}
        <ScrollToTop />
      </Layouts>
    </>
  );
};

export default Home;
