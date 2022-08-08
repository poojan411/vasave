import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

// import image from "../images/cardLogos/CreativeCardLogo.png";
import "../styles/singleServiceCard.css";

function SingleServiceCard(props) {
  const { title, shortDescription, image } = props;
  return (
    <Card
      //   sx={{ maxWidth: 345 }}
      style={{
        // backgroundColor: "#F7F7F7",
        padding: "10px",
        borderBottom: "1px solid grey",

        // paddingTop: "40px",
        width: "100%",
      }}
      //   className="cardContent"
    >
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            // className="cardLogo"

            //   style={{ height: "100px", width: "100px", padding: "20px" }}
          />
        </Grid>
        <Grid item lg={9}>
          <Typography className="cardTitle">{title}</Typography>
          <Typography className="contentTitle1">{shortDescription}</Typography>
        </Grid>
      </Grid>

      {/* <div className="cardAction">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          className="cardLogo"

          //   style={{ height: "100px", width: "100px", padding: "20px" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            // style={{ textAlign: "left" }}
            className="cardTitle"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "left", paddingBottom: "15px" }}
          >
            {shortDescription}
          </Typography>
        </CardContent>
      </div> */}
    </Card>
  );
}
export default SingleServiceCard;
