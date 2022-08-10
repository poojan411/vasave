import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

// import image from "../images/cardLogos/CreativeCardLogo.png";
import "../styles/cloud.css";

function Cloud(props) {
  const { title, description, imageUrl } = props;
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <p className="serviceTitleComponent">Cloud</p>
        </Grid>
      </Grid>
    </div>
  );
}
export default Cloud;
