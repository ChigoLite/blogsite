import React from 'react';
import UsecustomHooks from './customHooks';
import {useParams} from 'react-router-dom'
import { Typography, Container, Box,Paper,CardActionArea,CardMedia,Card,CardContent,CardActions,Button } from '@mui/material';

const SingleArticle = ({news}) => {
    const { id } = useParams()
    console.log(id);
   const singleArticle= news.filter((newsDetails)=>newsDetails.publishedAt===id)
   console.log(singleArticle);
  return (
      <div>
          {singleArticle.map((news,index) => {
              const { url, author, title, source, description, urlToImage, content, publishedAt } = news  
              return (
                  <Container key={index}>
                      <Box mt='2'>
                          <Paper elavation='6' sx={{textAlign:'center',margin:4}}>
                               <Card sx={{ textAlign:'center' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={urlToImage}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
{title}
                                          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
          {content}
                                          </Typography>
                                          
          <Typography variant="body1" color="text.secondary">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
</Paper>
                      </Box>

               </Container>
           )   
          })}
    </div>
  );
}

export default SingleArticle;
