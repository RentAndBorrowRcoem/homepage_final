import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Image,
  Sentence,
  Sentence1,
  SocialLink,
  HeartIcon,
  Copyright,
  TermsAndConditions,
} from "./FooterStyles";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Import the icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import imageSrc from "./image.jpg";

const Footer = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
    <Box >
      <Image src={imageSrc} alt="Footer Image" />
      <Sentence>RAB is the best of the best.</Sentence>
	  <Sentence1>Rent and earn, Borrow and save!</Sentence1>


      {/* Locations */}
<Container>
  <Row>
    <Column style={{ alignItems: "center" }}>
    </Column>
    <Column style={{ alignItems: "center", marginLeft: "10px" }}>
      <Heading>Locations</Heading>
      <FooterLink href="#">Pune</FooterLink>
      <FooterLink href="#">Bangalore</FooterLink>
    </Column>
    <Column style={{ alignItems: "center" }}>
      <Heading>Contact Us</Heading>
      <FooterLink style={{ display: "flex", alignItems: "center" }} href="#">
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
        <span style={{ marginLeft: "10px", display: "inline-block" }}>support@rentborrow.in</span>
      </FooterLink>
      <FooterLink style={{ display: "flex", alignItems: "center" }} href="#">
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
        <span style={{ marginLeft: "10px", display: "inline-block" }}>+91-7028859186</span>
      </FooterLink>
    </Column>
  </Row>
</Container>

      {/* Social Links */}
      <div style={{ display: "flex", marginLeft: "590px" }}>

       <SocialLink href="#" style={{ color: "#1DA1F2", fontFamily: "Comic Sans MS, cursive" }}>
      <FaTwitter />
       <span>Twitter</span>
       </SocialLink>
       <SocialLink href="#" style={{ color: "#C13584", fontFamily: "Comic Sans MS, cursive" }}>
      <FaInstagram />
       <span>Instagram</span>
       </SocialLink>
       <SocialLink href="#" style={{ color: "#0077B5", fontFamily: "Comic Sans MS, cursive" }}>
      <FaLinkedinIn />
       <span>LinkedinIn</span>
       </SocialLink>
      </div>

      {/* Copyright and Terms */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Copyright>
            Made with <HeartIcon /> in India - Copyright © 2023. All rights reserved
          </Copyright>
        </div>
        <div>
          <TermsAndConditions>
            <FooterLink href="#">Terms and Conditions</FooterLink>
          </TermsAndConditions>
        </div>
      </div>
    </Box>
    </div>
  );
};

export default Footer;
