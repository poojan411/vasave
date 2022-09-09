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

function WhatWeStandFor(props) {
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
      <TitleCard title="What we stand for" screen="whatWeStandFor" />
      <Grid
        container
        justifyContent="center"
        style={{ padding: "30px", marginTop: "100px" }}
      >
        <Grid item lg={8}>
          <div>
            {/* <h1>WHAT WE STAND FOR</h1> */}

            <h2 className="titleStyles">OUR CULTURE</h2>
            <p className="descriptionStyle">
              Vasave Business Solutions is an employee-centric company; its
              culture is the true definition of a team-oriented environment as
              it operates outside of the typical office structure. Employees are
              pushed to work together as there is an excellent emphasis on
              brainstorming, feedback and innovation, resulting in a higher
              quality of everything we produce. The collective mind is better
              than one.
            </p>
            <h2 className="titleStyles">VIRTUES AND VALUES</h2>

            <h2 className="titleStyles">INTEGRITY</h2>
            <p className="descriptionStyle">
              Here at Vasave, integrity is found in everything that we do and
              produce as we have solid ethical and moral principles in which all
              our employees follow at all times. We act with honesty, honour and
              truthfulness even if no one is watching. We believe that by firmly
              believing and following this, a client will be more likely to do
              business with us and attract the right people to work for us,
              resulting in the retention of good customers allowing us to
              develop our business even more. imageUrl: ""
            </p>

            <h2 className="titleStyles">LEARDERSHIP</h2>
            <p className="descriptionStyle">
              As the great Alexandre Havard would say, "Leadership is about
              achieving greatness and bringing out greatness in others." At
              Vasave, a quote has never been closer to home; all the employees
              within this organisation are pushed to their limits, reaching
              their full potential and be the best version of themselves that
              they can be by providing them with the most suitable training and
              experience that will allow them to be themselves and flourish in
              their expertise.By developing employees' talents, this
              organisation has proven time and time again that we are able to
              outperform competitors and excel where others do not. imageUrl: ""
            </p>

            <h2 className="titleStyles">RESPONSIBILITY</h2>
            <p className="descriptionStyle">
              We believe that this is one of those virtues that has a broad
              meaning. For starters, this could mean having the responsibilities
              to its customers and employees by delivering on its promises; on
              the other hand, it could also mean considering the impact its
              operations may have on society and the environment. Here at
              Vasave, everything is considered in everything we do and produce;
              everything matters to us: the environment, customers, employers,
              and our stakeholders. imageUrl: ""
            </p>

            <h2 className="titleStyles">FAIRNESS</h2>
            <p className="descriptionStyle">
              At Vasave, we believe that people will remain loyal to your
              business by interacting fairly with your customers, employers and
              everyone else involving your organization. It means managing all
              employees and customers with dignity, respect and not using
              standards for one group of individuals that make others feel as if
              they are not as valued, favoured or essential. To ensure that we
              treat everyone around us fairly, we make your compensation
              structure transparent and give everyone an equal opportunity to be
              recognized, promoted, and appeal decisions they consider unfair.
              Fairness is a virtue that has served businesses well for decades,
              and this is something we stay true to. imageUrl: ""
            </p>

            <h2 className="titleStyles">CONSISTENCY</h2>
            <p className="descriptionStyle">
              Here at Vasave, we believe that a company that is consistent with
              firmly applying its values in everything that they do and produce
              will have a solid corporate culture and structure. Customers and
              employees want to know that the business will be constant in terms
              of the performance and the quality of work produced, whatever the
              task is in hand, whether it would be when attempting to increase
              the sales of a product when promoting or creating content for the
              product. Demonstrating values consistently will reassure the
              company's stakeholders, helping to build a solid and growing
              organization. imageUrl: ""
            </p>

            <h1 className="titleStyles">OUR ETHOS</h1>
            <p className="descriptionStyle">
              Vasave Business Solutions is unlike any other business solutions
              agencies. We exist solely to deliver specialised assistance on
              selecting and implementing the best cloud, infrastructure and web
              solutions at an unbeatable price tailored to your needs. We will
              ensure a scale to growth strategy is formulated, help you switch
              from local storage to cloud storage, and support you with setting
              up a virtual presence on the web that will generate unlimited
              leads, maximum ROI, and more sales than previously. We are home to
              a highly experienced team of strategists, marketers and software
              developers, all at the forefront of the industry's innovation.
            </p>

            <h1 className="titleStyles">OUR GOALS</h1>

            <h2 className="titleStyles">HIRING POTENTIAL FROM ALL OVER</h2>
            <p className="descriptionStyle">
              One of our primary goals is to attract young and talented people
              worldwide to come and join us as we help create new products,
              services, experiences and business models that grow the UK
              economy. We have a diverse, open and agile culture. We work
              together, across boundaries, to meet the needs of our customers
              and to help our Company win. You will be working side by side with
              some of the brightest minds to make the UK a digital world leader.
              We will introduce you to the industry you desire and provide you
              with the proper training, experiences and qualifications to help
              you kick start your career and lead you to a path to success.
              imageUrl: ""
            </p>

            <h2 className="titleStyles">PROVIDE ANSWERS TO EVERY CHALLENGE</h2>
            <p className="descriptionStyle">
              We believe that a business solution is a combination of ideas used
              to help a company achieve its goals and objectives. Some relevant
              solutions include technology evaluation, the organisation of
              complex business information and strategic planning. Businesses
              generate strategies that are action-oriented to develop their
              market. Naturally, our strategy is aligned with what we believe
              in. We distinguish what our clients need and help them identify
              the main roadblock they are faced with and how to resolve them.
              Vasave offers a wide range of unique business solutions that make
              our clients' lives more manageable, leading to taking their
              business to the next level. Our main goal is to provide our
              clients with the latest technologies to make users more efficient
              and effective to save time doing their tasks. We are committed to
              delivering the most trusted and reliable solutions tailored to
              your business. imageUrl: ""
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

export default WhatWeStandFor;
