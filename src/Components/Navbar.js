import React from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleGuitarMouseEnter = () => {
    setOpen(true);
  };

  const handleGuitarMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-danger-subtle" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-xl-auto mx-xxl-auto d-xl-flex align-items-xl-center">
              <Link
                to="/"
                className="nav_bar_font hover-underline-animation"
                style={{
                  fontSize: "23px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Home
              </Link>
              <div className="mx-xl-4"></div>
              <Link
                to="/about"
                className="nav_bar_font hover-underline-animation"
                style={{
                  fontSize: "23px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About
              </Link>
              <div className="mx-xl-4"></div>
              <Dropdown
                as={Nav.Item}
                show={open}
                onMouseEnter={handleGuitarMouseEnter}
                onMouseLeave={handleGuitarMouseLeave}
              >
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="nav_bar_font"
                  id="product-dropdown"
                  style={{ fontSize: "22px", color: "black" }}
                >
                  Products
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    eventKey={1}
                    className="nav_bar_font dropdown-fontSize"
                  >
                    Guitar
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey={2}
                    className="nav_bar_font dropdown-fontSize"
                  >
                    Organs
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey={3}
                    className="nav_bar_font dropdown-fontSize"
                  >
                    Piano
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey={4}
                    className="nav_bar_font dropdown-fontSize"
                  >
                    Ukulele
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey={5}
                    className="nav_bar_font dropdown-fontSize"
                  >
                    Drum
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="mx-xl-4"></div>
              <Link
                to="/blog"
                className="nav_bar_font hover-underline-animation"
                style={{
                  fontSize: "23px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Blog
              </Link>
              <div className="mx-xl-4"></div>
              <Link
                to="/contact"
                className="nav_bar_font hover-underline-animation"
                style={{
                  fontSize: "23px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Contact
              </Link>
              <div className="mx-xl-4"></div>
              <Link
                to="/news"
                className="nav_bar_font hover-underline-animation"
                style={{
                  fontSize: "23px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                News
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
