import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import BookingModal from '../../BookingModal/BookingModal';
const SingleAvailable = ({singleAvailable,date}) => {
    const {name,time,space} = singleAvailable ;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Grid item xs={12} md={4}>
                <Box sx={{background : "#053f78" , textAlign : "left", marginTop:'10px', padding:"20px" , color:'#fff' ,borderRadius: 2}}  >
                <Typography sx={{fontSize : "22px" , margin:'10px 0px'}} variant='h5'>{name}</Typography>
                <Typography sx={{fontSize : "22px" , margin:'10px 0px'}}  variant='h6'>{time}</Typography>
                <Typography sx={{fontSize : "22px" , margin:'10px 0px'}}  variant='p'>Available Seats: {space}</Typography>
                <Button sx={{color:'#fff' , border : '1px solid #fff', margin:'10px 0px'}}  variant='outlined' onClick={handleOpen}>Book Apoinment</Button>
                </Box>
                <BookingModal open={open} handleClose={handleClose} date={date} singleAvailable={singleAvailable}></BookingModal>
        </Grid>
    );
};

export default SingleAvailable;