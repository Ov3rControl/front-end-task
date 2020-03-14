import React from 'react';
import { Navbar } from 'react-bootstrap';
const Header = () => {
  return (
    <header>
      <Navbar style={navbar} fixed="top" variant="dark">
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
};
const navbar = {
  background: 'rgba(0, 0, 0, 0.8)'
};
export default Header;
