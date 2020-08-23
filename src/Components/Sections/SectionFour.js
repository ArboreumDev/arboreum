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

class SectionFour extends React.Component {
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
                    {/* ********* PROJECTS 4 ********* */}
                    <div className="projects-4">
                        <Container>
                            <Row>
                                <Col className="mr-auto ml-auto text-center" md="8">
                                    <h6 className="category text-muted">Our work</h6>
                                    <h2 className="title mt-0">
                                        Some of Our Awesome Projects - 4
                                    </h2>
                                </Col>
                            </Row>
                            <div className="space-50" />
                            <Row>
                                <Col lg="4">
                                    <Card
                                        className="card-background"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("../../Assets/img/bg8.jpg") + ")"
                                        }}
                                    >
                                        <CardBody className="text-left">
                                            <h6 className="card-category">
                                                <i className="tim-icons icon-atom" />
                                            </h6>
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <CardTitle tag="h1">Project Alpha</CardTitle>
                                            </a>
                                            <h6 className="desc">Java App</h6>
                                            <Button
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Watch Later
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card
                                        className="card-background"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("../../Assets/img/bg7.jpg") + ")"
                                        }}
                                    >
                                        <CardBody className="text-left">
                                            <h6 className="card-category">
                                                <i className="tim-icons icon-camera-18" />
                                            </h6>
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <CardTitle tag="h1">Project Beta</CardTitle>
                                            </a>
                                            <h6 className="desc">College project</h6>
                                            <Button
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Watch Later
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card
                                        className="card-background"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("../../Assets/img/bg4.jpg") + ")"
                                        }}
                                    >
                                        <CardBody className="text-left">
                                            <h6 className="card-category">
                                                <i className="tim-icons icon-html5" />
                                            </h6>
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <CardTitle tag="h1">Project Gama</CardTitle>
                                            </a>
                                            <h6 className="desc">HTML code</h6>
                                            <Button
                                                color="warning"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Watch Later
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* ********* END PROJECTS 4 ********* */}
                </div>{" "}
            </>
        );
    }
}

export default SectionFour;
