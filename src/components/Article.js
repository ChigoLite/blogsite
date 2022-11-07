
import React,{useState} from 'react'
import { Card, CardHeader, CardMedia, CardActions, CardContent, Collapse,Grid, Avatar, Typography, Container} from '@mui/material';
import {FaInfoCircle,FaTh,FaShare,FaHeart,FaMonero} from 'react-icons/fa'
import { red } from '@mui/material/colors';



const Article = ({ url, author, title, source, description, urlToImage, content, publishedAt}) => {
 

  return (
        
    <Container sx={{alignItem:'center',textAlign:'center'}}>

    <Card sx={{ maxWidth: 345,mt:5 }}>
      <CardHeader
      
      
      action={
         <FaTh/>
        }
        
        />

      <CardMedia
        component="img"
        height="194"
        image={urlToImage}
        alt={url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {title}
        </Typography>
      </CardContent>
      <CardActions spacing={2}>
          <FaHeart />
       
          <FaShare />
       
      </CardActions>
      
    </Card>
    </Container>

  );
}
export default Article;
