import React, { Component } from "react";

class NewsItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       company:this.props.data.company || "Cat Cake SA"
    }
  }
  render() {
    return   <div>
        {/* <h4>Tarta de {name}</h4>
        <p>Precio: {price}</p>
        <p>Company: {this.state.company}</p>
        <img className="cake" src={image} alt="tarta" /><br/>
        <button onClick={this.props.remove}>Borrar</button> */}
        <h1>holaaaaaaaaaa</h1>
     </div>;
  }
}

export default NewsItem;
