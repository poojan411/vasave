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

function SubServiceCard(props) {
  const { sections, title, headerData, screen } = props;

  return (
    <Grid container>
      <Grid item></Grid>
    </Grid>
  );
}

export default SubServiceCard;
