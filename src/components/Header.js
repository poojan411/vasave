import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
// import { Link, Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from "@mui/material/Paper";

import { height } from "@mui/system";
import "../styles/header.css";

const vbsLogo = "../images/vbs_logo.png";

const headerOptions = [
  {
    title: "home",
    detials: "homepage",
    path: "/",
  },
  {
    title: "about",
    detials: "about",
    path: "/aboutus",
  },
  {
    title: "services",
    detials: "services",
    path: "/services",
  },
  {
    title: "contact",
    detials: "contact",
    path: "/contact",
  },
];

function Header(props) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [openDrawer, setOpenDrawer] = useState(false);

  console.log("openDrawer =======>", openDrawer);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const { sections, title, headerData } = props;
  console.log("windowSize========>", windowSize);

  const [headerColor, setHeaderColor] = useState("header");

  const listenScrollEvent = () => {
    window.scrollY > 30
      ? setHeaderColor("stickyHeader")
      : setHeaderColor("header");
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  console.log("headerColor", headerColor);
  let navigate = useNavigate();
  const navigatePage = (item) => {
    console.log("navigatePage", item?.path);
    navigate(item?.path);
  };
  return (
    <div
      className={headerColor}
      style={
        {
          // position:'fixed',
          //  width: '100%',
          //   marginTop: '20px',
          //    boxShadow: '0 4px 2px -2px gray'
        }
      }
    >
      <Toolbar
        style={{ padding: headerColor === "stickyHeader" ? "3px" : "10px" }}
        // sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Grid container justifyContent="center">
          <Grid item xl={10} lg={12} md={12} sm={12}>
            <Grid container justifyContent="space-between" flexDirection="row">
              <Grid item lg={4} md={4} sm={4}>
                <ImageListItem>
                  <img
                    src={require("../images/logos/Vasave_Logo-Blue.png")}
                    alt="vasave business solution logo"
                    style={{ height: 50, width: "100%" }}
                  />
                </ImageListItem>
              </Grid>
              {windowSize?.innerWidth <= 800 ? (
                <Grid
                  item
                  md={3}
                  justifyContent="center"
                  alignItems="center"
                  style={{ display: "flex" }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      console.log("open drawer");
                      setOpenDrawer(!openDrawer);
                    }}
                    color="blue"
                    style={{
                      paddingRight: "10px",
                      fontSize: "32px",
                      marginRight: "20px",
                    }}
                    icon={faGripLines}
                  />
                  <Paper elevation={3} />
                </Grid>
              ) : (
                <Grid item lg={6} md={8} sm={8} alignSelf="center">
                  <Grid container spacing={2} justifyContent="center">
                    {headerOptions &&
                      headerOptions.map((item, index) => {
                        console.log("headerOptions", item?.title);
                        return (
                          <Grid item lg={2} md={2.5} sm={3}>
                            <Typography
                              key={index}
                              component="h2"
                              variant="h6"
                              align="center"
                              onClick={() => {
                                console.log("selectedpage", item);
                                navigatePage(item);
                                // <Link to="/aboutus" />
                              }}
                              // style={{
                              //   lineHeight: 2.3,
                              //   color: "#181c51",
                              //   fontSize: "20px",
                              //   textTransform: "capitalize",
                              //   backgroungColor: "green",
                              //   cursor: "pointer",
                              // }}
                              noWrap
                              sx={{ flex: 1 }}
                              className="headerTitleStyle"
                            >
                              {item?.title}
                            </Typography>
                          </Grid>
                        );
                      })}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>

          <Drawer variant="persistent" anchor="left" open={openDrawer}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              flexDirection="column"
              style={{ width: "40%", paddingTop: "20px" }}
            >
              {headerOptions &&
                headerOptions.map((item, index) => {
                  console.log("headerOptions", item?.title);
                  return (
                    <Grid item>
                      <Typography
                        key={index}
                        component="h2"
                        variant="h6"
                        align="center"
                        onClick={() => {
                          console.log("selectedpage", item);
                          navigatePage(item);
                          setOpenDrawer(false);
                          // <Link to="/aboutus" />
                        }}
                        style={{
                          lineHeight: 2.3,
                          color: "#181c51",
                          fontSize: "20px",
                          textTransform: "capitalize",

                          cursor: "pointer",
                          padding: "20px",
                        }}
                        noWrap
                        sx={{ flex: 1 }}
                        className="headerTitleStyle"
                      >
                        {item?.title}
                      </Typography>
                    </Grid>
                  );
                })}
            </Grid>
          </Drawer>
        </Grid>
      </Toolbar>
    </div>
  );
}

export default Header;
