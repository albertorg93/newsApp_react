import React, { Component } from 'react'
import Home from './Home'
import Form from './Form'
import Card from './Card'
import ListNews from './ListNews'
import { Route,Routes } from 'react-router-dom'


export class Main extends Component {
  render() {
    return (
      <main className='menup'>
          <h1>Breaking News!!</h1>
          <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Form/>} path='/form'/>
          <Route element={<ListNews/>} path='/listnews'/>
          <Route element={<Card/>} path='/card'/>
          </Routes>
          
      </main>
    )
  }
}

export default Main