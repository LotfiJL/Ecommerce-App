import React from "react";
import Layout from "../../componenets/Layout";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../componenets/UI/Input";

function Signup() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    Label="First Name"
                    placeholder="First Name"
                    type="text"
                    value=""
                    onchange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    Label="Last Name"
                    placeholder="Last Name"
                    type="text"
                    value=""
                    onchange={() => {}}
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Col>
                  <Input
                    Label="email"
                    placeholder="email"
                    type="email"
                    value=""
                    onchange={() => {}}
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Col>
                  <Input
                    Label="password"
                    placeholder="password"
                    type="password"
                    value=""
                    onchange={() => {}}
                  />
                </Col>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signup;
