import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

function CarouselItem() {
  return (
    <CarouselContainer>
      <Carousel>
        <Carousel.Item>
          <Carimg src="/images/c1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carimg src="/images/c2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carimg src="/images/c3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
}

export default CarouselItem;

const CarouselContainer = styled.div`
  width: 70%;
  margin: 50px auto;
`;
const Carimg = styled.img`
    height:500px;
    width:100%;
    object-fit:cover;
`;
