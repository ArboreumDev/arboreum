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

class SectionThree extends React.Component {
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
                    {/* ********* PROJECTS 3 ********* */}
                    <div className="projects-3">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto text-center mb-5" md="8">
                                    <h6 className="category text-muted">Our work</h6>
                                    <h2 className="title mt-0">
                                        Some of Our Awesome Projects - 3
                                    </h2>
                                </Col>
                            </Row>
                            <div className="space-50" />
                            <Row>
                                <Col md="6">
                                    <Card className="card-blog card-plain">
                                        <CardHeader>
                                            <h2 className="title">Passions</h2>
                                            <Badge color="danger" className="mr-1">
                                                Methods
                                            </Badge>
                                            <Badge color="info">Purposes</Badge>
                                        </CardHeader>
                                        <div className="card-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="img rounded img-raised"
                                                    src={require("../../Assets/img/card-blog2.jpg")}
                                                />
                                            </a>
                                        </div>
                                        <CardFooter className="text-left">
                                            <div className="author">
                                                <Button
                                                    className="btn-round btn-simple"
                                                    color="primary"
                                                >
                                                    <i className="tim-icons icon-triangle-right-17" />
                                                    View project details
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card className="card-blog card-plain">
                                        <CardHeader>
                                            <h2 className="title">Habits</h2>
                                            <Badge color="success">Informations</Badge>
                                        </CardHeader>
                                        <div className="card-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="img rounded img-raised"
                                                    src={require("../../Assets/img/chester-wade.jpg")}
                                                />
                                            </a>
                                        </div>
                                        <CardFooter className="text-left">
                                            <div className="author">
                                                <Button
                                                    className="btn-round btn-simple"
                                                    color="success"
                                                >
                                                    Find out more
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                            <div className="space-50" />
                            <Row>
                                <Col md="6">
                                    <Card className="card-blog card-plain">
                                        <CardHeader>
                                            <h2 className="title">Sport</h2>
                                            <Badge color="warning" className="mr-1">
                                                Healthy
                                            </Badge>
                                            <Badge color="primary">Young</Badge>
                                        </CardHeader>
                                        <div className="card-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="img rounded img-raised"
                                                    src={require("../../Assets/img/fabien-bazanegue.jpg")}
                                                />
                                            </a>
                                        </div>
                                        <CardFooter className="text-left">
                                            <div className="author">
                                                <Button
                                                    className="btn-round btn-simple"
                                                    color="warning"
                                                >
                                                    Read more
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card className="card-blog card-plain">
                                        <CardHeader>
                                            <h2 className="title">Nights</h2>
                                            <Badge color="success" className="mr-1">
                                                City
                                            </Badge>
                                            <Badge color="info" className="mr-1">
                                                Urban
                                            </Badge>
                                            <Badge color="warning">Traffic</Badge>
                                        </CardHeader>
                                        <div className="card-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="img rounded img-raised"
                                                    src={require("../../Assets/img/mark-finn.jpg")}
                                                />
                                            </a>
                                        </div>
                                        <CardFooter className="text-left">
                                            <div className="author">
                                                <Button className="btn-round btn-simple" color="info">
                                                    <i className="tim-icons icon-minimal-right" />
                                                    Go to page
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* ********* END PROJECTS 3 ********* */}
                </div>{" "}
            </>
        );
    }
}

export default SectionThree;
