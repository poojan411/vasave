import React, { useState } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/footer.css";
import termsCondition from "../config/policyFiles/terms-condition.pdf";
import privacyPolicy from "../config/policyFiles/privacy-policy.pdf";
import cookiesPolicy from "../config/policyFiles/cookies-policy.pdf";

const vbsLogo = "../images/vbs_logo.png";

function Footer(props) {
  const { sections, title, headerData } = props;
  const currentYear = new Date().getFullYear();
  //   console.log("currentYear =========>", currentYear);
  const quickLinksArray = [
    { id: 1, title: "About Vasave business", path: "/aboutus" },
    { id: 2, title: "What we stand for", path: "/aboutus" },
    { id: 3, title: " Our services", path: "/services" },
  ];
  const servicesArray = [
    { id: 1, title: "Cloud", path: "/serviceDetails" },
    { id: 2, title: "Consultancy", path: "/serviceDetails" },
    { id: 3, title: "Cyber Security", path: "/serviceDetails" },
    { id: 4, title: "Infrastructure", path: "/serviceDetails" },
  ];
  let navigate = useNavigate();
  const navigatePage = (path) => {
    console.log("navigatePage========>", path);
    navigate(path);
  };

  const navigateServices = (service) => {
    const path = "/serviceDetails";
    let data = {};
    if (service === "Cloud") {
      data.service = service;
    } else if (service === "Consultancy") {
      data.service = service;
    } else if (service === "Cyber Security") {
      data.service = service;
    } else if (service === "Infrastructure") {
      data.service = service;
    }
    console.log("navigateServiceDetails", service);

    navigate(path, { state: data });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <div
            className="backgroungImgFooter"
            style={{
              backgroundImage: `url(${require("../images/FooterWaveNew.png")})`,
            }}
          >
            <Grid container justifyContent="center" className="footerContetdiv">
              <Grid item lg={8.8} spacing={1}>
                <Grid container>
                  <Grid item lg={3} justifyContent="center">
                    <ImageListItem>
                      <img
                        src={require("../images/vbs_logo.png")}
                        alt="vasave business solution logo"
                        style={{ height: 65, width: "100%" }}
                      />
                    </ImageListItem>
                    <Grid
                      container
                      style={{ width: "74%", display: "inline-block" }}
                      justifyContent="center"
                    >
                      <Typography variant="p" className="footerParaStyle">
                        Pleasure rationally encounter consequences that
                        extremely painful. Nor again is there
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item lg={3}>
                    <Typography variant="h6" className="footerTitle">
                      Quick Link
                    </Typography>
                    {_.isArray(quickLinksArray) &&
                      !_.isEmpty(quickLinksArray) &&
                      quickLinksArray.map((item, index) => {
                        console.log("navigatePage======item==>", item);
                        return (
                          <Typography
                            key={item?.id}
                            onClick={() => {
                              navigatePage(item?.path);
                            }}
                            variant="h8"
                            className="footerSubOptions"
                          >
                            {item?.title}
                          </Typography>
                        );
                      })}
                  </Grid>
                  <Grid item lg={3}>
                    <Typography variant="h6" className="footerTitle">
                      Services
                    </Typography>
                    {_.isArray(servicesArray) &&
                      !_.isEmpty(servicesArray) &&
                      servicesArray.map((item, index) => {
                        return (
                          <Typography
                            onClick={() => {
                              navigateServices(item?.title);
                            }}
                            variant="h8"
                            className="footerSubOptions"
                          >
                            {item?.title}
                          </Typography>
                        );
                      })}
                  </Grid>
                  <Grid item lg={3}>
                    <Typography variant="h6" className="footerTitle">
                      Contact Info
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={12}>
                <Grid container justifyContent="center">
                  <Grid
                    item
                    lg={3}
                    style={{
                      flexDirection: "coloumn",
                      justifyContent: "space-between",
                      display: "flex",
                    }}
                  >
                    <Grid item lg={3}>
                      <FacebookOutlinedIcon />
                    </Grid>
                    <Grid item lg={3}>
                      <TwitterIcon />
                    </Grid>
                    <Grid item lg={3}>
                      <TwitterIcon />
                    </Grid>
                    <Grid item lg={3}>
                      <WhatsappOutlinedIcon />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item lg={12} className="footerCopyrightDiv">
          <Grid container justifyContent="center">
            <Grid item lg={5}>
              <p className="footerText">
                Copyright © {currentYear} Made with<span> ❤️ </span> By Vasave,
                All Rights Reserved
              </p>
            </Grid>
            <Grid item lg={5}>
              <Grid container justifyContent="flex-start">
                <Grid item lg={4}>
                  <a
                    href={termsCondition}
                    without
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="footerText2">Terms & Conditions</p>
                  </a>
                </Grid>
                <Grid item lg={4}>
                  <a
                    href={privacyPolicy}
                    without
                    rel="noopener noreferrer"
                    target="_blank"
                    // style={{ textDecoration: "none !important" }}
                  >
                    <p className="footerText2">Privacy Policy</p>
                  </a>
                </Grid>
                <Grid item lg={4}>
                  <a
                    href={cookiesPolicy}
                    without
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p className="footerText2">Cookies Policy</p>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
