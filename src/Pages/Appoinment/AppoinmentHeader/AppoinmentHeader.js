import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import isWeekend from 'date-fns/isWeekend';
import React from 'react';
const AppoinmentHeader = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <Box sx={{ width: '100%' , background:'rgb(5 63 120 / 90%)' , backgroundImage : "url('https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" ,backgroundBlendMode:'darken' ,backgroundAttachment:'fixed' , backgroundPosition:'center'}}>
        <Container>
        <Grid sx={{textAlign:'left',color:'#2c2c2c', padding:'80px 0px' , display:'flex' , alignItems: 'center'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
           <img style={{width:'100%', borderRadius:'10px'}} src="https://i.ibb.co/xgRtd3k/pexels-polina-tankilevitch-3873193.jpg" alt="" />
        </Grid>
      </Grid>
        </Container>
    </Box>
    );
};

export default AppoinmentHeader;