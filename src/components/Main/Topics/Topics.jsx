import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Topics.css'
const Topics = () => {
  const [value, setValue] = useState("thebridge"); // Para guardar el dato a buscar
  const [posts, setPosts] = useState([]); // Para guardar los posts
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://www.reddit.com/r/${value}.json`);
        const json = res.data;
        // Guarda en el array de posts el resultado. Procesa los datos
        setPosts(json.data.children.map(c => c.data));
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
              <h1>Búsqueda por topic</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic"/>
              </form>
              {posts.length!==0?
                                <ul className='topics'>
                                  {posts.map(post => (
                                    <li key={post.id}>{post.title}</li>
                                  ))}
                                </ul>
                                :""
              }
            </section>
};
export default Topics;









