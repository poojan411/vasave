import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import waveone from "../images/wave.svg";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import "../styles/homestyles.css";
import creativeImage from "../images/cardLogos/CreativeCardLogo.png";
import ServicesCard from "../components/ServicesCard";

function Home(props) {
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
  const featuresArray = [
    {
      id: 1,
      title: "Creative idea",
      description:
        "Lizards are a widespread group of squamate reptiles with over 6000 species ranging across all continents except Antarctica",
      imagePath: creativeImage,
    },
    {
      id: 2,
      title: "Creative idea",
      description:
        "Lizards are a widespread group of squamate reptiles with over 6000 species ranging across all continents except Antarctica",
      imagePath: creativeImage,
    },
    {
      id: 3,
      title: "Creative idea",
      description:
        "Lizards are a widespread group of squamate reptiles with over 6000 species ranging across all continents except Antarctica",
      imagePath: creativeImage,
    },
  ];
  return (
    <div>
      <Header headerData={headerOptions} />
      <TitleCard screen="home" title="Vasave Business Solutions" />
      <Grid
        container
        justifyContent="center"
        style={{ padding: "30px", marginTop: "100px" }}
      >
        <Grid item lg={6}>
          {/* <Button className="buttonStyle" style={{ marginTop: 20 }}>
            Learn More
          </Button> */}
        </Grid>
      </Grid>
      <Grid>
        <div
          className="waveStringStyles"
          style={{
            backgroundImage: `url(${require("../images/waveStrings.png")})`,
          }}
        >
          <Grid container justifyContent="center">
            <Grid item lg={8} style={{ marginTop: "20px" }}>
              <Typography className="contentTitle1home">Features</Typography>
            </Grid>
            <Grid item lg={8} style={{ marginTop: "20px" }}>
              <Typography className="contentTitle2">
                We are <span style={{ color: "#0F5AA4" }}>different</span>{" "}
                because...
              </Typography>
            </Grid>
            <Grid item lg={8} style={{ marginTop: "20px" }}>
              <Typography
                className="contentTitle3"
                variant="h6"
                textAlign="center"
                style={{
                  marginBottom: "20px",
                }}
              >
                Vasave Business Solutions is one of the UK’s leading IT Business
                Solutions companies. We have been providing extensive services
                since 2012. Our aim is to expand and evolve, while maintaining
                exceptional service quality.
              </Typography>
            </Grid>
            {/* <==============features cards loop ==============>*/}
            <Grid item lg={8} style={{ marginTop: "40px" }}>
              <Grid container spacing={2}>
                {featuresArray &&
                  featuresArray.map((item, index) => {
                    return (
                      <Grid
                        item
                        lg={4}
                        style={{ marginTop: index === 1 ? "85px" : "0px" }}
                      >
                        <FeatureCard
                          title={item?.title}
                          description={item?.description}
                          imageUrl={item?.imagePath}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: "200px" }}>
        <Grid item lg={8} style={{ marginBottom: "20px" }}>
          <Typography className="contentTitle1home">Services</Typography>
        </Grid>
        <Grid item lg={8} style={{ marginTop: "20px" }}>
          <Typography className="contentTitle2">
            Check <span style={{ color: "#0F5AA4" }}>our</span> Services
          </Typography>
        </Grid>
        <Grid item lg={8} style={{ marginTop: "20px", marginBottom: "40px" }}>
          <Typography
            className="contentTitle3"
            variant="h6"
            textAlign="center"
            style={{
              marginBottom: "20px",
            }}
          >
            We offer a number of IT services and solutions, just as it states in
            the name! Have a look below on exactly what we can provide, you
            won’t be disappointed in our service…
          </Typography>
        </Grid>
        <Grid item lg={8}>
          <ServicesCard />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default Home;
