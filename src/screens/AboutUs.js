import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import waveone from "../images/wave.svg";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";
import AboutUSImg from "../images/about/about_vasave.jpg";
import WhyVasaveImg from "../images/about/about_why_vasave.jpg";
import AboutOurSolution from "../images/about/about_why_vasave.jpg";

function AboutUs(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutusData = [
    {
      title: "About Vasave",
      description:
        "As one of the UK’s leading IT Business Solution companies, we have been providing extensive IT services to clients all over since 2012.Therefore, our vision is to expand and evolve as a global IT Business Solution, all while maintaining exceptional quality and customer satisfaction in what we provide.",
      image: AboutUSImg,
      contactUs: true,
    },
    {
      title: "Why Vasave",
      description:
        "Here at Vasave, we value the quality of service, client orientation and support.This is why we spend a great deal of time and effort on constructing a clear view based on the customer’s needs. We enable maximum efficiency and productivity by providing functional and scalable solutions. We are proud of the service we provide because of our excellent track record of providing high-quality service that is appreciated by our clients. Vasave puts customer satisfaction first, which allows the development of long-term sustainable relationships with our clients.",
      image: WhyVasaveImg,
      contactUs: true,
    },
    {
      title: "About our solution",
      description:
        "As a full IT support provider, we assist small and medium businesses with cost-effective IT solutions, such as troubleshooting, support and expertise in software and hardware services.",
      image: AboutOurSolution,
      contactUs: true,
    },
  ];
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
      <TitleCard title="About Us" />
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
export default AboutUs;
