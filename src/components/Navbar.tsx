import React from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';

const MainNavbar: React.FC = () => {
  return (
    <Navbar
      className="mb-4"
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">DoctoBob</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar;