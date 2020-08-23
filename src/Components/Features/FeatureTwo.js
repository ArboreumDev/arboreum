import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

class FeatureTwo extends React.Component {
    render() {
        return (
            <>
                <div className="cd-section" id="features">
                    {/* ********* FEATURES 2 ********* */}
                    <div className="features-2">
                        <Container>
                            <Row className="align-items-center">
                                <Col className="mr-auto text-left" lg="3" md="8">
                                    <h2 className="title">Our technology enables safe, affordable & socially inclusive lending opportunities.</h2>
                                    {/*<p className="description">
                                        Our technology enables safe, affordable & socially inclusive lending opportunities.
                                    </p>*/}
                                    <Button
                                        className="btn-simple"
                                        color="info"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Learn more <i className="tim-icons icon-alert-circle-exc" />
                                    </Button>
                                </Col>
                                <Col lg="8" md="12">
                                    <Row>
                                        <Col lg="4" md="4">
                                            <div className="info text-left bg-info">
                                                <div className="icon icon-white">
                                                    <img style={{width:'60px', height:'60px'}} src={"https://www.arboreum.dev/assets/imgs/featureIcons/feature1.svg"}/>
                                                </div>
                                                <h4 className="info-title">Highly diversified portfolios</h4>
                                                <p className="description">
                                                    As loans are de-risked over a network, lenders benefit from a diversified basket of smaller loans.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="4">
                                            <div className="info text-left bg-danger info-raised">
                                                <div className="icon icon-white">
                                                    <img style={{width:'60px', height:'60px'}} src={"https://www.arboreum.dev/assets/imgs/featureIcons/feature2.svg"}/>
                                                </div>
                                                <h4 className="info-title">Strong repayment mechanism</h4>
                                                <p className="description">
                                                    As borrower's supporters are most exposed to a loan, there are significant social barriers to defaulting.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="4">
                                            <div className="info text-left bg-default">
                                                <div className="icon icon-white">
                                                    <img style={{width:'60px', height:'60px'}} src={"https://www.arboreum.dev/assets/imgs/featureIcons/feature3.svg"}/>
                                                </div>
                                                <h4 className="info-title">Optimised interest rates</h4>
                                                <p className="description">
                                                    Our framework can be configured to provide the best possible interest rates for either borrowers or lenders, depending on context.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="4" md="4">
                                            <div className="info text-left bg-primary">
                                                <div className="icon icon-white">
                                                    <img style={{width:'60px', height:'60px'}} src={"https://www.arboreum.dev/assets/imgs/featureIcons/feature4.svg"}/>
                                                </div>
                                                <h4 className="info-title">Works without traditional risk data</h4>
                                                <p className="description">
                                                    Formalising lending based on societal trust enables the financial inclusion of those marginalised by traditional risk models.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="4">
                                            <div className="info text-left bg-warning info-raised">
                                                <div className="icon icon-white">
                                                    <img style={{width:'60px', height:'60px'}} src={"https://www.arboreum.dev/assets/imgs/featureIcons/feature5.svg"}/>
                                                </div>
                                                <h4 className="info-title">Enables credit identity</h4>
                                                <p className="description">
                                                    Formalizing informal lending behaviour enables creation of credit identity for borrowers excluded by traditional financial institutions.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="4">
                                            <div className="info text-left bg-success">
                                                <div className="icon icon-default">
                                                    <img style={{width:'60px', height:'60px'}} src={"https://www.arboreum.dev/assets/imgs/featureIcons/feature6.svg"}/>
                                                </div>
                                                <h4 className="info-title text-muted">
                                                    Very low transaction costs
                                                </h4>
                                                <p className="description text-muted">
                                                    Algorithmic underwriting and DLT-enabled disbursal and collection processes ensure minuscule transaction costs.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* ********* END FEATURES 2 ********* */}
                </div>{" "}
            </>
        );
    }
}

export default FeatureTwo;
