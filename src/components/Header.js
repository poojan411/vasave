import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { Link, Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
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
  const { sections, title, headerData } = props;
  console.log("headerData", headerData);

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
          <Grid item lg={10}>
            <Grid container justifyContent="space-between" flexDirection="row">
              <Grid item lg={4}>
                <ImageListItem>
                  <img
                    src={require("../images/vbs_logo.png")}
                    alt="vasave business solution logo"
                    style={{ height: 65, width: "100%" }}
                  />
                </ImageListItem>
              </Grid>
              <Grid item lg={6} alignSelf="center">
                <Grid container spacing={2} justifyContent="center">
                  {headerOptions &&
                    headerOptions.map((item, index) => {
                      console.log("headerOptions", item?.title);
                      return (
                        <Grid item lg={2}>
                          <Typography
                            key={index}
                            component="h2"
                            variant="h6"
                            color="green"
                            align="center"
                            onClick={() => {
                              console.log("selectedpage", item);
                              navigatePage(item);

                              // <Link to="/aboutus" />
                            }}
                            style={{
                              lineHeight: 2.3,
                              color: "#181c51",
                              fontSize: "20px",
                              textTransform: "capitalize",
                              backgroungColor: "green",
                              cursor: "pointer",
                            }}
                            noWrap
                            sx={{ flex: 1 }}
                          >
                            {item?.title}
                          </Typography>
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item lg={4}>
        <ImageListItem>
          <img src={require('../images/vbs_logo.png')} alt="vasave business solution logo" style={ {height:65, width: "100%"}}/>
        </ImageListItem>

        </Grid>
        <Grid item lg={6} alignSelf="center">
          
      <Grid container spacing={2} justifyContent="flex-end">
      {headerOptions && headerOptions.map((item, index) =>{
    console.log('headerOptions', item?.title);
          return (
            <Grid item lg={2} >
        

              <Typography
              key={index}
              component="h2"
              variant="h6"
              color="green"
              align="center"
              onClick={() => {
                console.log('selectedpage', item);
                navigatePage(item);
              
                // <Link to="/aboutus" />
              }}
              style={{
           
                lineHeight: 2.3,
                color: '#181c51',
                fontSize: '20px',
                textTransform: 'capitalize',
                backgroungColor: 'green',
                cursor:'pointer'
              }}
              noWrap
              sx={{ flex: 1 }}
            >
             {item?.title}
              
            </Typography>
              </Grid>
          )

        })}
        
      </Grid>
          </Grid> */}
        </Grid>
      </Toolbar>
    </div>
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

export default Header;
