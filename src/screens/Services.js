import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import waveone from "../images/wave.svg";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";

function Services(props) {
  const headerOptions = [
    {
      title: "home",
      detials: "homepage",
    },
    {
      title: "about",
      detials: "about",
    },
    {
      title: "services",
      detials: "services",
    },
    {
      title: "contact",
      detials: "contact",
    },
  ];
  return (
    <div>
      <Header headerData={headerOptions} />
      <TitleCard title="Service" />
      <Grid
        container
        justifyContent="center"
        style={{ padding: "30px", marginTop: "100px" }}
      >
        <Grid item lg={6}>
          <Typography variant="h6" textAlign="center">
            Vasave Business Solutions is one of the UK’s leading IT Business
            Solutions companies. We have been providing extensive services since
            2012. Our aim is to expand and evolve, while maintaining exceptional
            service quality.
          </Typography>
          <Button className="buttonStyle" style={{ marginTop: 20 }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2}>
        <Grid item lg={6}>
        <Typography variant="h3" component="h6">
        Vasave Business Solutions
      </Typography>
        </Grid>
        <Grid item lg={6}>
        <Typography variant="h5" component="h6">
        Book appointment
      </Typography>
        </Grid>
      </Grid>
   */}
      <Footer />
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
export default Services;
