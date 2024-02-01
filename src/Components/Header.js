import React from "react";
import guitarIcon from "../Assets/Images/guitar-logo.png";
import { Row, Col } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Row className="d-flex justify-content-between align-items-center">
        <Col className="text-center guitar-logo">
          <Link to="/">
            <img
              className="guitar-logo"
              src={guitarIcon}
              alt="guitar"
              fluid="true"
            />
          </Link>
        </Col>
        <Col
          className="mx-4 mx-sm-4 mx-md-4 mx-lg-4 mx-xl-4 my-xl-4"
          xs="auto"
          xl="auto"
          md="auto"
          sm="auto"
        >
          <Link
            to="/shopping-cart"
            style={{ textDecoration: "none", color: "black" }}
          >
            <FaCartShopping className="icon" />
          </Link>
          <BsSearch className="icon" />
        </Col>
      </Row>
      <Row>
        <Col
          className="text-center brand_name"
          style={{ fontSize: "38px", marginLeft: "10px" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Instrumental Store
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
