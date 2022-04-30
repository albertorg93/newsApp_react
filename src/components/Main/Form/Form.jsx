import React, { Component } from "react";
import NewsItem from './NewsItem'
import defaultNews from './news.json'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       news: defaultNews,  //[] de cakes de la "bbdd"
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
     this.setState({news:[...this.state.news,newCake]})
  
  }
  
  paintNews= () => this.state.news.map((cake,i)=><NewsItem data={cake} key={i} remove={()=>this.removeNew(i)}/>)
  
  removeAllNews = () =>  this.setState({news:[]})
  
  resetNews = () =>  this.setState({news:defaultNews})
  
  removeNew = (i) => {
   const remainingNews= this.state.news.filter((cake,j)=> i!==j)
  this.setState({news:remainingNews})
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
    {this.paintNews()}
    </div>
     
     <div className='buttons'>
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
