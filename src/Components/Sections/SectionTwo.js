import React from "react";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Pagination,
    PaginationItem,
    PaginationLink,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class SectionTwo extends React.Component {
    state = {
        activeTab: "1"
    };
    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };
    render() {
        return (
            <>
                <div className="cd-section" id="projects">
                    {/* ********* PROJECTS 2 ********* */}
                    <div className="projects-2 project-raised">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto text-center mb-5" lg="8">
                                    <h2 className="title">Health insurance is your right, get covered in 5 mins</h2>
                                    <div className="section-space" />
                                </Col>
                            </Row>
                            <Nav
                                className="nav-pills-info nav-pills-icons nav-pills-lg"
                                pills
                                role="tablist"
                            >
                                <NavItem className="m-auto" style={{width:'200px'}}>
                                    <NavLink
                                        className={this.state.activeTab === "1" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("1");
                                        }}
                                    >
                                        <img style={{width:'40px', height:'60px', marginBottom:'10px'}}
                                             src={require("../../Assets/img/section-pics/wallet.svg")}/>
                                        <h6>Loans</h6>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="m-auto" style={{width:'200px'}}>
                                    <NavLink
                                        className={this.state.activeTab === "2" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("2");
                                        }}
                                    >
                                        <img style={{width:'40px', height:'60px', marginBottom:'10px'}}
                                             src={require("../../Assets/img/section-pics/flower.svg")}/>
                                        <h6>Investments</h6>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="m-auto" style={{width:'200px'}}>
                                    <NavLink
                                        className={this.state.activeTab === "3" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("3");
                                        }}
                                    >
                                        <img style={{width:'40px', height:'60px', marginBottom:'10px'}}
                                             src={require("../../Assets/img/section-pics/phone.svg")}/>
                                        <h6>Payments</h6>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="m-auto" style={{width:'200px'}}>
                                    <NavLink
                                        className={this.state.activeTab === "4" ? "active" : ""}
                                        onClick={() => {
                                            this.toggle("4");
                                        }}
                                    >
                                        <img style={{width:'40px', height:'60px', marginBottom:'10px'}}
                                             src={require("../../Assets/img/section-pics/care.svg")}/>
                                        <h6>Insurance</h6>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent
                                className="tab-space"
                                activeTab={"project" + this.state.activeTab}
                            >
                                <TabPane tabId="project1" style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
                                    <Row className="mt-5">
                                        <div className="content-center" style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                                            <Container>
                                                <Row className="align-items-center text-left">
                                                    <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                                                        <h1 className="title">Loans<br />
                                                            <strong className="text-warning">Arboreum Credit</strong>
                                                        </h1>
                                                        <p className="description">
                                                            Get simple and easy access to funds.
                                                            We all need to take a little credit for our hard work sometimes.
                                                        </p>
                                                    </Col>
                                                    <Col className="ml-auto mr-auto" lg="3" md="8" xs="12">
                                                        <img
                                                            src={require("../../Assets/img/section-pics/wallet.svg")}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="project2">
                                    <Row className="mt-5">
                                        <div className="content-center" style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                                            <Container>
                                                <Row className="align-items-center text-left">
                                                    <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                                                        <h1 className="title">Investment<br />
                                                            <strong className="text-warning">Arboreum Notes</strong>
                                                        </h1>
                                                        <p className="description">
                                                            Invest the smart way on Arboreum Notes. Get access to our loan book
                                                            and see exactly how your investment is used and your accrued interest.
                                                        </p>
                                                    </Col>
                                                    <Col className="ml-auto mr-auto" lg="3" md="8" xs="12">
                                                        <img
                                                            src={require("../../Assets/img/section-pics/flower.svg")}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="project3">
                                    <Row className="mt-5">
                                        <div className="content-center" style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                                            <Container>
                                                <Row className="align-items-center text-left">
                                                    <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                                                        <h1 className="title">Payments<br />
                                                            <strong className="text-warning">Arboreum Bill payments</strong>
                                                        </h1>
                                                        <p className="description">
                                                            Bill payments made easy. Pay for anything, anytime, anywhere via the Arboreum app.
                                                        </p>
                                                    </Col>
                                                    <Col className="ml-auto mr-auto" lg="3" md="8" xs="12">
                                                        <img src={require("../../Assets/img/section-pics/phone.svg")}/>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="project4">
                                    <Row className="mt-5">
                                        <div className="content-center" style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                                            <Container>
                                                <Row className="align-items-center text-left">
                                                    <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                                                        <h1 className="title">Insurance<br />
                                                            <strong className="text-warning">Arboreum Care</strong>
                                                        </h1>
                                                        <p className="description">
                                                            You deserve more out of life for less. Get covered. Get affordable insurance plans via Arboreum.
                                                        </p>
                                                    </Col>
                                                    <Col className="ml-auto mr-auto" lg="3" md="8" xs="12">
                                                        <img
                                                            src={require("../../Assets/img/section-pics/care.svg")}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Container>
                    </div>
                    {/* ********* END PROJECTS 2 ********* */}
                </div>{" "}
            </>
        );
    }
}

export default SectionTwo;
