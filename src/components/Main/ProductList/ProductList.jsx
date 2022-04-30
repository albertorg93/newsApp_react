import React, { Component } from 'react'
import ProductItem from './ProductItem'
import dataCakes from './cakes.json'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class ProductList extends Component {
constructor(props) {
  super(props)

  this.state = {
     cakes: dataCakes,  //[] de cakes de la "bbdd"
     lastCake:{}
  }
}

addCake = (event) =>{
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

paintCakes= () => this.state.cakes.map((cake,i)=><ProductItem data={cake} key={i} remove={()=>this.removeCake(i)}/>)

removeAllCakes = () =>  this.setState({cakes:[]})

resetCakes = () =>  this.setState({cakes:dataCakes})

removeCake = (i) => {
 const remainingCakes = this.state.cakes.filter((cake,j)=> i!==j)
this.setState({cakes:remainingCakes})
}

  render() {
    //let cakes = this.state.cakes;
    let {name,price} = this.state.lastCake;
    return (
      <div>

          <h1>Añadir nuevo cake</h1>
          <form onSubmit={this.addCake} className='form'>
            {/* <label htmlFor="cake">Nombre tarta:</label><br/> este es el código como estaba al principio, sin los estilos
            <input type="text" id="cake" name="cake"/><br/>      de material UI
            <label htmlFor="price">Precio:</label><br/>
            <input type="text" id="price" name="price"/><br/>
            <label htmlFor="image">URL imagen:</label><br/>
            <input type="url" id="image" name="image"/><br/> */}
            <TextField id="outlined-basic" label="Nombre tarta" variant="filled" name='cake'/>
            <TextField id="outlined-basic" label="Precio" variant="filled" name='price'/>
            <TextField id="outlined-basic" label="URL imagen" variant="filled" name='image'/>
            <Button variant="contained" type="submit" className="Button" sx={{margin:1}}>Añadir tarta</Button>
            {/* <input type="submit" value="Enviar"/> */}
          </form>
          
         <div className='cake-list'>
          {this.paintCakes()}
          </div>
          {/* <button onClick={this.addCake}>Clicka y añade tarta</button>
          <button onClick={this.removeAllCakes}>Borra las tartas</button>
          <button onClick={this.resetCakes}>Recarga tartas</button> */}
       <div className='buttons'>
          <Button variant="contained" type="submit" onClick={this.addCake} sx={{margin: 1}}>Clicka y añade tarta</Button>
          <Button variant="contained" type="submit" onClick={this.removeAllCakes} sx={{margin: 1}}>Borra las tartas</Button>
          <Button variant="contained" type="submit" onClick={this.resetCakes} sx={{margin: 1}}>Recarga tartas</Button>
          </div>
          {name&&price?
          <p>Última tarta añadida: {name} {price}€</p>
           :""
          }
          
      </div>
    )
  }
}

export default ProductList