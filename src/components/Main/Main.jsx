import React, { Component } from 'react'
import ProductList from './ProductList'
import Chefs from './Chefs'
import About from './About'
import Contact from './Contact'
import Delivery from './Devivery'
import { Route,Routes } from 'react-router-dom'
import Topics from './Topics'

export class Main extends Component {
  render() {
    return (
      <main>
          <h1>Futura web - Exploding Cakes!!</h1>
          <p>Esto es el main</p>
          <Routes>
          <Route element={<ProductList/>} path='/'/>
          <Route element={<Chefs/>} path='/listachefs'/>
          <Route element={<About/>} path='/about'/>
          <Route element={<Delivery/>} path='/delivery'/>
          <Route element={<Topics/>} path='/topics'/>
          <Route element={<Contact/>} path='/contact'/>

          </Routes>
          
      </main>
    )
  }
}

export default Main