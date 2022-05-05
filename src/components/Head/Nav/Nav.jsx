import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <div className="nav">
    <Link to="/" className="nav__element">Home</Link>
    <Link to="/form" className="nav__element">Create a notice</Link>
    {/* <Link to="/listnews" className="nav__element">List News</Link> */}
    <Link to="/list" className="nav__element">Lista News</Link>
    {/* <Link to="/card" className="nav__element">Notice Detail</Link> */}
    
  </div>;;
  }
}

export default Nav;
