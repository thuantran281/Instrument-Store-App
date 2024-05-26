import React from "react";
import Layouts from "../../Layouts";
import Data from "../../../data/Data";
import { Link } from "react-router-dom";

const Ukulele = () => {
  const ukuleleProduct = Data.instruments.find(
    (item) => item.category === "Ukulele"
  ).products;

  return (
    <>
      <Layouts>
        <div className="container">
          <h2 className="text-center my-xl-3">Organ Products</h2>
          <div className="d-flex flex-wrap justify-content-around">
            {ukuleleProduct.map((item) => (
              <Link
                to={`/products/ukulele/${item.id}`}
                key={item.id}
                className="text-decoration-none"
              >
                <div className="card" style={{ width: "17rem" }}>
                  <div className="card-body">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top w-100"
                    />
                    <div className="card-text">
                      <h4 className="my-xl-2">{item.name}</h4>
                      <p>{item.brand}</p>
                      <p>{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Ukulele;
