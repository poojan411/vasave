import React, { useState } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import _ from "lodash";

// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ImageListItem from "@mui/material/ImageListItem";
import { height } from "@mui/system";
import SingleServiceCard from "./SingleServiceCard";
import "../styles/titleCard.css";

const vbsLogo = "../images/vbs_logo.png";

function ServicesCard(props) {
  const { sections, title, headerData, screen } = props;
  const backgroungImg = "../images/shape1.png";
  console.log("title =========>", title);
  const servicesLeft = [
    {
      title: "cloud",
      shortDescription: "Pleasure rationally service are anyone who pursues",
      image: "../images/servicesLogos/consultancyLogo.png",
    },
  ];

  return (
    // <Grid cotainer justifyContent="center">
    //   <Grid item lg={8}>
    <Grid container spacing={2}>
      <Grid item lg={3.5}>
        {!_.isEmpty(servicesLeft) &&
          servicesLeft.map((item, index) => {
            return (
              <SingleServiceCard
                title={item?.title}
                shortDescription={item?.shortDescription}
                image={item?.image}
              />
            );
          })}
      </Grid>
      <Grid item lg={5}>
        <img
          src={require("../images/servicesImage.png")}
          alt="vasave business services"
          style={{ width: "100%", marginTop: "100px" }}
        />
      </Grid>
      <Grid item lg={3.5}></Grid>
    </Grid>
    //   </Grid>
    // </Grid>
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

export default ServicesCard;