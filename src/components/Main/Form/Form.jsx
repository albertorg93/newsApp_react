import React, { Component } from "react";
// import NewsItem from './NewsItem'
import defaultNews from './news.json'
import { Navigate } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       news: defaultNews,  //[] de cakes de la "bbdd"
       lastNew:{},
       redirect: false
    }
  }
  
  addNew = (event) =>{

    event.preventDefault();
    const section_name = event.target.section.value
    const abstract = event.target.notice.value
    const lead_paragraph = event.target.description.value
    // const image = event.target.image.value
  
    const newNotice = {section_name, abstract,lead_paragraph};
    
    //añadir al estado lastNew la ultima new
    this.setState({lastNew: newNotice})
  
    //añadir al estado news la nueva new
     this.setState({news:[...this.state.news,newNotice]})

     this.setState({redirect: true})
     
     this.props.crear(newNotice)
  }
  
  // paintNews= () => this.state.news.map((notice,i)=><NewsItem data={notice} key={i} remove={()=>this.removeNew(i)}/>)
  
  // removeAllNews = () =>  this.setState({news:[]})
  
  // resetNews = () =>  this.setState({news:defaultNews})
  
  removeNew = (i) => {
   const remainingNews= this.state.news.filter((cake,j)=> i!==j)
  this.setState({news:remainingNews})
  }

  render() {
    let {section,notice} = this.state.lastNew;
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to='/list'/>
    }

    return <div>

    <h1>Add a new notice</h1>
    <form onSubmit={this.addNew} className='formularioalta'>
      <label htmlFor="section">Section:</label><br/>
      <input type="text" id="section" name="section"/><br/>     
      <label htmlFor="notice">Noticia:</label><br/>
      <input type="text" id="notice" name="notice"/><br/>
      <label htmlFor="description">Descripcion:</label><br/>
      <textarea  id="description" name="description"/><br/>
      {/* <label htmlFor="image">Image:</label><br/>
      <input type="url" id="image" name="image"/><br/> */}
     
      <input type="submit" value="Create new"/>
    </form>
    
    {/* <div className='cake-list'>
    {this.paintNews()}
    </div> */}
     
     {/* <div className='buttons'>
     <button onClick={this.removeAllNews} className='borrarnews'>Delete News</button>
     <button onClick={this.resetNews} className='resetnews'>Reset default News</button>
    </div> */}
    {section&&notice?
    <p>Last New Added: {section} {notice}</p>
     :""
    }
    
 </div>;
  }
}

export default Form;
