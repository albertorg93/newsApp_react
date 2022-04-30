import React, { Component } from "react";
import NewsItem from './NewsItem'
import dataCakes from './news.json'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cakes: dataCakes,  //[] de cakes de la "bbdd"
       lastCake:{}
    }
  }
  
  addNew = (event) =>{
     //const price = prompt("Introduce precio")
     //const name = prompt("introduce tipo de tarta")
     //alert(`has añadido:${name} ${price}€ `)
    event.preventDefault();
    const name = event.target.cake.value
    const price = event.target.price.value
    const image = event.target.image.value
  
    const newCake = {price, name, image};
    
    //añadir al estado lastCake el último Cake
    this.setState({lastCake: newCake})
  
    //añadir al estado cakes el nuevo cake
     this.setState({cakes:[...this.state.cakes,newCake]})
  
  }
  
  paintCakes= () => this.state.cakes.map((cake,i)=><NewsItem data={cake} key={i} remove={()=>this.removeCake(i)}/>)
  
  removeAllNews = () =>  this.setState({cakes:[]})
  
  resetNews = () =>  this.setState({cakes:dataCakes})
  
  removeCake = (i) => {
   const remainingCakes = this.state.cakes.filter((cake,j)=> i!==j)
  this.setState({cakes:remainingCakes})
  }

  render() {
    let {name,price} = this.state.lastCake;
    
    return <div>

    <h1>Add new notice</h1>
    <form onSubmit={this.addNew} className='form'>
      <label htmlFor="cake">Seccion:</label><br/>
      <input type="text" id="cake" name="cake"/><br/>     
      <label htmlFor="price">Noticia:</label><br/>
      <input type="text" id="price" name="price"/><br/>
      <label htmlFor="description">Descripcion:</label><br/>
      <input type="textarea" id="description" name="description"/><br/>
      <label htmlFor="image">Image:</label><br/>
      <input type="url" id="image" name="image"/><br/>
     
      <input type="submit" value="Send"/>
    </form>
    
    <div className='cake-list'>
    {this.paintCakes()}
    </div>
     
     <div className='buttons'>
     <button onClick={this.addNew}>Click and add New</button>
     <button onClick={this.removeAllNews}>Delete News</button>
     <button onClick={this.resetNews}>Reset default News</button>
    </div>
    {name&&price?
    <p>Last New Added: {name} {price}€</p>
     :""
    }
    
 </div>;
  }
}

export default Form;
