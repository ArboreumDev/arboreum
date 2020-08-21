import React from "react";
import styled from "styled-components";
import LinkedinLogo from "./assets/imgs/Linkedin.svg";

const DivContainer = styled.div`
  margin: 0 auto;
  margin: 20px;
  background-color: #fff;
  padding: 20px 20px 40px 20px;
  min-width: 140px;
  flex: 1 1 calc(25% - 80px);
  font-size: 16px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.11);
  &
`;

const ImageContainer = styled.div`
  margin: 40px auto;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 100px;
`;

const IMG = styled.img`
  border-radius: 100px;
  filter: grayscale(100%);
`;
const H3 = styled.h3`
  font-weight: bold;
  margin: 0;
  margin-top: 20px;
`;

const H4 = styled.h4`
  color: #ed135a;
  margin: 0;
`;

const LinkedIn = styled.img`
  height: 40px;
  width: auto;
  margin: auto;
`;

const Div = styled.div`
  text-align: center;
`;

const Map: React.FunctionComponent<{
  name: string;
  description: string;
  position: string;
  photo: string;
  linkedin?: string;
  linkedinURL?: string;
}> = (props) => {
  return (
    <DivContainer>
      <ImageContainer>
        <IMG src={props.photo} width="100%" alt={`${props.name} icon`} />
      </ImageContainer>
      <Div>
        <H3>{props.name}</H3>
        <H4>{props.position}</H4>
        <p>{props.description}</p>
          {props.linkedin ? ( <> <a href = {props.linkedinURL} target="_blank" rel="noopener noreferrer">
          <LinkedIn src={LinkedinLogo} alt="Linkedin Icon" /> </a>
          </>) : null
          }
      </Div>
    </DivContainer>
  );
};

export default Map;
