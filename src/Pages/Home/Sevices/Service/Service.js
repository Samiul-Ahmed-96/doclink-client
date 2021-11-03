import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const Service = (props) => {
    const {name,img,description} = props.service;
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Box sx={{background : "#053f78" , textAlign : "left", marginTop:'20px', padding:"20px" , color:'#fff' ,borderRadius: 2}} className="service-details">
                <img style={{width:'50%' , background:"#fff" , padding:'10px',borderRadius:'50%'}} src={img} alt="" />
                <Typography sx={{fontSize : "22px" , margin:'20px 0px'}}  variant="h3"> 
                    {name}
                </Typography>
                <Typography sx={{fontSize : "16px" , margin:'20px 0px'}} variant="h6">
                    {description}
                </Typography>
                <Button sx={{color:'#fff' , border : '1px solid #fff'}} variant="outlined">Read More</Button>
            </Box>
        </Grid>
    );
};

export default Service;