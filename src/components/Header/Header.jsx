import React, { Component } from 'react'
import Nav from './Nav'
import logo from '../../assets/logocake.png'
import {userContext} from '../../context/userContext';
export class Header extends Component {
  render() {
    return (
      <header className='header'>
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
        </header>
    )
  }
}
export default Header