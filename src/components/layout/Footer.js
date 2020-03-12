import React from 'react';
import { Navbar } from 'react-bootstrap';
function Footer() {
  return (
    <footer>
      <div style={footerContainer}></div>
    </footer>
  );
}
const footerContainer = {
  padding: 100,
  backgroundColor: '#003c85'
};
export default Footer;
