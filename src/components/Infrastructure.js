import * as React from "react";
import _ from "lodash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import KasperskyImg from "../images/infrastructure/infra_Kaspersky.jpg";
import SophosImg from "../images/infrastructure/infra_Kaspersky.jpg";
import HardwareImg from "../images/infrastructure/infra_hardware.jpg";
import DatabaseImg from "../images/infrastructure/infra_database.jpg";
import "../styles/cloud.css";

function Infrastructure(props) {
  const { title, description, imageUrl } = props;
  const subServices = [
    {
      title: "KASPERSKY",
      description:
        "Need security when browsing the internet? What about an anti virus to prevent malicious softwares penetrating your system? Kaspersky has you covered, as one of the largest and most powerful Cybersecurity softwares on the market...",
      image: KasperskyImg,
      learnMore: true,
    },
    {
      title: "SOPHOS",
      description:
        "In IT Protection Systems, Sophos is one of the most respected brands. We sell and deploy a wide variety of Sophos tools for highly protected application security to match all clients’ requirements from network and end-user safety. By securing the endpoint, we will guarantee that malware stays safe for your applications and that all the data is protected. As well as support for both the computers and handheld apps, Sophos also provides confidentiality and file sharing for other users. Some of the key benefits include: Scan all data written on or write from cloud NetApp for viruses, or isolation removed tainted data. Avoids inappropriate code spread to other computers on the web. Detects viruses, spyware, and other malware. Limited receiver updates which have a minimum repercussion on machine capital.",
      image: SophosImg,
      contactUs: true,
    },
    {
      title: "HARDWARE",
      description:
        "All organisations wish that their hardware lasts longer and can save money. We provide service on the equipment and offer preventive maintenance steps, so the company gets maximum return on the investment.",
      image: HardwareImg,
      getInTouch: true,
    },
    {
      title: "DATABASE",
      description:
        "Vasave Business Solutions provides a database as a service to clients for any job or application creation scheme. DBaaS is not only quite versatile. It has all the benefits and drawbacks similar to many cloud providers, such as more effective expense management on the one side with more limited capabilities on the other side than the on-premise option. DBaaS benefits include reduced entry thresholds, expanded exposure to technology historically only available to big businesses, and digitally native usage cases such as the Internet of Things (IoT) data sharing, machine learning (ML) instruction, and advanced systems such as edge computing adjuncts.",
      image: DatabaseImg,
      contactUs: true,
    },
  ];
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <p className="serviceTitleComponent">Infrastructure</p>
        </Grid>
        <Grid item lg={12}>
          <p className="serviceDescriptionTitle">
            It would be a sin to overlook our extremely well-thought-of
            infrastructure services. Our exceptional service delivery and budget
            fixed costs will make our service all the more appealing to you and
            your business.
          </p>
          <p className="serviceDescriptionComponent">
            Based on your unique needs, we will build an infrastructure for your
            business, ensuring a scale to growth strategy is formulated.
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
                      src={item?.image}
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
export default Infrastructure;
