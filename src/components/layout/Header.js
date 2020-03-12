import React from 'react';
import { Navbar } from 'react-bootstrap';
function Header() {
  return (
    <header>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="120"
            height="65"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar>
    </header>
  );
}

export default Header;
