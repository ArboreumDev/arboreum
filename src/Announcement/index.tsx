import React from "react";
import styled from "styled-components";

interface announcementData {
  announcement: string;
  logo?: string;
  link?: string;
}

const AnnouncementData: announcementData = require("./assets/data/copy.json");

const DivContainer = styled.div`
  width: 100%;
  font-size: 24px;
  color: #fff;
  margin-top: 90px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #1a2943;
`;

const P = styled.p`
  margin: 0 15px 0 0;
`;

const DivBorder = styled.div`
  height: 10px;
  background-image: linear-gradient(
    90deg,
    #ed145a 0%,
    #bc5e6b 25%,
    #009893 50%,
    #55b359 75%,
    #73bf44 100%
  );
`;

const Map: React.FunctionComponent<{}> = () => {
  let img =
    AnnouncementData.logo !== null ? (
      <img
        src={AnnouncementData.logo}
        width="50px"
        height="auto"
        alt={"logo"}
      />
    ) : undefined;
  let text =
    AnnouncementData.link !== null ? (
      <a href={AnnouncementData.link} rel="noopener noreferrer" target="_blank">
        <P>{AnnouncementData.announcement}</P>
      </a>
    ) : (
      <P>{AnnouncementData.announcement}</P>
    );
  if (AnnouncementData.announcement)
    return (
      <DivContainer>
        <Div>
          {text}
          {img}
        </Div>
        <DivBorder />
      </DivContainer>
    );
  else return <DivContainer />;
};

export default Map;
