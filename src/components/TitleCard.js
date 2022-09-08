import React, { useState } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ImageListItem from "@mui/material/ImageListItem";
import { height } from "@mui/system";
import "../styles/titleCard.css";

const vbsLogo = "../images/vbs_logo.png";

function TitleCard(props) {
  const { sections, title, headerData, screen } = props;
  const backgroungImg = "../images/shape1.png";
  console.log("title =========>", title);

  return (
    <div
      className={screen === "home" ? "mainBackgroundImage" : null}
      style={{
        // shape1 old variant
        backgroundImage:
          screen === "home"
            ? `url(${require("../images/test/homepage1.png")})`
            : "",
      }}
    >
      {screen === "home" ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div
              className="backgroungImg"
              // style={{
              //   // shape1 old variant
              //   backgroundImage: `url(${require("../images/shape1New.png")})`,
              // }}
            >
              <Grid container alignContent="center" justifyContent="center">
                <Grid
                  container
                  style={{ marginTop: "200px" }}
                  spacing={2}
                  justifyContent="center"
                >
                  {/* <Grid item md={12} lg={8} xl={7} className="titleStyle">
                    <h2 className="titleStyle">{title}</h2>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Grid item md={10} lg={7} xl={6}>
                      <Typography variant="h5" component="h6" color="#ffff">
                        Get started
                      </Typography>
                    </Grid>
                  </Grid> */}
                </Grid>
              </Grid>
            </div>
            {/* <img src={require('../images/shape1.png')}  style={{ width: "100%"}}/> */}
          </Grid>
          {/* <Grid item xs={5}>
            <img
              src={require("../images/Asset1.png")}
              alt="vasave business solution logo"
              style={{ width: "100%", marginTop: "100px" }}
            />
          </Grid> */}
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          style={{ backgroundColor: "#F0FFF4", paddingBottom: "40px" }}
        >
          <Grid item xs={7}>
            <div
              className="backgroungImg"
              // style={{
              //   backgroundImage: `url(${require("../images/shape1.png")})`,
              // }}
            >
              <Grid container alignContent="center" justifyContent="center">
                <Grid container style={{ marginTop: "200px" }} spacing={2}>
                  <Grid item lg={12} className="titleStyle">
                    <h2 className="titleStyle">{title}</h2>
                  </Grid>
                  <Grid item lg={12}>
                    <Typography variant="h5" component="h6">
                      Get started
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            {/* <img src={require('../images/shape1.png')}  style={{ width: "100%"}}/> */}
          </Grid>
          <Grid item xs={5}>
            <img
              src={require("../images/homepageImageOne.png")}
              alt="vasave business solution logo"
              style={{ width: "100%", marginTop: "100px" }}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default TitleCard;
