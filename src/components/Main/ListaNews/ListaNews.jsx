import React, { Component } from 'react';
import axios from 'axios'
// import { Card } from '@mui/material';
import Card from './Card'

class ListaNews extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          value: "basketball",
          News: this.props.defaultList,
          allNews: []
        }
       
    }
    
    async componentDidMount(){
        const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.value}&api-key=${process.env.REACT_APP_API_KEY}`);
        const json = res.data;
        let arr = [];
        arr = json.response.docs
        const notices = arr.slice(0,5)
        this.setState({
          News: notices
      })
           const noticias = [...this.state.News,...this.props.data]
           this.setState({allNews:noticias})
    }


    handleSubmit = e => {
      e.preventDefault();
     // setValue(e.target.topic.value)  Modificando el estado de Value
      this.setState({
        value: e.target.topic.value
    })
    };
    
    addPoke = () =>{
    this.setState({News: this.state.notices})
    }

    removeNew = (i) =>{
      const remainingNews = this.state.allNews.filter((news,j)=>i!==j)
      console.log(remainingNews);
      this.setState({allNews:remainingNews})
    }


    render() {
  console.log(this.state.News,"esto son las news")
        return (
            
   <section>
            <h2 className='busqueda'>Sección de noticias</h2>
            {this.state.News.length!==0?
                     <div className='prueba'>
                     {this.state.allNews.map((post,i) =><Card data={post} key={i} remove={()=>this.removeNew(i)}/>
                     )}
                              </div>
                              :""
            }
          </section>
        );
    }
}

ListaNews.defaultProps = {
    defaultList: []
}

export default ListaNews;