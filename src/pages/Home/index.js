import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Header, Title } from "./styles";

export default () => {
  return (
    <Fragment>
      <Header>
        <Container>
          <Title>Covid-19</Title>
          <Row>
            <Col>
              <span>Síntomas</span>
              <p>
                Las personas pueden estar enfermas con el virus durante 1 a 14
                días antes de desarrollar síntomas.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Header>
    </Fragment>
  );
};
