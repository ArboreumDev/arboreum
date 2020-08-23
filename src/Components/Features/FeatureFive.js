import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

class FeatureFive extends React.Component {
    render() {
        return (
            <>
                <div className="cd-section" id="features">
                    {/* ********* FEATURES 5 ********* */}
                    <div className="features features-5">
                        <Container>
                            <Row className="align-items-center">
                                <Col lg="6">
                                    <div className="featured-image">
                                        <img
                                            alt="..."
                                            height="600"
                                            src={require("../../Assets/img/pawel-nolbert.jpg")}
                                            width="500"
                                        />
                                    </div>
                                </Col>
                                <Col className="mt-md-5" lg="6">
                                    <h6 className="category">Read this first</h6>
                                    <h1 className="title">Company values</h1>
                                    <Row>
                                        <Col lg="6" md="6">
                                            <div className="info">
                                                <h4 className="info-title">Honest</h4>
                                                <p className="description">
                                                    Gain access to the demographics, psychographics, and
                                                    location of unique people.
                                                </p>
                                            </div>
                                            <div className="info">
                                                <h4 className="info-title">Efficient</h4>
                                                <p className="description">
                                                    Gain access to the demographics, psychographics, and
                                                    location of unique people.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="6" md="6">
                                            <div className="info">
                                                <h4 className="info-title">Helpful</h4>
                                                <p className="description">
                                                    Gain access to the demographics, psychographics, and
                                                    location of unique people.
                                                </p>
                                            </div>
                                            <div className="info">
                                                <h4 className="info-title">Quality</h4>
                                                <p className="description">
                                                    Gain access to the demographics, psychographics, and
                                                    location of unique people.
                                                </p>
                                            </div>
                                        </Col>
                                        <Button
                                            className="btn-link ml-4"
                                            color="primary"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Why we are different{" "}
                                            <i className="tim-icons icon-double-right" />
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* ********* END FEATURES 5 ********* */}
                </div>{" "}
            </>
        );
    }
}

export default FeatureFive;
