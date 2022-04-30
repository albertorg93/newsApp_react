import React, { Component } from "react";
import {userContext} from '../../../context/userContext';

class Contact extends Component {
   static contextType = userContext;


   constructor(props) {
     super(props)
   
     this.state = {
        user:""
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
}



  render() {
    return <div>
      <h1>Contacto</h1>
      <form onSubmit={this.login}>
            <label htmlFor="user">Nombre usuario:</label><br/>
            <input type="text" id="user" name="user"/><br/>
            <input type="submit" value="Enviar"/>
          </form>
          <p>Usuario introducido: {this.state.user?this.state.user:"--"}</p>
    </div>;
  }
}

export default Contact;
