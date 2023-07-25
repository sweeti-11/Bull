import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


function HeaderNav() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        className="navbg"
        expand="lg"
        sticky="top"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="logo">
            Bulleye
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white text-black"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" main-nav">
              <Nav.Link as={Link} to={"/"} onClick={handleNavItemClick}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about-us"} onClick={handleNavItemClick}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/services"} onClick={handleNavItemClick}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to={"/blog"} onClick={handleNavItemClick}>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to={"/commodity-analysis"} onClick={handleNavItemClick}>
              Commodity Market
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/contact-us"}
                onClick={handleNavItemClick}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav.Link
              className="mainmenu-area"
              as={Link}
              to={"/mobile-verification"}
              onClick={handleNavItemClick}
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              className="mainmenu-area"
              as={Link}
              to={"/sign-in"}
              onClick={handleNavItemClick}
            >
              Sign In
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
