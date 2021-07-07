import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterOuter>
      <FooterContainer>
        <FooterLeft>
          <FootImg
            src="/images/logo.svg"
            width="120"
            height="80"
            className="d-inline-block align-top"
            alt="Whiskers"
          />
        </FooterLeft>
        <FooterRight>
          <FootDetail>
            <div style={{ fontWeight: "bold" }}>Learn More</div>
            <div>About Us</div>
            <div>Our Blog</div>
          </FootDetail>
          <FootDetail>
            <div style={{ fontWeight: "bold" }}>Legal</div>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Copyrights</div>
          </FootDetail>
          <FootDetail>
            <div style={{ fontWeight: "bold" }}>Need Help?</div>
            <div>FAQ’s for Users</div>
            <div>FAQ’s for Hosts</div>
            <div>Contact Us</div>
          </FootDetail>
        </FooterRight>
      </FooterContainer>
      <FooterContact>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFacebook} />
      </FooterContact>
    </FooterOuter>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 80%;
`;
const FooterLeft = styled.div``;
const FooterRight = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  color: #e5edeb;
  @media (max-width: 800px) {
    display: none;
  }
`;

const FootImg = styled.img`
  position: absolute;
  top: 30%;
  left: 20%;
  @media (max-width: 800px) {
    left: 40%;
    width: 150px;
    height: 100px;
  }
`;
const FootDetail = styled.div``;

const FooterContact = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
  width: 10%;
  margin: 0 auto;
  justify-content: space-around;
  color: white;
  @media (max-width: 800px) {
     font-size:2rem;
     width:50%;
  }
`;
const FooterOuter = styled.div`
  background-image: url("/images/footer.png");
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 800px) {
  }
`;
