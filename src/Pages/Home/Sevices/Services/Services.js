import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Service from '../Service/Service';


const servicesItem = [
    {
      "id": "1",
      "name": "Dental Sugery",
      "img": "https://i.ibb.co/QrXtFQT/dental-care.png",
      "description": "Dental surgery is any of a number of medical procedures that involve artificially modifying dentition; in other words, surgery of the teeth, gums and jaw bones.",
      "price": "69",
      "rating": "4.5"
    },
    {
      "id": "2",
      "name": "Orthopaedic",
      "img": "https://i.ibb.co/fMPyNyS/orthopedics.png",
      "description": "Orthopaedic surgery or orthopaedics, is the branch of surgery concerned with conditions involving the musculoskeletal system. gums and jaw bones",
      "price": "85",
      "rating": "4.6"
    },
    {
      "id": "3",
      "name": "General Surgery",
      "img": "https://i.ibb.co/r0NjynR/plastic-surgery.png",
      "description": "General surgery is a surgical specialty that focuses on abdominal contents including the esophagus, stomach, small intestine, large intestine.",
      "price": "89",
      "rating": "4.7"
    },
    {
      "id": "4",
      "name": "Neurology",
      "img": "https://i.ibb.co/DtcgTFs/neurology-science.png",
      "description": "Neurology is a branch of medicine dealing with disorders of the nervous system. Neurology deals with the diagnosis.",
      "price": "75",
      "rating": "4.4"
    },
    {
      "id": "5",
      "name": "Dermatology",
      "img": "https://i.ibb.co/Ry510pX/magnifying-glass.png",
      "description": "Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects.",
      "price": "90",
      "rating": "4.8"
    },
    {
      "id": "6",
      "name": "Labrotory Testing",
      "img": "https://i.ibb.co/jRTfgBJ/laboratory.png",
      "description": "A medical procedure that involves testing a sample of blood, urine, or other substance from the body. We Provide best service",
      "price": "59",
      "rating": "4.9"
    },
    {
      "id": "7",
      "name": "Women's Care",
      "img": "https://i.ibb.co/cL35Trs/woman.png",
      "description": "Women's health refers to the branch of medicine that focuses on the treatment and diagnosis",
      "price": "49",
      "rating": "4.4"
    },
    {
      "id": "8",
      "name": "CT Scan Service",
      "img": "https://i.ibb.co/3MxMJgj/ct-scan.png",
      "description": "A computerized tomography (CT) scan combines a series of X-ray images taken from different angles around your body.",
      "price": "99",
      "rating": "4.8"
    }
  ] 

const Services = () => {
    return (
        <Container>
        <Box sx={{ width: '100%' , margin:"60px 0px" }}>
        <Box>
          <Typography sx={{color:'#053f78' ,fontWeight:'700'}} variant='h6' >Our Services</Typography>
          <Typography sx={{color:'#2c2c2c' ,fontWeight:'700', margin:'30px 0px'}} variant='h3' >Services We Provide</Typography>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            servicesItem.slice(0,6).map(service => <Service key={service.id} service={service}></Service>)
          }
        </Grid>
        </Box>
        </Container>
    );
};

export default Services;