
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
const Banner = () => {
  return (
    <Box sx={{ width: '100%' , background:'rgb(5 63 120 / 90%)' , backgroundImage : "url('https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" ,backgroundBlendMode:'darken' ,backgroundAttachment:'fixed' , backgroundPosition:'center'}}>
        <Container>
        <Grid sx={{textAlign:'left',color:'#fff', padding:'80px 0px' , display:'flex' , alignItems: 'center'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
           <Typography sx={{margin:'20px 0px'}} variant='h2'>
              Find the best doctor near by you
           </Typography>
           <Typography sx={{fontSize : "16px"}} variant='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta debitis error, recusandae nulla nesciunt hic temporibus aliquam. Sunt, in.
           </Typography>
           <Button sx={{margin:'40px 0px' ,color:'#fff', border:'1px solid #fff'}} variant='outlined'>Get Apoinment</Button>
        </Grid>
        <Grid item xs={12} md={6}>
           <img style={{width:'100%', borderRadius:'10px'}} src="https://i.ibb.co/xgRtd3k/pexels-polina-tankilevitch-3873193.jpg" alt="" />
        </Grid>
      </Grid>
        </Container>
    </Box>
  );
};

export default Banner;