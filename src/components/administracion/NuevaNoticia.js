import React, { Fragment, useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import Categoria from "./Categoria";
const NuevaNoticia = () => {
  const URL = process.env.REACT_APP_API_URL;

  const [tituloNoticia, setTituloNoticia] = useState("");
  const [tituloExtNoticia, setTituloExtNoticia] = useState("");
  const [imagenNoticia, setImagenNoticia] = useState("");
  const [descripcionImagenNoticia, setDescripcionImagenNoticia] = useState("");
  const [fechaYHoraNoticia, setFechaYHoraNoticia] = useState("");
  const [autorNoticia, setAutorNoticia] = useState("");
  const [categoriaNoticia, setCategoriaNoticia] = useState("");
  const [descripcionPequeñaNoticia, setDescripcionPequeñaNoticia] =
    useState("");
  const [cuerpoNoticia, setCuerpoNoticia] = useState("");

  const [error, setError] = useState(false);
  const handleSubmit = (e) => {};

  return (
    <Fragment>
      <Container className="my-4">
        <Row>
          <Col>
            <p className="font-weight-bold display-4">Administrador</p>
          </Col>
          <Col>
            <p className="text-danger display-4">Nueva Noticia</p>
          </Col>
          <Col className="d-flex align-self-center justify-content-end">
            <Button size="lg" type="submit" variant="dark">
              Guardar
            </Button>
          </Col>
        </Row>
        {error === true ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  onChange={(e) => setTituloNoticia(e.target.value)}
                  value={tituloNoticia}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={8}>
              <Form.Group>
                <Form.Label>Titulo extendido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo extendido"
                  onChange={(e) => setTituloExtNoticia(e.target.value)}
                  value={tituloExtNoticia}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Direccion imagen"
                  onChange={(e) => setImagenNoticia(e.target.value)}
                  value={imagenNoticia}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={8}>
              <Form.Group>
                <Form.Label>Descripcion de imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripcion de imagen"
                  onChange={(e) => setDescripcionImagenNoticia(e.target.value)}
                  value={descripcionImagenNoticia}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Fecha y hora</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1 de Enero 2020, 20:45"
                  onChange={(e) => setFechaYHoraNoticia(e.target.value)}
                  value={fechaYHoraNoticia}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col >
              <Form.Group>
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Autor"
                  onChange={(e) => setAutorNoticia(e.target.value)}
                  value={autorNoticia}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Categoria"
                  onChange={(e) => setCategoriaNoticia(e.target.value)}
                  value={categoriaNoticia}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Cuerpo de la noticia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cuerpo de la noticia"
              onChange={(e) => setCuerpoNoticia(e.target.value)}
              value={cuerpoNoticia}
              as="textarea"
              rows="6"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Container>
    </Fragment>
  );
};

export default NuevaNoticia;
