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

    event.preventDefault();
    const section = event.target.section.value
    const notice = event.target.notice.value
    const description = event.target.description.value
    const image = event.target.image.value
  
    const newCake = {notice, section,description, image};
    
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
    let {section,notice} = this.state.lastCake;
    
    return <div>

    <h1>Add new notice</h1>
    <form onSubmit={this.addNew} className='form'>
      <label htmlFor="section">Section:</label><br/>
      <input type="text" id="section" name="section"/><br/>     
      <label htmlFor="notice">Noticia:</label><br/>
      <input type="text" id="notice" name="notice"/><br/>
      <label htmlFor="description">Descripcion:</label><br/>
      <textarea  id="description" name="description"/><br/>
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
    {section&&notice?
    <p>Last New Added: {section} {notice}€</p>
     :""
    }
    
 </div>;
  }
}

export default Form;
