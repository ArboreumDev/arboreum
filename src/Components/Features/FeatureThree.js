import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

class FeatureThree extends React.Component {
    render() {
        return (
            <>
                <div className="cd-section" id="features">
                    {/* ********* FEATURES 3 ********* */}
                    <div className="features-3">
                        <Container fluid>
                            <Row>
                                <Col className="mr-auto ml-auto" md="6">
                                    <h1 className="title">Trello lets you work more.</h1>
                                    <h4 className="description">
                                        Trello’s boards, lists, and cards enable you to organize and
                                        prioritize your projects in a fun, flexible and rewarding
                                        way.
                                    </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ml-auto" md="5">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-success">
                                            <img
                                                alt="..."
                                                className="bg-blob"
                                                src={require("../../Assets/img/feature-blob/success.png")}
                                            />
                                            <i className="tim-icons icon-html5" />
                                        </div>
                                        <div className="description">
                                            <h3 className="info-title">For Developers</h3>
                                            <p>
                                                The moment you use Black Kit, you know you’ve never felt
                                                anything like it. With a single use, this powerfull UI
                                                Kit lets you do more than ever before.
                                            </p>
                                            <Button
                                                className="btn-link"
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Explore now{" "}
                                                <i className="tim-icons icon-minimal-right" />
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mr-auto" md="5">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-warning">
                                            <img
                                                alt="..."
                                                className="bg-blob"
                                                src={require("../../Assets/img/feature-blob/warning.png")}
                                            />
                                            <i className="tim-icons icon-heart-2" />
                                        </div>
                                        <div className="description">
                                            <h3 className="info-title">For Designers</h3>
                                            <p>
                                                The moment you use Black Kit, you know you’ve never felt
                                                anything like it. With a single use, this powerfull UI
                                                Kit lets you do more than ever before.
                                            </p>
                                            <Button
                                                className="btn-link"
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Explore now{" "}
                                                <i className="tim-icons icon-minimal-right" />
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ml-auto" md="5">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-danger">
                                            <img
                                                alt="..."
                                                className="bg-blob"
                                                src={require("../../Assets/img/feature-blob/danger.png")}
                                            />
                                            <i className="tim-icons icon-chart-bar-32" />
                                        </div>
                                        <div className="description">
                                            <h3 className="info-title">For Bootstrap Lovers</h3>
                                            <p>
                                                The moment you use Black Kit, you know you’ve never felt
                                                anything like it. With a single use, this powerfull UI
                                                Kit lets you do more than ever before.
                                            </p>
                                            <Button
                                                className="btn-link"
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Explore now{" "}
                                                <i className="tim-icons icon-minimal-right" />
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mr-auto" md="5">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-info">
                                            <img
                                                alt="..."
                                                className="bg-blob"
                                                src={require("../../Assets/img/feature-blob/info.png")}
                                            />
                                            <i className="tim-icons icon-paper" />
                                        </div>
                                        <div className="description">
                                            <h3 className="info-title">
                                                Documentation{" "}
                                                <Badge color="info" pill>
                                                    v2.0
                                                </Badge>
                                            </h3>
                                            <p>
                                                The moment you use Black Kit, you know you’ve never felt
                                                anything like it. With a single use, this powerfull UI
                                                Kit lets you do more than ever before.
                                            </p>
                                            <Button
                                                className="btn-link"
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Explore now{" "}
                                                <i className="tim-icons icon-minimal-right" />
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>{" "}
            </>
        );
    }
}

export default FeatureThree;
