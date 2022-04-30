// import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter} from 'react-router-dom';
import './styles/styles.scss'
// import { userState, useState } from 'react';
import { useState } from 'react';
import {userContext} from './context/userContext';

function App() {
  
const [user, setUser] = useState("Alvaru"); //hook UseState

//login
const login = (name) =>{
   setUser(name);
}

//logout
const logout = () =>{
  setUser("");
}

const data = {
  user,
  login,
  logout
}
  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={data}>
      <Header/>
      <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

// 