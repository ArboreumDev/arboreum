import React from "react";
import styled from "styled-components";
import PartnersData from "./assets/data/partners.json";

interface partnerData {
  link: string;
  altText: string;
  logo: string;
}

const PartnerStrip = styled.div`
  background-color: #fafafa;
  width: 100%;
`;
const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;

  img {
    margin: 0 25px;
    height: 45px;
  }
`;

const P = styled.p`
  text-align: center;
  margin: 20px 0 0 0;
  font-style: italic;
  opacity: 0.6;
  font-size: 20px;
`;

const Map: React.FunctionComponent<{}> = () => {
  const partners = PartnersData.map((d: partnerData, i: number) => {
    return (
      <a href={d.link} target="_blank" rel="noopener noreferrer" key={i}>
        <img src={d.logo} width="auto" alt={d.altText} />
      </a>
    );
  });
  return (
    <PartnerStrip>
      <P>Powering the next generation of FinTech</P>
      <DivContainer>{partners}</DivContainer>
    </PartnerStrip>
  );
};

export default Map;
