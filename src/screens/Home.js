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
              <Typography>Features</Typography>
            </Grid>
            <Grid item lg={8} style={{ marginTop: "20px" }}>
              <Typography>We are different because...</Typography>
            </Grid>
            <Grid item lg={8} style={{ marginTop: "20px" }}>
              <Typography variant="h6" textAlign="center">
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
      {/* <Grid
        item
        lg={8}
        style={{
          marginTop: "200px",
          marginBottom: "30px",
          backgroundColor: "red",
        }}
      >
        <Grid container justifyContent="space-between" flexDirection="row">
          <Grid item lg={6}>
            <Typography>About us</Typography>

            <Typography>Best Digital Agency in the Town </Typography>
            <Typography>Scince 2001</Typography>
            <Typography>
              Pleasure rationally encounter consequences that are extremely
              painful. Nor again is there anyone who loves or pursues or desires
              to obtain
            </Typography>
            <Typography>
              Pleasure rationally encounter consequences that are extremely
              painful. Nor again is there
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <div
              className="backgroungImg"
              style={{
                backgroundImage: `url(${require("../images/shape2.png")})`,
                height: "500px",
                width: " 600px",
              }}
            ></div>
          </Grid>
        </Grid>
      </Grid> */}
      <Footer />
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
export default Home;
