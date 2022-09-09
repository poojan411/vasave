import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import waveone from "../images/wave.svg";
import TitleCard from "../components/TitleCard";
import "../styles/contact.css";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Footer from "../components/Footer";

// import Theme from "../";

function Contact(props) {
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

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [name, setName] = useState('');

  return (
    <div>
      <Header headerData={headerOptions} />
      <TitleCard title="Contact" screen="contactUs" />
      <Grid container justifyContent="center" style={{ marginTop: "150px" }}>
        <Grid item lg={7.5} md={12} xs={12} style={{ padding: 20 }}>
          <Grid
            container
            spacing={5}
            justifyContent="space-between"
            flexDirection="row"
          >
            <Grid
              item
              lg={6}
              md={11}
              xs={12}
              style={{ backgroundColor: "#fff" }}
            >
              <Typography
                variant="h5"
                className="formTitleStyle"
                style={{ textAlign: "left" }}
              >
                Get in touch
              </Typography>
              <p className="descriptionStyle">
                Feel free to get in contact with Vasave if you have any queries
                regarding
                <br />
                our services or hardware we offer. This can be done through any
                of the
                <br />
                ways shown below, and a member of our friendly team will get
                back to you!
              </p>
              <Grid container spacing={2} style={{ marginTop: "40px" }}>
                <Grid item lg={5.5}>
                  <TextField
                    id="outlined-basic"
                    label="Full Name*"
                    variant="outlined"
                    // floatingLabelText="Your Full Name"
                    style={{ width: "100%" }}
                    value={name}
                    onChange={(e) => {
                      setName(e.value);
                    }}
                  />
                </Grid>
                <Grid item lg={5.5}>
                  <TextField
                    id="outlined-basic"
                    label="Mobile Number*"
                    variant="outlined"
                    // floatingLabelText="Your Mobile Number"
                    style={{ width: "100%" }}
                    value={number}
                    onChange={(e) => {
                      setNumber(e.value);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: "30px" }}>
                <Grid item lg={11}>
                  <TextField
                    id="outlined-basic"
                    label="Email Address*"
                    // floatingLabelText="Your Email"
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.value);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: "30px" }}>
                <Grid item lg={11}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Additional Information"
                    multiline
                    // floatingLabelText="Your Message"
                    rows={6}
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.value);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: "30px" }}>
                <Grid
                  item
                  lg={11}
                  md={11}
                  xs={12}
                  style={{ textAlign: "left" }}
                >
                  <span className="buttonStyle"> Send Message </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} className="ContactDetails">
              <span className="titletwostyle">Office Address</span>
              <br />
              <p className="descriptionTwoStyle">
                HELENA 3, AIRPORT HOUSE
                <br />
                PURLEY WAY
                <br />
                CROYDON
                <br />
                CR0 0XZ <br />
              </p>

              <br />
              <span className="titletwostyle">Phone Number</span>
              <br />
              <p className="descriptionTwoStyle">+44 20 3488 6800</p>
              <br />
              <span className="titletwostyle">Email Address</span>
              <br />
              <p className="descriptionTwoStyle">INFO@VASAVE.UK</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Contact;
