import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
// const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(process.env);
// console.log(API_KEY)
// import './Topics.css'
const ListNews = () => {
  const [value, setValue] = useState("pizza"); // Para guardar el dato a buscar
  const [posts, setPosts] = useState([]); // Para guardar los posts
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=KM4DZJETbYqSiZaQd0YhufZdGle622LY`);
        const json = res.data;
        console.log(json.response.docs)
        // Guarda en el array de posts el resultado. Procesa los datos
        // setPosts(json.response.map(c => c));
        setPosts(json.response.docs);
        console.log("holaaadmslkmklasdmkl")
        
      }catch(e){
        setPosts([]) // No pintes nada
      }
    }
    fetchData();
  }, [value]);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
  };
  return    <section>
              <h1>Búsqueda por seccion de noticias</h1>
              <form onSubmit={handleSubmit}>
                <input className='searcher' name="topic"/>
              </form>
              {posts.length!==0?
                       <div className='notices'>
                        {posts.map(post => (
                           <div className='topics'>
                           <p key={uuidv4()}>
                          {post.abstract}
                           </p>
                          <a href={post.web_url}>Link to notice</a>
                          <p key={uuidv4()}>Font:
                          {post.source}
                           </p>
                          </div>
                          
                              ))}
                                </div>
                                :""
              }
            </section>
};
export default ListNews;








