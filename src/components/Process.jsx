import React from "react";
import styled from "styled-components";

function Process() {
  return (
    <div>
      <ProcessTitle></ProcessTitle>
      <ProcessDescription>
        <ProcessItem>
          <ProcessImg src={"/images/176.png"} />
          <ProcessText>Find a perfect host for your pet.</ProcessText>
        </ProcessItem>
        <ProcessItem>
          <ProcessImg src={"/images/178.png"} />
          <ProcessText>Contact Host and book a visit</ProcessText>
        </ProcessItem>
        <ProcessItem>
          <ProcessImg src={"/images/177.png"} />
          <ProcessText>
            Pay Online and let your pet enjoy a vacation
          </ProcessText>
        </ProcessItem>
      </ProcessDescription>
    </div>
  );
}

export default Process;
const ProcessTitle = styled.div`
  background: url(/images/OurProcess.png);
  background-repeat: no-repeat;
  background-position: center;
  margin: 50px auto;
  width: 300px;
  height: 80px;
`;
const ProcessDescription = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ProcessImg = styled.img`
  height: 80px;
`;

const ProcessText = styled.div`
  text-align: center;
  padding: 5px;
`;

const ProcessItem = styled.div`
  width: 30%;
  text-align: center;
`;
