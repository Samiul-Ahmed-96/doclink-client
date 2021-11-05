import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
const AppoinmentHeader = ({date,setDate}) => {
    
    return (
        <Box sx={{ width: '100%' , background:'rgb(5 63 120 / 90%)' , backgroundImage : "url('https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" ,backgroundBlendMode:'darken' ,backgroundAttachment:'fixed' , backgroundPosition:'center'}}>
        <Container>
        <Grid sx={{textAlign:'left', padding:'80px 0px' , display:'flex' , alignItems: 'center'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid  item xs={12} md={6}>
                <Box sx={{borderRadius:'10px'}}>
                <LocalizationProvider  dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    
                    displayStaticWrapperAs="desktop"
                    value={date}
                    onChange={(newValue) => {
                    setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src="https://i.ibb.co/xgRtd3k/pexels-polina-tankilevitch-3873193.jpg" alt="" />
            </Grid>
      </Grid>
        </Container>
    </Box>
    );
};

export default AppoinmentHeader;