import * as React from "react";
import _ from "lodash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import CyberEssentials from "../images/cyberSecurity/cyber-essentials.jpg";
import CyberEssentialsPlus from "../images/cyberSecurity/cyber_essential_plus.jpg";
import CyberEssentialsCertificate from "../images/cyberSecurity/cyber_essential_certificate.jpg";
import IasmeCertificate from "../images/cyberSecurity/cyber_iasme_Certificate.jpg";

// import image from "../images/cardLogos/CreativeCardLogo.png";
import "../styles/cloud.css";

function CyberSecurity(props) {
  const { title, description, imageUrl } = props;
  const certificationLevel = [
    {
      title: "WHAT IS CYBER ESSENTIALS?",
      description:
        "Cyber Essentials is an easy but powerful, Government-backed scheme that will help you defend your organisation, whatever its capacity, against different types of the most common cyber attacks that can potentially harm your data. Cyber attacks vary in their shapes and sizes. Still, the vast majority are fundamental, carried out by relatively unskilled individuals, and our guidance is designed to prevent these attacks from even touching your devices.",
      imageUrl: CyberEssentials,
    },
    {
      title: "WHAT IS CYBER ESSENTIALS PLUS?",
      description:
        "Cyber Essentials Plus involves an audit of your system by one of the trained assessors. They are involved to confirm that all controls that have been declared in Cyber Essentials are implemented within the organisations network. This is done by undertaking and completing Cyber Essentials Plus,it is your choice whether to declare publicly to your supply chain and customers that your organisation has been proven to meet Cyber Essentials baseline standards which enables you to interact with clients, business partners and staff confidently and securely.",
      imageUrl: CyberEssentialsPlus,
    },
  ];

  const ourCertifications = [
    {
      title: "CYBER ESSENTIALS",
      imageUrl: CyberEssentialsCertificate,
      openPdf: true,
    },
    {
      title: "IASME GOVERNANCE",
      imageUrl: IasmeCertificate,
      openPdf: true,
    },
  ];

  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <p className="serviceTitleComponent">WHAT IS CYBER ESSENTIALS?</p>
        </Grid>
        <Grid item lg={12}>
          <p className="serviceDescriptionTitle">
            Cyber Essentials is an easy but powerful, Government-backed scheme
            that will help you defend your organisation, whatever its capacity,
            against different types of the most common cyber attacks that can
            potentially harm your data.
          </p>
          <p className="serviceDescriptionComponent">
            Cyber attacks vary in their shapes and sizes. Still, the vast
            majority are fundamental, carried out by relatively unskilled
            individuals, and our guidance is designed to prevent these attacks
            from even touching your devices.
          </p>
        </Grid>
        <Grid item lg={12}>
          <p className="serviceTitleComponent"> CERTIFICATION LEVELS</p>
        </Grid>

        <Grid item lg={12}>
          {_.isArray(certificationLevel) &&
            !_.isEmpty(certificationLevel) &&
            certificationLevel.map((item, index) => {
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
        <Grid item lg={12}>
          <p className="serviceTitleComponent"> OUR CERTIFICATIONS</p>
          <p className="serviceDescriptionTitle">
            Ready to assist you in securing your business...
          </p>
        </Grid>

        <Grid item lg={12}>
          {/* <Grid
            contianer
            spacing={2}
            // justifyContent="space-between"
            // flexDirection="column"
            className="subServiceCard"
          > */}
          {_.isArray(ourCertifications) &&
            !_.isEmpty(ourCertifications) &&
            ourCertifications.map((item, index) => {
              return (
                <Grid item lg={12} style={{ marginBottom: "40px" }}>
                  <p className="subServiceTitle">{item?.title}</p>
                  <Grid
                    item
                    lg={8}
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
          {/* </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
export default CyberSecurity;
