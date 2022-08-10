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
  const backgroungImg = "../images/shape1.png";
  const currentYear = new Date().getFullYear();
  //   console.log("currentYear =========>", currentYear);

  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <div
            className="backgroungImgFooter"
            style={{
              backgroundImage: `url(${require("../images/footerWave.png")})`,
            }}
          >
            <Grid container justifyContent="center">
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
                    <Grid container justifyContent="center">
                      <Grid container lg={8}>
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
                  <Grid item lg={3}>
                    <Typography variant="h6" className="footerTitle">
                      Quick Link
                    </Typography>
                    <Typography variant="h8" className="footerSubOptions">
                      About Vasave business
                    </Typography>
                    <Typography variant="h8" className="footerSubOptions">
                      What we stand for
                    </Typography>
                    <Typography variant="h8" className="footerSubOptions">
                      Our services
                    </Typography>
                  </Grid>
                  <Grid item lg={3}>
                    <Typography variant="h6" className="footerTitle">
                      Services
                    </Typography>
                    <Typography variant="h8" className="footerSubOptions">
                      Cloud
                    </Typography>
                    <Typography variant="h8" className="footerSubOptions">
                      Consultancy
                    </Typography>
                    <Typography variant="h8" className="footerSubOptions">
                      Cyber Security
                    </Typography>
                    <Typography variant="h8" className="footerSubOptions">
                      Infrastructure
                    </Typography>
                  </Grid>
                  <Grid item lg={3}>
                    <Typography variant="h6" className="footerTitle">
                      Contact Info
                    </Typography>
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
    // <Grid container spacing={2}>
    //     <Grid item xs={7}>
    //         <div className="backgroungImg" style={{ backgroundImage: `url(${require("../images/shape1.png")})`}}>
    //             <Grid container alignContent='center' justifyContent='center'>

    //     <Grid container style={{ marginTop: '200px'}} spacing={2}>
    //         <Grid item lg={12} className="titleStyle" >
    //           <h2 className="titleStyle">
    //             {title}
    //           </h2>
    //         </Grid>
    //         <Grid item lg={12}>
    //         <Typography variant="h5" component="h6">
    //         Get started
    //     </Typography>
    //         </Grid>
    //   </Grid>
    //             </Grid>

    //         </div>
    //       {/* <img src={require('../images/shape1.png')}  style={{ width: "100%"}}/> */}

    //     </Grid>
    //     <Grid item xs={5}>
    //     <img src={require('../images/homepageImageOne.png')} alt="vasave business solution logo" style={ { width: "100%", marginTop: '100px'}}/>
    //     </Grid>

    //   </Grid>
  );
}

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Footer;
