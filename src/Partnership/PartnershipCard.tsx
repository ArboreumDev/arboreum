import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  flex-shrink: 1;
  max-width: 384px;
  background-color: #fff;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  margin: 20px auto;
  flex-shrink: 0;
`;
const H3 = styled.h3`
  font-weight: bold;
  margin: 0;
  text-align: center;
  margin-top: 20px;
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
  color: #999;
  text-align: center;
`;
const Map: React.FunctionComponent<{
  title: string;
  image: string;
  description: string;
  buttontext: string;
  url: string;
}> = (props) => {
  return (
    <DivContainer>
      <ImageContainer>
        <img src={props.image} width="100%" alt={`${props.image}`} />
      </ImageContainer>
      <div>
        <H3>{props.title}</H3>
        <P>{props.description}</P>
      </div>
      <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
      <Button>
        {props.buttontext}
      </Button>
      </a>
    </DivContainer>
  );
};

export default Map;
