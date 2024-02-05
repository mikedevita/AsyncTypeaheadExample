import React from "react";
import { Navbar, Container, } from "react-bootstrap";

export function Header() {
  return (
    <div id="Header">
      <Navbar expand="lg" bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href="/">DemoApp</Navbar.Brand>
          <Navbar />
        </Container>
      </Navbar>
    </div>
  );
}
