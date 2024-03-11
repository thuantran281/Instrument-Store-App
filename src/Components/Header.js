import React from "react";
import guitarIcon from "../Assets/Images/guitar-logo.png";
import { BsSearch, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col text-center guitar-logo">
          <Link to="/">
            <img
              className="guitar-logo img-fluid"
              src={guitarIcon}
              alt="guitar"
            />
          </Link>
        </div>
        <div className="col-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto">
          <i className="icon">
            <BsSearch />
          </i>
          <Link to="/shopping-cart" className="text-decoration-none text-dark">
            <i className="icon">
              <BsCart />
            </i>
          </Link>
        </div>
      </div>
      <div className="row">
        <div
          className="col text-center brand_name"
          style={{ fontSize: "38px", marginLeft: "10px" }}
        >
          <Link to="/" className="text-decoration-none text-dark">
            Instrumental Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
