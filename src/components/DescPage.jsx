import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import handxray from '../Images/handxray.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Welcomingsection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid 
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={3} xs={12} sm={12} md={12} lg={12}
      >
        <Grid item xs={12} sm={12} md={6} >
            <h1 style={{color: '#5ca9fb', marginLeft:'80px' , fontSize:'20px',marginTop:'5x'}}>Welcome to Our Orthopedics Clinic</h1><br></br>
            <h3 style={{fontSize:'40px', marginLeft:'80px', color:'black', marginTop:'2px'}}>We offer specialized orthopedics to meet your needs</h3><br></br>
            <p style={{fontSize:'15px', paddingLeft:'80px', }}>From routine doctor visits to the most advanced procedures, we’re here for you. Our physicians specialize in orthopedic surgery and handle the diagnosis and treatment of injuries of the bones, muscles and ligaments in both adults and children.</p>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <img height='600px' src={handxray} alt="Handxray" paddingright='300px'/>
            </Grid>
            
        
      </Grid>
    </div>
  );
}

