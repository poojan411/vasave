import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from '../components/Header';
import Grid from '@mui/material/Grid';
import waveone from '../images/wave.svg';

function Home(props) {
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
<Grid container spacing={2}>
        <Grid item xs={12}>
        <img src={waveone} style={{ width: "100%"}}/>
        </Grid>
        {/* <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={8}>
        </Grid> */}
      </Grid>
  
      </div>
    );
}

export default Home;