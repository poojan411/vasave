import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  console.log("title =========>", title);
  const servicesLeft = [
    {
      title: "Cloud",
      shortDescription: "Pleasure rationally service are anyone who pursues",
      image: "../images/servicesLogos/consultancyLogo.png",
    },
    {
      title: "Consultancy",
      shortDescription: "Pleasure rationally service are anyone who pursues",
      image: "../images/servicesLogos/consultancyLogo.png",
    },
  ];
  const servicesRight = [
    {
      title: "Cyber Security",
      shortDescription: "Pleasure rationally service are anyone who pursues",
      image: "../images/servicesLogos/consultancyLogo.png",
    },
    {
      title: "Infrastructure",
      shortDescription: "Pleasure rationally service are anyone who pursues",
      image: "../images/servicesLogos/consultancyLogo.png",
    },
  ];
  let navigate = useNavigate();

  const navigateServiceDetails = (service) => {
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
  };
  return (
    // <Grid cotainer justifyContent="center">
    //   <Grid item lg={8}>
    <Grid container spacing={2}>
      <Grid item lg={3.5} style={{ padding: "20px !important" }}>
        {!_.isEmpty(servicesLeft) &&
          servicesLeft.map((item, index) => {
            return (
              <SingleServiceCard
                onClickNavigate={() => {
                  navigateServiceDetails(item?.title);
                }}
                title={item?.title}
                shortDescription={item?.shortDescription}
                image={item?.image}
              />
            );
          })}
      </Grid>
      <Grid item lg={5} style={{ padding: "20px !important" }}>
        <img
          src={require("../images/servicesImage.png")}
          alt="vasave business services"
          style={{ width: "89%", marginTop: "38px", height: "384px" }}
        />
      </Grid>
      <Grid item lg={3.5} style={{ padding: "20px !important" }}>
        {!_.isEmpty(servicesRight) &&
          servicesRight.map((item, index) => {
            return (
              <SingleServiceCard
                onClickNavigate={() => {
                  navigateServiceDetails(item?.title);
                }}
                title={item?.title}
                shortDescription={item?.shortDescription}
                image={item?.image}
              />
            );
          })}
      </Grid>
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
