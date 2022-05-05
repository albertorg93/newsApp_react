import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import {userContext} from '../../../context/userContext';

class Home extends Component {

  static contextType = userContext;


  constructor(props) {
    super(props)
  
    this.state = {
       user:"",
       redirect: false
    }
  }


 login = (event) =>{
   
  event.preventDefault();
  const user = event.target.user.value
 this.setState({user})
 //guardar en el contexto de user
 // const loginUser = this.context.login //leer la funcion login
 // loginUser(user) 
 this.context.login(user);
 this.setState({redirect: true})
}


  render() {
   
   const { redirect } = this.state;
  
   if(redirect) {
     return <Navigate to='/form'/>
   }


    return <div>
    <h1 className="contacto">Contacto</h1>
    <form onSubmit={this.login} className="formulariousuario">
          <label htmlFor="user">Nombre usuario:</label><br/>
          <input type="text" id="user" name="user" className="valor"/><br/>
          <input type="submit" value="Log in" className="submit"/>
        </form>
  </div>;;
  }
}

export default Home;
