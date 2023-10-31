import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <>
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={scrollUp}
        >
          <BsFillArrowUpCircleFill style={{ color: "black" }} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
