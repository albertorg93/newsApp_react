import React, { Component } from "react";
import { Link } from "react-router-dom";

//import {userContext} from '../../../context/userContext';
//import Button from '@mui/material/Button';

class Nav extends Component {
  render() {
    return <div className="nav">
      <Link to="/" className="nav__element">Home</Link>
      <Link to="/listachefs" className="nav__element">Lista Chefs</Link>
      <Link to="/aboutme" className="nav__element">About me</Link>
      <Link to="/delivery" className="nav__element">Delivery</Link>
      <Link to="/topics" className="nav__element">Topics</Link>
      <Link to="/contact" className="nav__element">Contact</Link>
      
    </div>;
  }
}

export default Nav;