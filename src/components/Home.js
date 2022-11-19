import React, { useEffect, useState } from 'react';
import { Grid, Box, Paper,} from '@mui/material'
import { FaBars } from 'react-icons/fa'
import Loading from './loading';
import Article from './Article';
import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Home = ({ news }) => {
  return (
    <>
      <Box mt='3'>
     <Grid  container rowSpacing={1} >

        {news.map((info,index) => {
          
          return (
            <Grid key={index}   xs={ 12}  md={4} xl={4}>
  
              <Article {...info}  />
              
              
            
                    
 </Grid>

          )
        })}
        </Grid>
</Box>
      
    </>
  );
}

export default Home;
