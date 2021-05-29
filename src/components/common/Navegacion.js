import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, NavDropdown, Button, Modal } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import "./Navegacion.css";


const Navegacion = () => {
  const [showSus, setShowSus] = useState(false);
  const handleCloseSus = () => setShowSus(false);
  const handleShowSus = () => setShowSus(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="margin-t-b">
      <Navbar

        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="navegacion"
      >
        <Navbar.Brand href="/">Rolling News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact={true} to="/actualidad" className="nav-link">
              Actualidad
            </NavLink>
            <NavLink exact={true} to="/deportes" className="nav-link">
              Deportes
            </NavLink>
            <NavLink exact={true} to="/tecnologia" className="nav-link">
              Tecnología
            </NavLink>
            <NavLink exact={true} to="/politica" className="nav-link">
              Política
            </NavLink>

            <NavDropdown title="Mas Secciones" id="basic-nav-dropdown">
              <NavLink exact={true}  to="/espectaculos" className="dropdown-item">
                Espectáculos
              </NavLink>
              <NavLink exact={true}  to="/economia" className="dropdown-item">
                Economía
              </NavLink>
              <NavLink exact={true}  to="/salud" className="dropdown-item">
                Salud
              </NavLink>
              <NavLink exact={true}  to="/fotografia" className="dropdown-item">
                Fotografía
              </NavLink>
            </NavDropdown>
            <NavLink exact={true} to="/admin" className="nav-link">
              Administracion
            </NavLink>
          </Nav>
          <Form className="ml-auto" inline>
            <Button variant="danger" className="mr-3" onClick={handleShow}>
              Login
            </Button>
            <Button variant="primary" onClick={handleShowSus}>
              Suscripción
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresa!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingresa tu Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                No compartiremos tu dirección de email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ingresa tu Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresa
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSus} onHide={handleCloseSus}>
        <Modal.Header closeButton>
          <Modal.Title>Suscríbete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingresa tu Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                No compartiremos tu dirección de email con nadie.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navegacion;
