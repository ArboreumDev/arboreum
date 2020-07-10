import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./assets/imgs/ArboreumLogoDark.svg";

const AppHeader = styled.header`
  box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 1000;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
  margin: 0 20px;
  @media (max-width: 420px) {
    height: 25px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  font-size: 18px;

  a {
    color: #9098a6;
    text-decoration: none;
    margin: 0 20px;
    cursor: pointer;
  }
  a:hover {
    color: #ed135a;
  }

  @media (max-width: 880px) {
    display: none;
  }
`;

const Button = styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 50px;
  border: 1px solid #ed135a;
  color: #ed135a;
  margin: 0 20px;
  box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;
  &:hover {
    color: #fff;
    background-color: #ed135a;
  }
  @media (max-width: 420px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const Map: React.FunctionComponent<{}> = () => {
  return (
    <AppHeader>
      <HeaderContainer>
        <LogoImage
          src={Logo}
          alt="Arboreum Logo"
          onClick={() => {
            scroll.scrollToTop();
          }}
        />
        <NavContainer>
          <Link to="section1" spy={true} smooth={true} duration={500}>
            Product
          </Link>
          <Link to="section2" spy={true} smooth={true} duration={500}>
            Features
          </Link>
          <Link to="section3" spy={true} smooth={true} duration={500}>
            Partnership
          </Link>
          <Link to="section4" spy={true} smooth={true} duration={500}>
            Team
          </Link>
        </NavContainer>
        <a
          href="mailto:enquiries@arboreum.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Request Demo</Button>
        </a>
      </HeaderContainer>
    </AppHeader>
  );
};

export default Map;
