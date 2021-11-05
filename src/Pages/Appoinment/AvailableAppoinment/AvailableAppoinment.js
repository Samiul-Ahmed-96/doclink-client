import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import SingleAvailable from '../SingleAvailable/SingleAvailable';
const availableItem = [
  {
    "id": "1",
    "name": "Teeth Orthodontics",
    "time": "8:00 AM - 9.00 AM",
    "space": 10
  },
  {
    "id": "2",
    "name": "Cosmetic Dentistry",
    "time": "10:00 AM - 11.30 AM",
    "space": 15
  },
  {
    "id": "3",
    "name": "Teeth Cleaning",
    "time": "5:00 PM - 6.30 PM",
    "space": 12
  },
  {
    "id": "4",
    "name": "Cavity Protection",
    "time": "7:00 AM - 8.30 AM",
    "space": 20
  },
  {
    "id": "5",
    "name": "Orthopedic",
    "time": "10:00 AM - 12.30 AM",
    "space": 10
  },
  {
    "id": "6",
    "name": "Neurology",
    "time": "12:00 PM - 2.30 PM",
    "space": 13
  }
]
const AvailableAppoinment = ({date}) => {

    return (
       <Container>
          <Box>
            <Typography sx={{fontWeight:'600' , color:'#2c2c2c' , marginY:'30px'}} variant='h4'>
              Available Appoinment {date.toDateString()}
            </Typography>
          </Box>
          <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
              availableItem.map( singleAvailable => <SingleAvailable date={date} singleAvailable={singleAvailable}></SingleAvailable>)
            }
          </Grid>
          
       </Container>
    );
};

export default AvailableAppoinment;