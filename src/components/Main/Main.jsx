import React, { Component } from 'react'
import Home from './Home'
import Form from './Form'
import Card from './ListaNews/Card'
// import ListNews from './ListNews'
import ListaNews from './ListaNews'
import { Route,Routes } from 'react-router-dom'


export class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       news: []
    }
  }
     createNew (noticia) {
       this.setState({news:[...this.state.news,noticia]})
     }
   


  render() {
    return (
      <main className='menup'>
          <h1>Breaking News!!</h1>
          <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Form crear={(noticia)=>this.createNew(noticia)}/>} path='/form'/>
          {/* <Route element={<ListNews/>} path='/listnews'/> */}
          <Route element={<ListaNews data={this.state.news}/>} path='/list'/>
          <Route element={<Card/>} path='/card'/>
          </Routes>
          
      </main>
    )
  }
}

export default Main