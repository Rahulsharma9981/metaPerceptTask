import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar className=" container-fluid d-flex align-items-center justify-content-between">
        <div className="container">
          <h1 className="h3 m-2">Title</h1>
          <Nav className="d-flex align-items-center justify-content-between">
            <Nav.Link>
              <Link className="text-dark">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-dark">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-dark">Blog</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-dark">Contact</Link>
            </Nav.Link>
            <button className="btn btn-outline-primary">Button</button>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
