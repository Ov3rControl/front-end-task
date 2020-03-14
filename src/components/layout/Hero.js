import React from 'react';
import { Jumbotron } from 'react-bootstrap';
const Hero = () => {
  return (
    <Jumbotron fluid style={divStyle}>
      <div style={mainContainer}>
        <h1 style={mainCaption}>RISEUP SUMMIT 2020</h1>
        <h1 style={hashtagCaption}>#JOURNEYTOGROWTH</h1>
      </div>
    </Jumbotron>
  );
};
const divStyle = {
  height: 800,
  backgroundImage: `url('https://riseupsummit.com/static/media/HomepageHeader19blue.414fe687.jpg')`
};
const mainCaption = {
  color: 'white',
  fontSize: 50,
  fontWeight: 800
};
const hashtagCaption = {
  color: 'white',
  fontSize: 30,
  fontWeight: 800
};
const mainContainer = {
  margin: 30
};
export default Hero;
