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
          <h1 style={{color:'#5ca9fb', paddingBottom:'5px', textAlign:'center',fontSize:'20px'}}>Our Advantages & Capabilities</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h2 style={{ fontSize:'40px',textAlign:'center', marginBottom:'25px'}}>Why patients choose us</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='200px'  src={doctor} alt="Doctor" style={{paddingLeft:'150px'}}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='200px' src={bandage} alt="Bandage" style={{paddingLeft:'130px'}}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <h3 style={{color:'black',textAlign:'center', fontSize:'30px'}}>Surgery Center</h3><br></br>
          <p style={{textAlign:'center'}}>Our Center provides patients with a<br></br>
                                            convenient day surgery center. An<br></br>
                                         alternative to the hospital, our center is<br></br>
                                         easily accessible, equipped with comfortable<br></br>
                                         waiting rooms for family, and staffed with<br></br>
                                                experienced doctors and nurses.</p><br></br>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <h3 style={{color:'black', textAlign:'center',fontSize:'30px'}}>Physical Therapy</h3><br></br>
          <p style={{textAlign:'center'}}>Your recovery, fully integrated. Whether you<br></br>
                                      want to get back to the athletic field,<br></br>
                                      workplace or simply your daily routine, our<br></br>
                                      team of specialized therapists are<br></br>
                                      passionate about helping you reach your<br></br>
                                      goals.</p><br></br>
        </Grid>
        </Grid>
    </div>
  );
}
