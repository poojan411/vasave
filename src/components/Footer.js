import React, { useState } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ImageListItem from "@mui/material/ImageListItem";

import "../styles/footer.css";
import termsCondition from "../config/policyFiles/terms-condition.pdf";
import privacyPolicy from "../config/policyFiles/privacy-policy.pdf";
import cookiesPolicy from "../config/policyFiles/cookies-policy.pdf";
// import fbSvg from "../images/SocialMediaSvg/Fb.svg";
// import instaSvg from "../images/SocialMediaSvg/Instagram.svg";
// import linkedInSvg from "../images/SocialMediaSvg/Linkdin.svg";
// import TwitterSvg from "../images/SocialMediaSvg/Twitter.svg";
// import WhatsppSvg from "../images/SocialMediaSvg/Whatsapp.svg";

const vbsLogo = "../images/vbs_logo.png";

function Footer(props) {
  const { sections, title, headerData } = props;
  const currentYear = new Date().getFullYear();
  //   console.log("currentYear =========>", currentYear);
  const quickLinksArray = [
    { id: 1, title: "About Vasave business", path: "/aboutus" },
    { id: 2, title: "What we stand for", path: "/whatWeStandFor" },
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
              backgroundImage: `url(${require("../images/test/footer_NewVariant2.png")})`,
            }}
          >
            <Grid container justifyContent="center" className="footerContetdiv">
              <Grid item xl={8.8} lg={10} md={12} spacing={1}>
                <Grid container>
                  <Grid
                    item
                    lg={3}
                    md={10}
                    justifyContent="center"
                    className="FooterLogoDiv"
                  >
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
                  <Grid item lg={3} md={4}>
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
                  <Grid item lg={3} md={4}>
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
                  <Grid item lg={3} md={4}>
                    <Typography variant="h6" className="footerTitle">
                      Contact Info
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={12} md={12}>
                <Grid container justifyContent="center">
                  <Grid
                    item
                    lg={3}
                    md={4}
                    style={{
                      flexDirection: "coloumn",
                      justifyContent: "space-between",
                      display: "flex",
                    }}
                  >
                    <Grid item lg={3}>
                      <FontAwesomeIcon
                        className="iconStyle"
                        icon={faFacebook}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <FontAwesomeIcon className="iconStyle" icon={faTwitter} />
                    </Grid>
                    <Grid item lg={3}>
                      <FontAwesomeIcon
                        className="iconStyle"
                        icon={faInstagram}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <FontAwesomeIcon
                        className="iconStyle"
                        icon={faLinkedin}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <FontAwesomeIcon
                        className="iconStyle"
                        icon={faWhatsapp}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          style={{ backgroundColor: "#0E57A0" }}
          className="footerCopyrightDiv"
        >
          <Grid container justifyContent="center">
            <Grid item lg={5} md={10}>
              <p className="footerText">
                Copyright © {currentYear} Made with<span> ❤️ </span> By Vasave,
                All Rights Reserved
              </p>
            </Grid>
            <Grid item lg={5} md={10}>
              <Grid container className="policiesDiv">
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
