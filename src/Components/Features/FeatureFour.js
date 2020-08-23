import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

class FeatureFour extends React.Component {
    render() {
        return (
            <>
                <div className="cd-section" id="features">
                    {/* ********* FEATURES 4 ********* */}
                    <div className="features-4">
                        <Container>
                            <Row className="align-items-center">
                                <Col className="mr-auto text-left" lg="3">
                                    <img style={{width:'60px', height:'60px'}} src={require('../../Assets/img/logo/fractalIcon.svg')}/>
                                    <h2 className="title">Introducing the world’s first fractal lending technology.</h2>
                                    <p className="description">
                                        Our technology de-risks loans by spreading principal across networks of trusted lenders, enabling both safer lending and more affordable borrowing.
                                        Arboreum networks are built on the basis of societal trust, making credit access possible even for the financially underserved.
                                    </p>
                                </Col>
                                <Col className="p-sm-0" lg="8">
                                    <Row>
                                        <Col md="6">
                                            <a
                                                href="mailto:enquiries@arboreum.dev"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="info info-primary" style={{border: '1px solid #fff'}}>
                                                    <div className="icon icon-white">
                                                        <i className="tim-icons icon-chart-bar-32" />
                                                    </div>
                                                    <h4 className="info-title">Request Pitchdeck</h4>
                                                    <p className="description">
                                                        Learn more about the challenges we face, our novel solution, and
                                                        our overall business strategy.
                                                    </p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col md="6">
                                            <a
                                                href="/assets/pdfFiles/WhitePaper.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="info info-primary" style={{border: '1px solid #fff'}}>
                                                    <div className="icon icon-white">
                                                        <i className="tim-icons icon-paper" />
                                                    </div>

                                                        <h4 className="info-title">Whitepaper</h4>
                                                    <p className="description">
                                                        Learn more about the technical concepts and details that power
                                                        our solution.
                                                    </p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* ********* END FEATURES 4 ********* */}
                </div>{" "}
            </>
        );
    }
}

export default FeatureFour;
