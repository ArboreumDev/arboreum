import React from "react";
import styled from "styled-components";
import Logo from "./assets/imgs/ArboreumLogoLight.svg";
import SMData from "./assets/data/sm.json";

interface SMType {
  socialMedia: string;
  icon: string;
  link: string;
}

const AppFooter = styled.footer`
  background-color: #1a2943;
  color: #fff;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
`;

const LogoImage = styled.img`
  height: 20px;
  width: auto;
  margin-bottom: 10px;
`;

const SMIcon = styled.img`
  height: 36px;
  width: auto;
  margin: 0 10px;
`;

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1272px;
  padding: 75px 20px;
`;

const H2 = styled.h2`
  font-weight: normal;
  margin-bottom: 0px;
  font-family: "Raleway", sans-serif;
  text-align: center;
`;

const H3 = styled.h3`
  margin-top: 5px;
  margin-bottom: 0;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

const Button = styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 50px;
  color: #ed135a;
  background-color: #fff;
  border: 1px solid #ed135a;
  width: fit-content;
  box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);
  margin: auto;
  margin-top: 30px;
  transition: all 0.5s ease;
  &:hover {
    color: #fff;
    background-color: #ed135a;
  }
`;

const P = styled.p`
  font-size: 14px;
  color: #fff;
  opacity: 0.7;
  margin: 0;
`;
const Line = styled.div`
  height: 1px;
  background-color: #fff;
  opacity: 0.2;
`;
const Map: React.FunctionComponent<{}> = () => {
  const SM = SMData.map((d: SMType, i: number) => {
    return (
      <a href={d.link} target="_blank" key={i} rel="noopener noreferrer">
        <SMIcon src={d.icon} alt={d.socialMedia} />
      </a>
    );
  });
  return (
    <AppFooter>
      <DivContainer>
        <H2>Ready to partner with us?</H2>
        <H3>Get in touch to find out how we can help you.</H3>
        <a
          href="mailto:enquiries@arboreum.dev?subject=Getting In Touch With Arboreum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Contact Us</Button>
        </a>
      </DivContainer>
      <Line />
      <FooterContainer>
        <div>
          <LogoImage src={Logo} alt="Arboreum Logo" />
          <P>© 2020 Arboreum. All rights reserved.</P>
        </div>
        <div>{SM}</div>
      </FooterContainer>
    </AppFooter>
  );
};

export default Map;
