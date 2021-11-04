import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

const HomeAppoinment = () => {
    return (
        <Box sx={{ width: '100%' , height:'535px' ,marginTop:'250px', background:'rgb(5 63 120 / 90%)' , backgroundImage : "url('https://images.pexels.com/photos/3985151/pexels-photo-3985151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" ,backgroundBlendMode:'darken' ,backgroundAttachment:'fixed' , backgroundPosition:'center right'}}>
        <Container>
        <Grid sx={{textAlign:'left',color:'#fff', padding:'80px 0px' , display:'flex' , alignItems: 'center'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid sx={{border:'1px solid #fff' ,borderRadius:'10px'}}item xs={12} md={6}>
            <Typography sx={{margin:'20px 0px'}} variant='h6'>
            Appoinment
            </Typography>
           <Typography sx={{margin:'20px 0px'}} variant='h2'>
              Make an apoinment today
           </Typography>
           <Typography sx={{fontSize : "16px"}} variant='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta debitis error, recusandae nulla nesciunt hic temporibus aliquam. Sunt, in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maiores?
           </Typography>
           <Button sx={{margin:'40px 0px' ,color:'#fff', border:'1px solid #fff'}} variant='outlined'>Get Apoinment</Button>
        </Grid>

        <Grid item xs={12} md={6}>
        <img style={{width:'100%', borderRadius:'10px' , marginTop:'-400px'}} src="https://i.ibb.co/grV5ys4/pexels-anna-shvets-4167542-removebg-preview.png" alt="" />
        </Grid>

      </Grid>
        </Container>
    </Box>
    );
};

export default HomeAppoinment;