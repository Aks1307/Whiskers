import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Quotes from "../components/Quotes";
import Process from "../components/Process";
import CarouselItem from "../components/Carousel";
import Modal from "../components/Modal";
import Login from "../components/Login";

function Landing() {
  const login = useSelector((state) => state.modalState.login);
  const signUp = useSelector((state) => state.modalState);

  return (
    <div>
      <Header />
      <BannerComponent>
        <BannerContent>
          <BannerHead></BannerHead>
          <BannerText>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </BannerText>
          <BannerButton>Get Started</BannerButton>
        </BannerContent>
      </BannerComponent>
      <Process />
      <Quotes />
      <div style={{ backgroundImage: "url(/images/backRec.png)" }}>
        <CarouselItem />
      </div>
      <Footer />
      {login ? (
        <Modal>
          <Login />
        </Modal>
      ) : null}
    </div>
  );
}

export default Landing;

const BannerComponent = styled.div`
  background-image: url(/images/banner.png);
  width: 100%;
  height: 700px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const BannerContent = styled.div`
  position: absolute;
  left: 5%;
  right: 51.11%;
  top: 30%;
  bottom: 91.17%;
`;

const BannerHead = styled.div`
  background-image: url(/images/bannerHead.png);
  background-repeat: no-repeat;
  width: 680px;
  height: 80px;
`;
const BannerText = styled.div`
  color: #fff;
`;

const BannerButton = styled.button`
  border: none;
  border: 2px solid #febd57;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px;
  margin: 15px 0;
`;
