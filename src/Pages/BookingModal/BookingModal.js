import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

const BookingModal = ({open,handleClose,singleAvailable,date}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log('hitting submit')
    }
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {singleAvailable.name}
          </Typography>
          <form onSubmit={handleSubmit}>
          <TextField id="standard-basic" sx={{width:'100%', margin:'10px auto'}} disabled defaultValue={date.toDateString()} variant="standard" />
          <TextField id="standard-basic" sx={{width:'100%', margin:'10px auto'}}  label="Name"  variant="standard" />
          <TextField id="standard-basic" sx={{width:'100%', margin:'10px auto'}}  label="Email"  variant="standard" />
          <TextField id="standard-basic" sx={{width:'100%', margin:'10px auto'}}  label="Phone Number"  variant="standard" />
          <Button type="submit" sx={{display:'block'}} variant="contained">Submit</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;