import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from '../components/Header';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import waveone from '../images/wave.svg';
import TitleCard from '../components/TitleCard';

function Contact(props) {
  const headerOptions = [
    {
      title: 'home',
      detials: 'homepage'
  },
  {
    title: 'about',
    detials: 'about'
  },
  {
    title: 'services',
    detials: 'services'
  },
  {
    title: 'contact',
    detials: 'contact'
  }, ];
    return (
      <div>
<Header headerData={headerOptions} />
<TitleCard title="Contact"/>
<Grid container justifyContent="center">
    <Grid item lg={10}>
        <Grid container>
            <Grid item lg={8}>
                <Typography>
                    Get in touch
                </Typography>

            </Grid>
            <Grid item lg={4}>

            </Grid>
        </Grid>
    </Grid>
</Grid>


      </div>
    );
}

// {/* <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <img src={require('../images/shape1.png')}  style={{ width: "100%"}}/>
//           {/* svg syntax below */}
//         {/* <img src={waveone} style={{ width: "100%"}}/> */}
//         </Grid>
//         <Grid item xs={6}>
//         <img src={require('../images/homepageImageOne.png')} alt="vasave business solution logo" style={ { width: "100%"}}/>
//         </Grid>
       
//       </Grid> */}
export default Contact;