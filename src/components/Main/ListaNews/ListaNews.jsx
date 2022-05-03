import React, { Component } from 'react';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

class ListaNews extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          value: "basketball",
          News: this.props.defaultList
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

    

 
    render() {

        return (
            
            <section>
            <h2 className='busqueda'>Sección de noticias</h2>
            {this.state.News.length!==0?
                     <div className='notices'>
                      {this.state.News.map(post => (
                         <div className='topics'>
                         <p key={uuidv4()}>
                        {post.abstract}
                         </p>
                        <a href={post.web_url} key={uuidv4()}>Link to notice</a>
                        <p key={uuidv4()}>Font:
                        {post.source}
                         </p>
                        </div>
                        
                            ))}
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