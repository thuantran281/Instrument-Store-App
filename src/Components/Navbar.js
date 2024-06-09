import React from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { useState } from "react";
import "../View/Home/Home.css";
import { Link } from "react-router-dom";

const products = [
  { to: "/products/guitar", label: "Guitar" },
  { to: "/products/organ", label: "Organ" },
  { to: "/products/piano", label: "Piano" },
  { to: "/products/organ", label: "Organ" },
  { to: "/products/drum", label: "Drum" },
];

const textStyles = {
  fontSize: "23px",
  color: "black",
};

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleGuitarMouseEnter = () => setOpen(true);
  const handleGuitarMouseLeave = () => setOpen(false);

  return (
    <>
      <Navbar expand="lg" className="bg-danger-subtle">
        <div className="d-xl-flex mx-xl-auto d-lg-flex mx-lg-auto mx-md-4 mx-sm-4 mx-3">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-xl-flex align-items-xl-center d-lg-flex align-items-lg-center my-2 my-sm-2 my-xl-0 my-lg-0">
              <Link
                to="/"
                className="nav_bar_font hover-underline-animation text-decoration-none mx-md-1 mx-sm-1 mx-1"
                style={textStyles}
              >
                Home
              </Link>
              <div className="my-1 my-sm-1 my-xl-0 mx-lg-4 mx-xl-4"></div>
              <Link
                to="/about"
                className="nav_bar_font hover-underline-animation text-decoration-none mx-md-1 mx-sm-1 mx-1"
                style={textStyles}
              >
                About
              </Link>
              <div className="my-xl-0 mx-lg-4 mx-xl-4"></div>
              <Dropdown
                as={Nav.Item}
                show={open}
                onMouseEnter={handleGuitarMouseEnter}
                onMouseLeave={handleGuitarMouseLeave}
              >
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="nav_bar_font mx-md-1 mx-sm-1 mx-1"
                  id="product-dropdown"
                  style={textStyles}
                >
                  Products
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {products.map((product, index) => (
                    <Link
                      to={product.to}
                      key={index}
                      className="nav_bar_font text-decoration-none dropdown-fontSize"
                    >
                      <Dropdown.Item as="div" eventKey={index + 1}>
                        {product.label}
                      </Dropdown.Item>
                    </Link>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <div className="my-xl-0 mx-lg-4 mx-xl-4"></div>
              <Link
                to="/blog"
                className="nav_bar_font hover-underline-animation text-decoration-none mx-md-1 mx-sm-1 mx-1"
                style={textStyles}
              >
                Blog
              </Link>
              <div className="my-sm-1 my-xl-0 mx-lg-4 mx-xl-4 my-1"></div>
              <Link
                to="/contact"
                className="nav_bar_font hover-underline-animation text-decoration-none mx-md-1 mx-sm-1 mx-1"
                style={textStyles}
              >
                Contact
              </Link>
              <div className="my-sm-1 my-xl-0 mx-lg-4 mx-xl-4 my-1"></div>
              <Link
                to="/news"
                className="nav_bar_font hover-underline-animation text-decoration-none mx-md-1 mx-sm-1 mx-1"
                style={textStyles}
              >
                News
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
