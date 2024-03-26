import React from "react";
import Header from "../Header/index";
import { Container } from "react-bootstrap";

function Layout(props) {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
}

export default Layout;
