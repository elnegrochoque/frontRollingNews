import React from "react";
import {Navbar, Nav, Form, NavDropdown, FormControl, Button} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const Navegacion = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="">
      <Navbar.Brand href="#home">Rolling News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Actualidad</Nav.Link>
          <Nav.Link href="#">Espectáculos</Nav.Link>
          <Nav.Link href="#">Deportes</Nav.Link>
          <Nav.Link href="#">Tecnología</Nav.Link>
          <NavDropdown title="Mas Secciones" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Política</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Economía</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Salud</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Fotografía</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="ml-auto" inline>
          <Button variant="danger" className="mr-3">Login</Button>
          <Button variant="primary">Suscripción</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
