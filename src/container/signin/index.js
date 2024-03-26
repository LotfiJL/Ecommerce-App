import React from "react";
import Layout from "../../componenets/Layout";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../componenets/UI/Input";
function Signin() {
  return (
    <Layout>
      <Row style={{ marginTop: "50px" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Container>
            <Form>
              <Col>
                <Input
                  Label="E-mail"
                  placeholder="Enter your email "
                  type="email"
                  value=""
                  onchange={() => {}}
                />
              </Col>

              <Col>
                <Input
                  Label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value=""
                  onchange={() => {}}
                />
              </Col>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Layout>
  );
}

export default Signin;
