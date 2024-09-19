import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Ensure you have a Header.css for specific styling

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Livestock Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/animals">Animals</Nav.Link>
          <Nav.Link href="/health">Health</Nav.Link>
          <Nav.Link href="/breeding">Breeding</Nav.Link>
          <Nav.Link href="/productivity">Productivity</Nav.Link>
          <Nav.Link href="/feed">Feed</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
