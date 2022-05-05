import React, { Component } from "react";
// import { Button} from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
class Card extends Component {
  

  render() {
    const post = this.props.data
    console.log(post)
    return (
    <div className='allnews'>       
        <h2 className="parrafo1">{post.section_name}</h2>
        <h4 className="parrafo2">{post.abstract}</h4>
        <p>{post.lead_paragraph}</p>
        <Button variant="contained" onClick={this.props.remove} sx={{margin: "auto"}}>Remove</Button>
    </div>
    )
  }
}

export default Card;
