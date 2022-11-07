import React, { useEffect, useState } from 'react';
import { Grid, Box, AppBar, Toolbar, Typography, Button ,IconButton, Paper,Card} from '@mui/material'
import { FaBars } from 'react-icons/fa'
import axios from 'axios'
import Loading from './loading';
import Article from './Article';
import { styled } from '@mui/material/styles';
const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c94c6630bbce4993968f358584d864f0';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const req = async () => {
    try {
   const response=   await axios.get(url)
      setNews(response.data.articles)
      setLoading(false)
    } catch (error) {
      console.log(error);
      throw new Error('no post')
      setLoading(false)
    }

  }
  useEffect(() => {
    req()
  }, []);
  return (
    <>
        
          <Box sx={{ flexGrow: 1 }}>
      <AppBar color='secondary' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Punch Line.
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </Box>
      
       
      <Box mt='3'>
        <Typography variant='h4' gutterBottom sx={{ textAlign: 'center', textTransform: 'capitalize' }}>
          what's happening in bussiness
        </Typography>
        {loading && <Loading/>}
     <Grid  container rowSpacing={1} >

        {news.map((info,index) => {
          
          return (
      <Grid key={index}   xs={ 12}  md={6} xl={6}>
  
              
              
            <Article {...info} />
                    
 </Grid>

          )
        })}
        </Grid>
</Box>
      
    </>
  );
}

export default Home;
