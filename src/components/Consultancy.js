import * as React from "react";
import _ from "lodash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import EcommerceImg from "../images/consultancy/consultancy_ecommerce.png";
import McommerceImg from "../images/consultancy/consultancy_mcommerce.jpg";
import RecruitmentImg from "../images/consultancy/consultancy_recruitment.jpg";
import TrainingImg from "../images/consultancy/consultancy_training.png";

// import image from "../images/cardLogos/CreativeCardLogo.png";
import "../styles/cloud.css";

function Consultancy(props) {
  const { title, description, imageUrl } = props;
  const subServices = [
    {
      title: "E-COMMERCE",
      description:
        "E-commerce is widely regarded as a highly advantageous form of doing business, as it offers several conveniences and time-saving methods. This, combined with the worlds rapidly rising user base, would eventually make it the preferred method of doing business.",
      imageUrl: EcommerceImg,
      contactUs: true,
    },
    {
      title: "M-COMMERCE",
      description:
        "M-Commerce is a term that refers to any commercial transaction that is performed electronically through a mobile phone using wireless technologies. Our M-Commerce Services will help the our clients in supporting their users experience.",
      imageUrl: McommerceImg,
      contactUs: true,
    },
    {
      title: "RECRUITMENT",
      description:
        "As an IT service and solution provider, we provide businesses with aid in recruitment: identifying, attracting, screening, shortlisting, and interviewing suitable candidates for a job at your organisation, whether it is for a permanent or temporary role.",
      imageUrl: RecruitmentImg,
      contactUs: true,
    },
    {
      title: "TRAINING",
      description:
        "Our service portfolio primarily caters to students, aspiring professionals, and working professionals (retail), educational institutions, corporate institutions, and government organizations (enterprises). We offer training services and career enhancement programmes to the retail consumer market, which are organised as short, part-time skills upgrade programmes and full-time, job-oriented programmes. Corporate training, seminars, staffing solutions, and product and equipment advisory services are among the business services we provide. We also offer global certification exam services for technology leaders such as Microsoft, IBM, Amazon, HP, Oracle, and others to students and corporate clients.",
      imageUrl: TrainingImg,
      contactUs: true,
    },
  ];
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <p className="serviceTitleComponent">Consultancy</p>
        </Grid>
        <Grid item lg={12}>
          <p className="serviceDescriptionTitle">
            There will become a time where a business needs outside-the-box
            advice: an outsiders perspective. Our consultancy services provide
            just that, and much more.
          </p>
          <p className="serviceDescriptionComponent">
            We offer expert advice quickly and efficiently to your business, as
            well as resources which can help your company really jump onto the
            bandwagon of future success.
          </p>
          <p className="serviceDescriptionComponent">
            Get in touch with our dedicated team in just a few clicks.
          </p>
        </Grid>
        <Grid item lg={12}>
          {_.isArray(subServices) &&
            !_.isEmpty(subServices) &&
            subServices.map((item, index) => {
              return (
                <Grid
                  contianer
                  spacing={2}
                  justifyContent="space-between"
                  flexDirection="row"
                  className="subServiceCard"
                >
                  <Grid item lg={7}>
                    <p className="subServiceTitle">{item?.title}</p>
                    <p className="serviceDescriptionComponent">
                      {item?.description}
                    </p>
                    {item?.learnMore ? (
                      <span className="buttonStyle"> Learn more </span>
                    ) : null}
                  </Grid>
                  <Grid
                    item
                    lg={4.5}
                    style={{ alignItems: "center", display: "flex" }}
                  >
                    <img
                      src={item?.imageUrl}
                      alt={index.toString()}
                      className="subServiceImage"
                    />
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}
export default Consultancy;
