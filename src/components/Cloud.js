import * as React from "react";
import _ from "lodash";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import MicrosoftImg from "../images/cloud/cloud-microsoft.jpg";
import GoogleWorkspaceImg from "../images/cloud/cloud_google_workspace.jpg";
import AwsImg from "../images/cloud/cloud_aws.jpg";
import HpImg from "../images/cloud/cloud_hp.jpg";
import CiscoUmbrellaImg from "../images/cloud/cloud_cisco_umbrella.png";
import VmwareImg from "../images/cloud/cloud_vmware.jpg";

// import image from "../images/cardLogos/CreativeCardLogo.png";
import "../styles/cloud.css";

function Cloud(props) {
  const { title, description, imageUrl } = props;
  const subServices = [
    {
      title: "MICROSOFT",
      description:
        "With services like advanced Office 365 applications, Microsoft services are built to help everyone in accessing intelligent cloud services, world-class security and much more.",
      image: MicrosoftImg,
      getInTouch: true,
    },
    {
      title: "GOOGLE WORKPLACE",
      description:
        "We provide Google Suite as a service for cloud computing, collaboration, and productivity. Google Workspace is an easy to use, reliable set of software and resources providing simplicity to work across all company styles and sizes. Its the perfect cloud service for collaboration and efficient work from any location and on any compatible platform, whether the company is small, medium, or a large enterprise. G Suite includes Gmail, Google Calendar, Hangouts, Google Drive, Google Docs, and a number of other services at a significantly lower cost than any other software application, as well as more benefits of operating with the software, all of which can be used to promote the brand and territories.",
      image: GoogleWorkspaceImg,
      learnMore: true,
    },
    {
      title: "AWS",
      description:
        "As a Cloud service provider, we provide AWS managed solutions to customers to help build a seamless transition to the cloud. Our products are delivered as modular subscription-based service that adapts to customer needs and can be deployed in cloud, on-premises, or hybrid models. We offer AWS services to a variety of sectors, including Banking, Insurance, Retail, and Health care.",
      image: AwsImg,
      getInTouch: true,
    },
    {
      title: "HP",
      description:
        "As an expert HP cloud partner, we help determine the organizations benefits by migrating a required application to the cloud for optimal performance and cost-saving. We will help our clients create an optimal public and private infrastructure ecosystem by advising them to take a hybrid approach to their IT infrastructure. We insist on showing our clients where they can put a specific application to get the most out of it. We also provide service to set a comprehensive plan for the cloud environment",
      image: HpImg,
      contactUs: true,
    },
    {
      title: "CISCO UMBRELLA",
      description:
        "We provide Cisco Umbrella as a service for safe Internet connectivity and the use of cloud services everywhere.",
      image: CiscoUmbrellaImg,
      getInTouch: true,
    },
    {
      title: "VMWARE",
      description:
        "As VMware Cloud providers, we enable the fast and cost-effective deployment of hybrid cloud services increasingly for our clients whether they are providing infrastructure-as-a-service, crisis recovery, or desktop as a service solution. To support clients in the cloud computing industry, the service provider can take advantage of the shorter time to market, lower capital expenditures, and lower infrastructure costs.",
      image: VmwareImg,
      contactUs: true,
    },
  ];
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <p className="serviceTitleComponent">Cloud</p>
        </Grid>
        <Grid item lg={12}>
          <p className="serviceDescriptionTitle">
            The need to move to a more powerful and more secure form of storage
            for your company may be making you uneasy. Maybe because you have
            never thought of the idea of an alternate storage solution.
          </p>
          <p className="serviceDescriptionComponent">
            Here at Vasave, we offer specialized help and thorough advice on
            applying and executing the correct cloud solution for your business.
            We are here to make the transition from local to cloud a much more
            relaxed and stress-free experience.
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
export default Cloud;
