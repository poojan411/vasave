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
  console.log("image=>", image);
  const imagePath = `require("${image}")`;
  return (
    <div
      //   sx={{ maxWidth: 345 }}
      style={{
        // backgroundColor: "#F7F7F7",
        padding: "10px",
        borderBottom: "1px solid #e8e8e8",

        // paddingTop: "40px",
        width: "100%",
        marginBottom: "40px",
      }}
      //   className="cardContent"
    >
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <img
            // src={imagePath}
            src={require("../images/servicesLogos/consultancyLogo.png")}
            alt="vasave business services"
            style={{ height: "80px", width: "80px", marginTop: "15px" }}
          />
          {/* <CardMedia
            component="img"
            height="100"
            image={image}
            alt="green iguana"
            // className="cardLogo"

            //   style={{ height: "100px", width: "100px", padding: "20px" }}
          /> */}
        </Grid>
        <Grid item lg={9} style={{ paddingLeft: "30px" }}>
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
    </div>
  );
}
export default SingleServiceCard;
