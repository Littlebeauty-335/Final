import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import appointment from '../Images/appointment.jpg';
import location from '../Images/location.jpg';
import payment from '../Images/payment.jpg';

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

export default function Request() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='150px' src={appointment} alt="Appointment"/>
         </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <h1>Request an appointment</h1><br></br>
        <p>Lorem ipsum dolor sit amet, doctus menandri<br></br> gloriatur nam ut. Vix eius minet. Adhuc sadipscing<br></br> ius ne, ornatus pertinacia sed an.blandit principes.<br></br> Ne alienum facilisis reprehendunt vim, eos alterum sententiae no.</p><br></br>
        <h2 style={{color:'#37c4d7'}}>Learn More</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <h1>Location</h1><br></br>
        <p>Lorem ipsum dolor sit amet, doctus menandri<br></br> gloriatur nam ut. Vix eius minet. Adhuc sadipscing<br></br> ius ne, ornatus pertinacia sed an.blandit principes.<br></br> Ne alienum facilisis reprehendunt vim, eos alterum sententiae no.</p><br></br>
        <h2 style={{color:'#37c4d7'}}>Learn More</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='150px' src={location} alt="Location"/>
         </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='150px' src={payment} alt="Payment"/>
         </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <h1 style={{marginLeft:'20px'}}>Payment information</h1><br></br>
        <p>Lorem ipsum dolor sit amet, doctus menandri<br></br> gloriatur nam ut. Vix eius minet. Adhuc sadipscing<br></br> ius ne, ornatus pertinacia sed an.blandit principes.<br></br> Ne alienum facilisis reprehendunt vim, eos alterum sententiae no.</p><br></br>
        <h2 style={{color:'#37c4d7'}}>Learn More</h2>
        </Grid>
        </Grid>
    </div>
  );
}
