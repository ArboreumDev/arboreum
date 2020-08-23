import React from "react";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import LogoDark from "../../Assets/img/logo/ArboreumLogoDark.svg";
import LogoLight from "../../Assets/img/logo/ArboreumLogoLight.svg";
import {animateScroll as scroll} from "react-scroll";
import styled from "styled-components";
import { withRouter, NavLink } from 'react-router-dom';
const LogoImage = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
  margin: 0 20px;
  @media (max-width: 420px) {
    height: 25px;
  }
`;

class ColorNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.body.scrollTop > 50
    ) {
      this.setState({
        bgType: "dark",
        navbarColor: "bg-dark"
      });
    } else if (
      document.documentElement.scrollTop < 55 ||
      document.body.scrollTop < 55
    ) {
      this.setState({
        bgType: "light",
        navbarColor: "navbar-transparent"
      });
    }
  };
  render() {
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand id="tooltip6619950104">
                  <LogoImage
                      src={LogoLight}
                      alt="Arboreum Logo"
                      onClick={() => {
                          scroll.scrollToTop();
                      }}
                  />
              </NavbarBrand>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="/" onClick={e => e.preventDefault()}>
                        <LogoImage
                            src={LogoLight}
                            alt="Arboreum Logo"
                            onClick={() => {
                                scroll.scrollToTop();
                            }}
                        />
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown nav>
                      <Button
                          style={{color:"#FFFFFF", borderColor: "#FFFFFF", alignContent:'center'}}
                          className="btn-link"
                          color="default"
                          href="http://localhost:3000/"
                          size="sm"
                          target="_blank"
                      >
                          <p style={{color:"#FFFFFF", borderColor: "#FFFFFF",fontSize: '18px',fontWeight: 500}}>
                              Loans
                          </p>
                      </Button>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                      <Button
                          style={{color:"#FFFFFF", borderColor: "#FFFFFF"}}
                          className="btn-link"
                          color="default"
                          href="http://localhost:3000/"
                          size="sm"
                          target="_blank"
                      >
                          <p style={{color:"#FFFFFF", borderColor: "#FFFFFF",fontSize: '18px',fontWeight: 500}}>
                              Invest
                          </p>
                      </Button>
                  </UncontrolledDropdown>
                <NavItem>
                    <Button
                        style={{color:"#FFFFFF", borderColor: "#FFFFFF"}}
                        className="btn-link"
                        color="default"
                        href="/login"
                        size="sm"
                        target="_self"
                    >
                        <div style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <p style={{color:"#FFFFFF", borderColor: "#FFFFFF",fontSize: '18px',fontWeight: 500}}>
                                Log In
                            </p>
                        </div>
                    </Button>
                    <Button
                      className="animation-on-hover"
                      color={this.state.bgType === 'dark'? "success" : "default"}
                      size="sm"
                      target="_self"
                      href="/register"
                    >
                        <div style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <p style={{color:"#FFFFFF", borderColor: "#FFFFFF",fontSize: '18px',fontWeight: 500}}>
                                Sign Up
                            </p>
                        </div>
                    </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(ColorNavbar);
