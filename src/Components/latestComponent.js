
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


import "./Style/latest.css"
import pic1 from "../Assets/Images/pic1.png"
import pic2 from "../Assets/Images/pic2.png"
import pic3 from "../Assets/Images/pic3.png"
import pic4 from "../Assets/Images/pic4.png"
import pic5 from "../Assets/Images/pic5.png"
import pic6 from "../Assets/Images/pic6.png"
import pic7 from "../Assets/Images/pic7.png"
function Latest() {
    const Items =[
        {
            id:1,
            name:"SRS-XP500",
            desc:"Beyond basic.For a new generation of imagemakers.",
            pic:pic2,
        },
        {
            id:2,
            name:"α7 IV",
            desc:"Make more of your music",
            pic:pic1,
        },
        {
            id:1,
            name:"WH-1000XM5",
            desc:"YOUR WORLD. NOTHING ELSE.",
            pic:pic3,
        },
        {
            id:2,
            name:"OnePlus 10R 5G",
            desc:"Experience a new visual language.",
            pic:pic4,
        },
        {
            id:1,
            name:"Ipad",
            desc:"Lovable Drawable Magical ",
            pic:pic5,
        },
        {
            id:2,
            name:"LG",
            desc:"LG UQ80 55 (139cm) 4K UHD Smart TV | WebOS | Active HDR",
            pic:pic6,
        },
        {
            id:1,
            name:"Phone (1)",
            desc:"Less distractions. More soul. Just pure instinct, formed as a machine.",
            pic:pic7,
        },
        
    ]
    const LatestItems=({item})=>{
        let props = item;
        return(
            <Card sx={{ minWidth: 230 ,minHeight:400,maxHeight:400,borderRadius:0,margin:1}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  width="200"
                  image={props.pic}
                  alt={props.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {props.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {props.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
    }

  return (
    <div className='wrapper-latest'>
            {
                Items.map( (item,id) => {return <div key = {id} ><LatestItems item = {item}/> </div>})
            }
    </div>
  )
}

export default Latest