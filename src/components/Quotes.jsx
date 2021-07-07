import React from "react";
import styled from "styled-components";

function Quotes() {
  return (
    <QuoteBox>
      <DotGrid src={"/images/dotGrid.png"} />
      <QuoteImg src={"/images/quote.png"} />
      <QuoteTextBox>
        <QuoteText>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem
          quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est.
        </QuoteText>
        <div style={{textAlign:'left'}}>
        <ButtonSign>Sign Up as a Host</ButtonSign>
        </div>
      </QuoteTextBox>
    </QuoteBox>
  );
}

export default Quotes;

const QuoteBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  position:relative;
`;
const QuoteImg = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
`;
const QuoteText = styled.div``;
const QuoteTextBox = styled.div`
  width: 50%;
`;
const DotGrid = styled.img`
position : absolute;
left:0;
top:-50%;
`;
const ButtonSign = styled.button`
box-sizing: border-box;
background: #FEBD57;
border-radius: 6px;
border:none;
padding:10px;
margin:10px;
`;