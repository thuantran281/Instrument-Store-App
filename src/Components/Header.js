import React from "react";
import Image from "react-bootstrap/Image";
import guitarIcon from "../Assets/Images/guitar-logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center">
        <Col className="text-center guitar-logo">
          <Link to="/">
            <Image
              className="guitar-logo"
              src={guitarIcon}
              alt="guitar"
              fluid
            />
          </Link>
        </Col>
        <Col xl="auto" md="auto" sm="auto">
          <FaCartShopping className="icon" />
          <BsSearch className="icon" />
        </Col>
      </Row>
      <Row>
        <Col
          className="text-center brand_name"
          style={{ fontSize: "38px", marginLeft: "10px" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>Instrumental Store</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;