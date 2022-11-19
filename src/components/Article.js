
import React,{useState} from 'react'
import { Card, CardHeader, CardMedia, CardActions, CardContent, Skeleton,Grid, Avatar, Typography, Container} from '@mui/material';
import {FaTh,FaShare,FaHeart,} from 'react-icons/fa'
import UsecustomHooks from './customHooks';
import{Link} from 'react-router-dom'


const Article = ({ url, author, title, source, description, urlToImage, content, publishedAt }) => {
  const { loading } = UsecustomHooks()
  const [like, setLike] = useState(false);

  const toogle = () => {
    setLike(!like)
  }
  return (
        
    <Container sx={{ alignItem: 'center', textAlign: 'center' }}>

      <Card sx={{ maxWidth: 345, mt: 5 }}>

         

        
        {
         loading ? <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" /> : 
          <CardMedia
          component="img"
          height="194"
          
          image={urlToImage}
          alt={url}
          />
        }

        <CardContent>

            <Typography variant="body2" color="text.secondary">
          
        {loading ?    <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />:title}....
        <Link to={`/single/${publishedAt}`}>Learn More.</Link>
        
        </Typography>
      </CardContent>
      <CardActions spacing={2}>
          <FaHeart onClick={toogle} className={`${like ? 'filled' : 'unfilled'}`} />
              
      </CardActions>
      
    </Card>

    </Container>

  );
}
export default Article;
