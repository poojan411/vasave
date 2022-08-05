import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import image from "../images/cardLogos/CreativeCardLogo.png";
import "../styles/featurecard.css";

function FeatureCard(props) {
  const { title, description, imageUrl } = props;
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        backgroundColor: "#F7F7F7",
        padding: "10px",
        paddingTop: "40px",
        width: "100%",
      }}
      className="cardContent"
    >
      <div className="cardAction">
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
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
            {description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
export default FeatureCard;
