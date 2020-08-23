import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

class FeatureSix extends React.Component {
    render() {
        return (
            <>
                <div className="cd-section" id="features">
                    {/* ********* FEATURES 6 ********* */}
                    <div className="features-6">
                        <Container>
                            <Row className="align-items-center">
                                <Col lg="6">
                                    <div className="info info-horizontal info-default">
                                        <div className="icon icon-warning">
                                            <i className="tim-icons icon-planet" />
                                        </div>
                                        <div className="description">
                                            <h3 className="info-title">For P2P platforms</h3>
                                            <p>
                                                Arboreum AI improves risk management of lender portfolios, allowing for the inclusion of riskier borrowers into your network.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal info-default">
                                        <div className="icon icon-info">
                                            <i className="tim-icons icon-badge" />
                                        </div>
                                        <div className="description">
                                            <h3 className="info-title">For Employers</h3>
                                            <p>
                                                Arboreum builds and manages company-only credit unions of lenders, borrowers, and supporters, creating a loan benefit for employees
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal info-default">
                                        <div className="icon icon-success">
                                            <i className="tim-icons icon-money-coins" />
                                        </div>
                                        <div className="description">
                                            <h3 className="info-title">For Pro Social Investors</h3>
                                            <p>
                                                Arboreum invests your funds in low income communities; e.g. farmers and cleaners, consisting of borrowers and supporters
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6" xs="10">
                                    <img
                                        alt="..."
                                        className="shape"
                                        src={require("../../Assets/img/path2.png")}
                                    />
                                    <figure className="ie-non-standard-hero-shape">
                                        <svg
                                            className="injected-svg js-svg-injector"
                                            style={{ enableBackground: "new 10 12 878.9 907" }}
                                            viewBox="10 12 878.9 907"
                                            x="0px"
                                            y="0px"
                                            xmlSpace="preserve"
                                        >
                                            <g>
                                                <defs>
                                                    <path
                                                        d="M329.15,403.44c30.22-62,26.51-223.94,94.06-268.46C479,98.23,560.16,257,700.68,151.61c71.25-53.44,85.54,81,160.38,172.6C1008.5,504.74,881.5,639.14,825.35,686.6c-62.54,52.85-246.14,24.42-386.7,79.28S214.07,834,202.07,702C190.39,573.57,288.69,486.43,329.15,403.44Z"
                                                        id="firstShape"
                                                    />
                                                </defs>
                                                <clipPath id="secondShape">
                                                    <use
                                                        style={{ overflow: "visible" }}
                                                        xlinkHref="#firstShape"
                                                    />
                                                </clipPath>
                                                <g clipPath="url(#secondShape)">
                                                    <image
                                                        height="900"
                                                        id="imageShape1"
                                                        style={{ overflow: "visible" }}
                                                        transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                                                        width="900"
                                                        xlinkHref={require("../../Assets/img/max.jpg")}
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <defs>
                                                    <path
                                                        d="M337.17,855.62c-7.81-35.46,42.38-43.95,63.66-52.44,24.39-9.74,135.86-48,192.58-52.52,64.22-5.13,190.21-26.84,160.46,35.34-19.76,41.3-51.47,64.52-87.63,62.33-46.36-2.81-101.56,4.39-150.8,44C448.53,946.08,450.93,865,412,868,372.28,871,340.79,872.08,337.17,855.62Z"
                                                        id="thirdShape"
                                                    />
                                                </defs>
                                                <clipPath id="fourthShape">
                                                    <use
                                                        style={{ overflow: "visible" }}
                                                        xlinkHref="#thirdShape"
                                                    />
                                                </clipPath>
                                                <g
                                                    clipPath="url(#fourthShape)"
                                                    transform="matrix(1 0 0 1 0 0)"
                                                >
                                                    <image
                                                        height="1000"
                                                        id="imageShape2"
                                                        style={{ overflow: "visible" }}
                                                        transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                                                        width="900"
                                                        xlinkHref={require("../../Assets/img/max.jpg")}
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </figure>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* ********* END FEATURES 6 ********* */}
                </div>{" "}
            </>
        );
    }
}

export default FeatureSix;
