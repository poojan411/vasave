import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import waveone from "../images/wave.svg";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";
import ServicesCard from "../components/ServicesCard";
import { ourServices } from "../config/staticData";
import "../styles/serviceDetails.css";
import CloudLogo from "../images/cardLogos/CreativeCardLogo.png";
import CounsultancyLogo from "../images/servicesLogos/consultancyLogo.png";
import generalServiceImage from "../images/serviceDetailsimage.png";
import { width } from "@mui/system";
import Cloud from "../components/Cloud";
import Consultancy from "../components/Consultancy";
import CyberSecurity from "../components/CyberSecurity";
import Infrastructure from "../components/Infrastructure";

function ServiceDetails(props) {
  const [activeService, setActiveService] = useState(ourServices[0]);
  const navigationData = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("ourServices", ourServices);
  }, [activeService]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("ourServices", ourServices);
  }, []);

  useEffect(() => {
    if (
      !_.isEmpty(navigationData) &&
      !_.isUndefined(navigationData) &&
      !_.isEmpty(navigationData?.state) &&
      !_.isUndefined(navigationData?.state)
    ) {
      let service = navigationData?.state?.service;
      console.log("service=========", service);
      console.log("service=======ourServices==", ourServices);
      const currentService = ourServices.filter(
        (item) => item.title === service
      );
      console.log("service=======currentService==", currentService);
      setActiveService(currentService[0]);
    }
  }, []);
  const headerOptions = [
    {
      title: "home",
      detials: "homepage",
    },
    {
      title: "about",
      detials: "about",
    },
    {
      title: "services",
      detials: "services",
    },
    {
      title: "contact",
      detials: "contact",
    },
  ];

  console.log(
    "selected Services= navigation======",
    navigationData?.state?.service
  );

  return (
    <div>
      <Header headerData={headerOptions} />
      <TitleCard title={activeService?.title} />

      <Grid container justifyContent="center" style={{ marginTop: "130px" }}>
        <Grid item lg={8}>
          <Grid container spacing={2}>
            <Grid item lg={9}>
              <Grid container>
                <Grid item lg={11}>
                  <div
                    style={{
                      backgroundColor: "#f7f7f7",
                      width: "100%",
                      padding: "40px 20px",
                    }}
                  >
                    <img src={generalServiceImage} alt="generalServiceImage" />
                  </div>
                </Grid>
                <Grid container>
                  <Grid item lg={11}>
                    {activeService?.title === "Cloud" ? (
                      <Cloud />
                    ) : activeService?.title === "Consultancy" ? (
                      <Consultancy />
                    ) : activeService?.title === "Cyber Security" ? (
                      <CyberSecurity />
                    ) : activeService?.title === "Infrastructure" ? (
                      <Infrastructure />
                    ) : null}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={2}>
              {!_.isEmpty(ourServices) &&
                _.isArray(ourServices) &&
                ourServices.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setActiveService(item);
                      }}
                      className={
                        activeService === item
                          ? "servicesTitleCardActive"
                          : "servicesTitleCard"
                      }
                    >
                      <img
                        src={index % 2 === 0 ? CounsultancyLogo : CloudLogo}
                        // src={item?.imageUrl}
                        alt="CloudLogo"
                        className="serviceLogoStyle"
                      />
                      {item?.title.toLowerCase()}
                    </div>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default ServiceDetails;
