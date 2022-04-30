import React, { Component } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
class NewsItem extends Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      company:this.props.data.company || "Cat Cake SA"
  //   }
  // }
  render() {
    const {section,notice,description,image} = this.props.data
    return (
<section>
        <Card sx={{ width: 500, margin:3 }}>
          <CardMedia component="img" height="140" image={image}alt="cake"/>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {section}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Noticia:{notice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descripcion:{description}
          </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.props.remove}>Borrar</Button>
            <Button size="small">❤</Button>
          </CardActions>
        </Card>
        
      </section>
    )

  }
}

export default NewsItem;
