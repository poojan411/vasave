import React from 'react';


import { Card, CardContent,Grid, CardHeader, Divider, Typography } from '@mui/material';
import Header from '../components/Header';

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

const AboutUs = () => (
    <Grid container>

        <Header headerData={headerOptions} />
         <div style={{ marginTop: "100px"}}>
            <Grid container spacing={2}>
                <Grid item lg={6}>
                <Typography  variant="h2">
            About Us
        </Typography>
                </Grid>
                <Grid item lg={6}>
                <Typography variant="body2" style={{ padding: 20}}>
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
        </Typography>
</Grid>
            </Grid>
        </div>
    {/* <Card title="About Us">
        <Typography  variant="h2">
            About Us
        </Typography>
        <Divider />
        <Typography variant="body2" style={{ padding: 20}}>
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
        </Typography>
    </Card> */}
    </Grid>
);

export default AboutUs;
