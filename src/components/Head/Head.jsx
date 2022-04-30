import React, { Component } from "react";
import Nav from './Nav'
import logo from '../../assets/news.png'
import {userContext} from '../../context/userContext';

class Head extends Component {
  render() {
    return  <head className='header'>
    <img src={logo} alt='logo'></img>
   <Nav/>
   <div className='user'>
     <userContext.Consumer>
     {({user,logout}) => 
       user?
           <>
             <p>Hola, {user}</p>
             <button onClick={logout}>Logout</button>
           </>:<button>Login</button>
       }
   </userContext.Consumer>
   </div>
   </head>;
  }
}

export default Head;
