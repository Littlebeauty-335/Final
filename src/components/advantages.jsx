import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import doctor from '../Images/doctor.jpg';
import bandage from '../Images/bandage.jpg';

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

export default function Advantages() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={3} xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h2 style={{color:'#37c4d7', paddingBottom:'5px'}}>Our Advantages & Capabilities</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h1 style={{color:'black', fontSize:'60px'}}>Why patients choose us</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='200px' src={doctor} alt="Doctor"/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='200px' src={bandage} alt="Bandage"/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <h2 style={{color:'black'}}>Surgery Center</h2><br></br>
          <p>Our Center provides patients with a<br></br>
                                      convenient day surgery center. An<br></br>
                                      alternative to the hospital, our center is<br></br>
                                      easily accessible, equipped with comfortable<br></br>
                                      waiting rooms for family, and staffed with<br></br>
                                      experienced doctors and nurses.</p><br></br>
          <h2 style={{color:'#37c4d7'}}>Learn More</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <h2 style={{color:'black'}}>Physical Therapy</h2><br></br>
          <p>Your recovery, fully integrated. Whether you<br></br>
                                      want to get back to the athletic field,<br></br>
                                      workplace or simply your daily routine, our<br></br>
                                      team of specialized therapists are<br></br>
                                      passionate about helping you reach your<br></br>
                                      goals.</p><br></br>
         <h2 style={{color:'#37c4d7'}}>Learn More</h2>
        </Grid>
        </Grid>
    </div>
  );
}
