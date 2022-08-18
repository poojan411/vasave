import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import waveone from "../images/wave.svg";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";
import "../styles/whatWeStandFor.css";

function CyberEssential(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
  return (
    <div>
      <Header headerData={headerOptions} />
      <TitleCard title="Cyber Essential" />
      <Grid
        container
        justifyContent="center"
        style={{ padding: "30px", marginTop: "100px" }}
      >
        <Grid item lg={8} md={12}>
          <div>
            <h1>CYBER ESSENTIALS</h1>
            <p className="descriptionStyle">
              The self-assessment alternative provides you with the knowledge
              you need to know when protecting yourself against a wide variety
              of the most typical cyber-attacks. This is essential because
              vulnerability to simple attacks can label you as a target and lead
              to more in-depth undesired attention from cybercriminals.{"\n"}
              This Certification will assure you that your security will protect
              you against the most common cyber-attacks because these attacks
              scan for targets that do not have the Cyber Essentials technical
              controls implemented within their infrastructure.{"\n"}
              Cyber Essentials teaches you how to recognise those basics and
              prevent the most common attacks, such as: {"\n"}
              Use a firewall to secure your internet connection Choose the most
              secure settings for your devices and software Control who has
              access to your data and services Protect yourself from other
              viruses and malwares Keep your devices and software up to date
            </p>

            <h1>HOW TO PREPARE AND PASS CYBER ESSENTIALS</h1>

            <h2 className="titleStyles">
              CREATE AN INFORMATION SECURITY POLICY
            </h2>
            <p className="descriptionStyle">
              Your first step should be to create a well-structured information
              security policy for your company. The policy should incorporate
              the key elements and rules for cybersecurity. To do this
              successfully, your policy should include the following: {"\n"}
              Your security policy does not require a complex document filled
              with technical details. Instead, it should document rules for
              cybersecurity as straightforward as possible so that all your
              employees and other third parties with access to your systems or
              data can easily understand it. A password policy that defines the
              minimum obligations for passwords (such as length and complexity).
              A collection of guidelines outlining what users can and cannot do,
              including admittance controls and internet usage. It should
              contain critical elements for managing and preparing the personal
              data of customers, employees, and third parties.
            </p>

            <h2 className="titleStyles">ASSIGN A DATA PROTECTION OFFICER</h2>
            <p className="descriptionStyle">
              Selecting a single senior employee as a Data Protection Officer
              (DPO) can assist you in enforcing the information security policy
              within your company. This can be important as they can organise
              all the business security initiatives. For outside parties and IT
              users, they are the business single point of communication for
              queries and concerns related to security. {"\n"}
              To pass Cyber essentials and receive the certification, it will
              require you to finish and present a self-assessment questionnaire,
              providing suitable proof to support your answers. With that being
              said, having a singular DPO ensures that everybody understands who
              is responsible for completing the questionnaire and who to go-to
              for the best advice and guidance.
            </p>

            <h2 className="titleStyles">KEEP TRACK OF YOUR DIGITAL ASSETS</h2>
            <p className="descriptionStyle">
              Keeping an inventory of digital assets will ensure that all your
              software and devices have solid security for protection; this
              should include all the details of the updates and versions of the
              software and devices being used. Keeping an inventory of digital
              assets will ensure that all your software and devices have solid
              security for protection; this should include all the details of
              the updates and versions of the software and devices being used.{" "}
              {"\n"}
              Knowing what your assets are and what devices have access to your
              network is a good practice. This will help you keep software
              updated and is also the best way to identify unauthorised devices
              to be quickly removed if needed and enables you to classify
              vulnerabilities within your network.
            </p>

            <h2 className="titleStyles">ENFORCE ACCESS CONTROL</h2>
            <p className="descriptionStyle">
              Access control guarantees that only authorised employees can
              access sensitive information, and implementing robust access
              control is required for achieving Cyber Essentials certification.{" "}
              {"\n"}
              In addition, please use a Role-Based Access Control (RBAC) system
              to secure IT users who only have the privileges that they require
              for their job position and access to only those systems they need
              to be productive and operate safely.
            </p>

            <h2 className="titleStyles">
              MAKE USE OF THE RIGHT TOOLS AND CONFIGURATIONS
            </h2>
            <p className="descriptionStyle">
              Make sure to use and implement Firewalls into your systems to
              protect the device from external threats such as those found when
              surfing the internet. On the other hand, employ antivirus software
              to protect your systems from viruses and malware that can
              potentially harm them through data corruption, as an example. Both
              of these will help your business prevent the most common types of
              cyber attacks.
            </p>

            <h2 className="titleStyles">CONDUCT REGULAR SECURITY REVIEWS</h2>
            <p className="descriptionStyle">
              To ensure that your digital assets remain secure and protected, it
              is essential to keep documentation to track and review the
              effectiveness of the cybersecurity measures you have exercised.{" "}
              {"\n"}
              Having the knowledge of the strengths and weaknesses of your
              organisations network can assist you to keep changing your
              cybersecurity settings for better protection, especially as you
              grow. It would be best if you administered a regular security
              review to: {"\n"}
              To track all devices and software connected to your network,
              including when they were last updated and their details. Know the
              types of devices being used throughout your organisation (e.g.
              laptops, desktops, servers etc.). Discover the effectiveness of
              your information security policy. Assure that all software and
              devices are accurately configured for secure operations.
            </p>

            <h2 className="titleStyles">
              WHAT AREAS WILL CYBER ESSENTIALS COVER
            </h2>
            <p className="descriptionStyle">
              The areas that cyber essentials will cover are: {"\n"}
              Boundary Firewalls Secure Configuration Access Control Patch
              Management Password-Based authentication Anti-Malware Software
              Whitelisting Sandboxing
            </p>

            <h2 className="titleStyles">TO CONCLUDE</h2>
            <p className="descriptionStyle">
              In conclusion, if you are a small to medium scale business
              preparing and implementing cybersecurity within your network.
              Achieving a Cyber Essentials certification is an excellent way to
              start, and for a small investment of time and effort, it can
              significantly decrease your vulnerabilities to cyber threats.
              Follow the step by step plan above, and you will be ensured to
              pass Cyber Essentials and have a successful start within the
              industry. {"\n"}
              If you have any inquiries regarding Cyber Essentials or protecting
              your company systems and data, please reach out to us. We love to
              talk about Cyber Essentials and help companies with their data
              protection needs and innovative certification.
            </p>
          </div>
        </Grid>
      </Grid>
      {/* <Grid container justifyContent="center">
        <Grid item lg={8}>
          <ServicesCard />
        </Grid>
      </Grid> */}

      <Footer />
    </div>
  );
}

export default CyberEssential;
