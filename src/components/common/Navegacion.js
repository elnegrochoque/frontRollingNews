import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, NavDropdown, Button, Modal, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navegacion.css";

import Swal from 'sweetalert2';

const Navegacion = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [showSus, setShowSus] = useState(false);
  const handleCloseSus = () => setShowSus(false);
  const handleShowSus = () => {
    setShowSus(true);
  }
  const [sesionAbierta, setSesionAbierta] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {

    setShow(true);
  }
  const acceso = (e) => {
    e.preventDefault();
    if (email === "email@gmail.com" && contraseña === "contraseña") {

      setSesionAbierta(true);
      handleClose();
    } else {
      Swal.fire(
        'Acceso denegado',
        'Ususario o contraseña no valido',
        'error'
      )

    }
  }
  useEffect(() => {
    if (sesionAbierta) {
      document.getElementById("linkAdministracion").setAttribute('class', 'nav-link')
      document.getElementById("botonLogin").setAttribute('class', 'd-none')
      document.getElementById("botonCerrarSesion").setAttribute('class', 'mr-5')
     
    } else {
      document.getElementById("linkAdministracion").setAttribute('class', 'nav-link d-none')
      document.getElementById("botonLogin").setAttribute('class', 'mr-5')
      document.getElementById("botonCerrarSesion").setAttribute('class', 'd-none')
      
    }


  }, [sesionAbierta]);


  // if (document.getElementById("botonCerrarSesion").getAttribute('class')==="invisible") {
  //   console.log("hola")
  // }
  const cerrarSesion = (e) => {
    e.preventDefault();

    setSesionAbierta(false);
    handleClose();
  }
  const exitoSuscripcion=(e)=>{
    e.preventDefault();
    
    Swal.fire(
      'Suscripto',
      'Sus datos fueron registrados, nos pondremos en contacto con usted',
      'success'
    )
  }
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
              <NavLink exact={true} to="/espectaculos" className="dropdown-item">
                Espectáculos
              </NavLink>
              <NavLink exact={true} to="/economia" className="dropdown-item">
                Economía
              </NavLink>
              <NavLink exact={true} to="/salud" className="dropdown-item">
                Salud
              </NavLink>
              <NavLink exact={true} to="/fotografia" className="dropdown-item">
                Fotografía
              </NavLink>
            </NavDropdown>
            <NavLink id="linkAdministracion" exact={true} to="/admin" className="nav-link d-none" >
              Administracion
            </NavLink>
          </Nav>
          <Form className="ml-auto" inline>
            <div id="botonCerrarSesion" className="mr-3 d-none" >
              <Button variant="primary" onClick={cerrarSesion}>
                Cerrar sesion
            </Button>
            </div>
            <div id="botonLogin" className="mr-3" >

              <Button variant="danger" className="mr-3" onClick={handleShow}>
                Login
            </Button>
            </div>


            <Button variant="primary" onClick={handleShowSus} >
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
          <Form onSubmit={acceso}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingresa tu Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                No compartiremos tu dirección de email con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Ingresa tu Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)} />
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
            <Form.Row>
              <Col>
                <Form.Control placeholder="Nombre" />
              </Col>
              <Col>
                <Form.Control placeholder="Apellido" />
              </Col>
            </Form.Row>
            <Form.Group controlId="formGridAddress1" className="py-2">
              <Form.Control placeholder="Dirección" />
            </Form.Group>
            <Form.Group controlId="formGridCity">
              <Form.Control placeholder="Localidad" />
            </Form.Group>
            <Form.Group controlId="formGridZip">
              <Form.Control placeholder="Código Postal" />
            </Form.Group>
            <Form.Group controlId="formGridNumber">
              <Form.Control placeholder="Teléfono" />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="Ingresa tu Email" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={exitoSuscripcion}>
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>

  );

};

export default Navegacion;
