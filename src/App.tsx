import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Element } from "react-scroll";
import Header from "./Header/";
import Announcement from "./Announcement/";
import HeroBanner from "./HeroBanner/";
import ProductIntro from "./ProductIntro/";
import Features from "./Features/";
import Partnership from "./Partnership/";
import Team from "./Team/";
import Footer from "./Footer/";
import ColorNavbar from "./Components/Navbars/ColorNavbar";
import FeatureOne from "./Components/Features/FeatureOne";
import FeatureTwo from "./Components/Features/FeatureTwo";
import FeatureThree from "./Components/Features/FeatureThree";
import FeatureFour from "./Components/Features/FeatureFour";
import FeatureFive from "./Components/Features/FeatureFive";
import FeatureSix from "./Components/Features/FeatureSix";
import SectionOne from "./Components/Sections/SectionOne";
import SectionTwo from "./Components/Sections/SectionTwo";
import SectionThree from "./Components/Sections/SectionThree";
import SectionFour from "./Components/Sections/SectionFour";


const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-size: 16px;
    color:#252D44;
    margin: 0;
    padding: 0;
  }
  
  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 48px;
    line-height: 1.25;
    margin:0 0 10px 0;
    font-weight: normal;
  }

  h2 {
    font-size: 30px;
    line-height: 1.25;
    margin:0 0 10px 0;
    font-weight: normal;
  }

  h3 {
    font-weight: normal;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
  }

  h4 {
    font-weight: bold;
    font-size: 16px;
  }

  .bold {
    font-weight: bold;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 880px) {
    
    h1 {
      font-size: 36px;
    }
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

function App() {
  return (
      <AppContainer>
          <GlobalStyles />
          <ColorNavbar />
          <HeroBanner />
          <Element name="section2">
              <SectionTwo/>
          </Element>
          {/*<Element name="section1">
              <ProductIntro />
          </Element>*/}
          <Element name="section4">
              <FeatureTwo />
          </Element>
          <Element name="section3">
              <FeatureSix />
          </Element>
          <FeatureFour />
          {/*<Element name="section1">
              <ProductIntro />
          </Element>
          <Element name="section2">
              <Features />
          </Element>
          <Element name="section3">
              <Partnership />
          </Element>
          <Element name="section4">
              <Team />
          </Element>*/}
          <Footer />
      </AppContainer>
  );
}



// @ts-ignore
export default App;
