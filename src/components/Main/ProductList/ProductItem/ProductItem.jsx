import React, { Component } from 'react'
import './ProductItem.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

export class ProductItem extends Component {
  //rconst
constructor(props) {
  super(props)

  this.state = {
     company:this.props.data.company || "Cat Cake SA"
  }
}

  render() {
    //destructuring
    const {name,price,image} = this.props.data
    return (
      <section>
        <Card sx={{ width: 500, margin:3 }}>
          <CardMedia component="img" height="140" image={image}alt="cake"/>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio:{price}€
          </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.props.remove}>Borrar</Button>
            <Button size="small">❤</Button>
          </CardActions>
        </Card>
        
      </section>
      // <div>
      //     <h4>Tarta de {name}</h4>
      //     <p>Precio: {price}</p>
      //     <p>Company: {this.state.company}</p>
      //     <img className="cake" src={image} alt="tarta" /><br/>
      //     <button onClick={this.props.remove}>Borrar</button>
      // </div>
    )
  }
}

export default ProductItem