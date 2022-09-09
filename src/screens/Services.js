import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import waveone from "../images/wave.svg";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";

function Services(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <TitleCard title="Service" screen="services" />
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
      <Grid container justifyContent="center">
        <Grid item lg={8}>
          <ServicesCard />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default Services;
