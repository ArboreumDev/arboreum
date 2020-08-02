import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./assets/imgs/fractalIcon.svg";

interface H3Props {
  align: string;
}

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 80px 20px 100px 20px;
  @media (max-width: 420px) {
    padding-bottom: 50px;
  }
`;

const TitleContainer = styled.div`
  margin: 0 auto 75px auto;
  text-align: center;
  max-width: 720px;
  @media (max-width: 420px) {
    margin-bottom: 25px;
  }
`;

const LogoImage = styled.img`
  height: 42px;
  width: auto;
  margin: auto;
`;

const IconConatiner = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const CardContainer = styled.div`
  margin: 0px auto 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  min-width: 320px;
  flex: 1 1 100%;
  flex-wrap: wrap;
  max-width: 960px;
`;

const Card = styled.div`
  margin-top: 25px;
  max-width: 460px;
  font-size: 20px;
`;

const CardContent = styled.div`
  padding: 30px 20px 10px 20px;
  background-color: #fff;
  font-size: 18px;
  align-items: stretch;
  box-shadow: 0 0px 13px -3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: all 0.5s ease;
  height: calc(100% - 40px);
  &:hover {
    box-shadow: 0 0px 13px 0px rgba(0, 0, 0, 0.3);
  }
`;

const P = styled.p`
  margin-top: 20px;
`;

const CardTitle = styled.div`
  padding: 10px 20px;
  display: flex;
  font-size: 20px;
  color: #ed145a;
  border: 2px solid #ed145a;
  border-radius: 50px;
  width: max-content;
`;

const Map: React.FunctionComponent<{}> = () => {
  // eslint-disable-next-line
  const [windowWidthValue, setWindowWidthValue] = useState(window.innerWidth);
  window.onresize = () => {
    setWindowWidthValue(window.innerWidth);
  };
  return (
    <DivContainer>
      <IconConatiner>
        <LogoImage src={Icon} alt="Fractal Lending Icon" />
      </IconConatiner>
      <TitleContainer>
        <h1>Introducing the world’s first fractal lending technology.</h1>
        <h3>
          Our technology enables next gen peer to peer lending inside trust-based networks. Arboreum lenders are derisked through our cutting edge portfolio optimization AI. 
          <p></p>
          Arboreum borrowers bring supporters who co-lend to them, using their societal trust to create credit access for the financially underserved
        </h3>
      </TitleContainer>
      <CardContainer>
        <Card>
          <a
            href="mailto:enquiries@arboreum.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardContent>
              <CardTitle align="left">Request Pitchdeck</CardTitle>
              <P>
                Learn more about the challenges we face, our novel solution, and
                our overall business strategy.
              </P>
            </CardContent>
          </a>
        </Card>
        <Card>
          <a
            href="./assets/pdfFiles/Arboreum_Whitepaper_v0.1.7.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardContent>
              <CardTitle align="left">Whitepaper</CardTitle>
              <P>
                Learn more about the concepts that power our solution. 
              </P>
            </CardContent>
          </a>
        </Card>
      </CardContainer>
    </DivContainer>
  );
};

export default Map;
