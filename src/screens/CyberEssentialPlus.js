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

function CyberEssentialPlus(props) {
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
      <TitleCard title="Cyber Essential Plus" screen="cyberEssentialPlus" />
      <Grid
        container
        justifyContent="center"
        style={{ padding: "30px", marginTop: "100px" }}
      >
        <Grid item lg={8} md={12}>
          <div>
            <h1>CYBER ESSENTIALS PLUS</h1>
            <p className="descriptionStyle">
              Cyber Essentials Plus involves an audit of your system by one of
              the trained assessors.They are involved to confirm that all
              controls that have been declared in Cyber Essentials are
              implemented within the organisation's network. This is done by
              undertaking and completing Cyber Essentials Plus,it is your choice
              whether to declare publicly to your supply chain and customers
              that your organisation has been proven to meet Cyber Essentials
              baseline standards which enables you to interact with clients,
              business partners and staff confidently and securely. {"\n"}
              There some key elements of cyber essentials plus audit which can
              be summarised as follows: {"\n"}
              An assessor will pick a sample of computers at your organisation
              (up to 5 of each type of machine depending on scale of your
              network) and perform an audit to ensure that the devices are
              configured as per the scheme. A vulnerability scan will be
              performed on these machines to confirm patching and basic
              configuration is at an acceptable level. An external port scan of
              your internet facing IP addresses will be conducted to ensure no
              clear and obvious misconfigurations or vulnerabilities can be
              identified. A test will be conducted on your default
              email/internet browser to confirm how well configured they are to
              prevent execution of fake malicious files. Screenshots will be
              taken as evidence that the system is Cyber Essentials compliant.
            </p>

            <h1>HOW TO PREPARE AND PASS CYBER ESSENTIALS PLUS</h1>

            <h2 className="titleStyles">BASELINE ASSESSMENT</h2>
            <p className="descriptionStyle">
              The whole process begins by assessing where your organisation is
              currently at in terms of the five technical security controls. But
              what are the five technical controls? We have written more
              extensively about the standards you need to meet to achieve Cyber
              Essentials PLUS certification, but below is a brief overview:{" "}
              {"\n"}
              Use a firewall to secure not just your internet connection but the
              whole system also. A firewall is like a safety barrier that
              protects your network and devices from unwanted incoming traffic,
              for example spam emails. It is more than likely you already have a
              firewall in place, but this initial assessment will test to see
              how effective the firewall has been. Choose the most secure
              settings for your software and devices. New software and devices
              are usually designed to be open and easy to use. Its up to you to
              implement secure settings. This assessment will check to see
              whether you are using passwords to protect your devices and files,
              and if you have cleared out any unnecessary apps that could pose a
              risk. You are able to control who has access to your data and
              services. This security measure aims to limit the access attackers
              have if they breached your system. Think of your organisation a
              bit like MI5 access to data and services should be on a needs to
              know basis to minimise the potential harm an attacker could do.
              Protect yourself from viruses and other malware. Cyber Essentials
              PLUS requires that you are taking anti-malware and spyware
              measures, such as installing Windows Defender, and/or sandboxing
              and/or white listing. Keep all your devices and software up to
              date. The regular updates that are fed through to your devices
              dont just fix bugs; they increase security. Keeping all devices
              and software up to date is a requirement of Cyber Essentials PLUS
              once these steps have been taken you can then move on to step two.
            </p>

            <h2 className="titleStyles">VULNERABILITY SCANS</h2>
            <p className="descriptionStyle">
              A vulnerability scan does exactly what it says on the tin it scans
              your information system to find vulnerabilities. It is looking for
              weaknesses in your cyber security that a hacker could exploit in
              order to launch an attack on your system. {"\n"}
              Vulnerability scans are typically automated, using software to
              highlight areas of concern. {"\n"}
              They seek out known flaws missing software patches or weaknesses
              that have already been identified in the industry and suggest
              remediation. {"\n"}
              However, vulnerability scans cannot find flaws that are not
              already widely known in the cyber security world. They shouldnt be
              thought of as foolproof. {"\n"}
              Its possible to purchase this software and carry out the scan
              yourself. Of course, the benefit of Cyber Essentials PLUS apart
              from having someone else do the heavy lifting is that you put all
              this in the hands of experts who know exactly what they are
              looking for and what to do with what they find.
            </p>

            <h2 className="titleStyles">ANALYSE THE GAP</h2>
            <p className="descriptionStyle">
              At this stage, the job is to detail the gap between where your
              system currently is as identified by steps 1 and 2 and where it
              needs to be. Having identified what the weaknesses are, what work
              needs to be done to close the gap and secure your system? {"\n"}
              The vulnerability scan may suggest remediation measures, but dont
              forget you may also be falling short on the five technical
              controls in other ways limiting user access, adding password
              protection, for examples that will not show up in the
              vulnerability scan results. The gap analysis will indicate all of
              the gaps, both physical and virtual.
            </p>

            <h2 className="titleStyles">STATEMENT OF WORK</h2>
            <p className="descriptionStyle">
              Based on the findings of the gap analysis, its time to create a
              Statement of Works (SOW). {"\n"}
              This will detail exactly what action is to be taken to close up
              the gaps discovered in step 3. A SOW should include not only the
              required remediation, but also the resources needed to carry out
              the work. {"\n"}
              This may include everything from time out for staff meetings to
              run through cyber security best practice, to the creation of a
              white list, to software and device upgrades and everything in
              between. Its in your interest to have as comprehensive a plan as
              possible to ensure there are no surprises once the work begins.
            </p>

            <h2 className="titleStyles">IMPLEMENT THE REQUIRED ACTIONS</h2>
            <p className="descriptionStyle">
              Having created your SOW, its time to carry it out. {"\n"}
              Though Cyber Essentials PLUS might seem like an IT thing, it
              impacts the whole organisation and requires buy-in across the
              board to make it work. Cyber Essentials PLUS isnt just about
              software and data. Its about understanding best practice and
              achieving it in action. {"\n"}
              Your Cyber Essentials PLUS partner should be able to help you with
              every aspect of certification, including any necessary training.
              Be prepared to give this step the necessary time. Failure to carry
              out the works in full will undo the hard work youve put in up to
              now.
            </p>

            <h2 className="titleStyles">RE-ASSESSMENT</h2>
            <p className="descriptionStyle">
              This step tests how successful your remediation works have been by
              performing another vulnerability scan. The initial assessment from
              step 1 will also be repeated to ensure that you now meet all
              aspects of the five technical controls, including limiting user
              access, securing with passwords, etc.
            </p>

            <h2 className="titleStyles">CYBER ESSENTIALS PLUS CERTIFICATION</h2>
            <p className="descriptionStyle">
              Provided the re-assessment is successful, congratulations are in
              order! You have achieved Cyber Essentials PLUS certification. Well
              done. {"\n"}
              Cyber Essentials certification requires patches to be implemented
              within two weeks of being available. This principle extends to the
              certification itself, which must be completed within 14 days.{" "}
              {"\n"}
              The government recommends that Cyber Essentials certification is
              renewed annually. But theres no doubt that the first certificate
              is the most complicated and once best practice is implemented it
              is much easier to prove compliance going forward.
            </p>

            <h2 className="titleStyles">TO CONCLUDE</h2>
            <p className="descriptionStyle">
              In conclusion, cyber essential plus is required to help your
              network keep all your personal information safe from
              cybercriminals. As long as you follow all the required steps that
              are stated above you should be safe and secure in your network of
              choice. This is also an extension to cyber essentials which covers
              everything in that topic.
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

export default CyberEssentialPlus;
