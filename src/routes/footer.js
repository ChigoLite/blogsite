import React from 'react';
import { Typography, Container, Box,TextField, Button } from '@mui/material';
import{Link}from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-content">
        <Container>

          <Box mt='3' sx={{textAlign:'center'}}>
            <Typography variant='h3' gutterBottom>Suscribe to our newsletter.</Typography>
            <TextField id="standard-basic" variant="outlined" size='normal' color='success' margin="normal" focused />
          </Box>
          <Box  sx={{ textAlign: 'center' }}>
            
            <Button variant='contained'>Submit</Button>
          </Box>
          <Box mt='4' sx={{ textAlign: 'center' }}>
          <Typography sx={{color:'black',}} variant='div'>Nelson's Blog  <h4>&copy; nelsonLite</h4> </Typography>
            
          </Box>
        </Container>
</div>
      </div>
  );
}

export default Footer;
