import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Typography,Button,Toolbar,IconButton,AppBar,Box ,Dialog,DialogContent,DialogTitle,DialogContentText,TextField,DialogActions,Backdrop,Alert} from '@mui/material';
const Header = () => {
   const [open, setOpen] = React.useState(false);
   const [drop, setDrop] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handledrop = () => {
    setOpen(false);
    setDrop(!drop);
  };
  const Closedrop = () => {
    setDrop(false);
  };
  useEffect(() => {
   setTimeout(() => {
    Closedrop()
   }, 3000);
  }, [drop]);
  return (
    <div>
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
            Daily Trend.
          </Typography>
          <Button onClick={handleClickOpen} sx={{textColor:'black'}} variant='contained' color="inherit"><span>Drop Feedback.</span></Button>
        </Toolbar>
      </AppBar>
      </Box>
        <Typography variant='h4' gutterBottom sx={{ textAlign: 'center', textTransform: 'capitalize', marginTop:2}}>
daily bussiness trend..we keep you update.
      </Typography>
      <div className="line"></div>
       <Dialog open={open} >
        <DialogTitle>FEED-US.</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Feedback Your Thought For Improvement.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Feedback"
            type="string"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handledrop}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={drop}
>
  <Alert variant="filled" severity="success">
  Thanks for your feedback.
</Alert>
</Backdrop>
    </div>
  );
}

export default Header;
