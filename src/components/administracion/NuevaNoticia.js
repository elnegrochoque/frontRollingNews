import React, { Fragment, useState } from "react";
import { Container, Form, Button, Alert, Row, Col, Dropdown, DropdownButton, ButtonGroup, FormGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import Categoria from "./Categoria";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
const NuevaNoticia = (props) => {
  const URL = process.env.REACT_APP_API_URL;

  const [tituloNoticia, setTituloNoticia] = useState("");
  const [tituloExtNoticia, setTituloExtNoticia] = useState("");
  const [imagenNoticia, setImagenNoticia] = useState("");
  const [descripcionImagenNoticia, setDescripcionImagenNoticia] = useState("");
  const [fechaNoticia, setFechaNoticia] = useState("");
  const [horaNoticia, setHoraNoticia] = useState("");
  const [autorNoticia, setAutorNoticia] = useState("");
  const [categoriaNoticia, setCategoriaNoticia] = useState("");
  const [descripcionPequeñaNoticia, setDescripcionPequeñaNoticia] = useState("");
  const [cuerpoNoticia, setCuerpoNoticia] = useState("");
  const [tituloDropdownCategoria, setTituloDropdownCategoria] = useState("categoria");
  const [error, setError] = useState(false);

  const cadaCategoria = [];
  for (const i in props.noticias) {
    cadaCategoria.push(props.noticias[i].categoria)
  }

  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const categoriasSinRepetir = cadaCategoria.filter(unique)
  console.log(categoriasSinRepetir);

  const cambiarCategoria = (e) => {
    setTituloDropdownCategoria(e.target.name);
    setCategoriaNoticia(e.target.name);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hola")
    //  validar los datos
    if (tituloNoticia.trim() === ''
      || tituloExtNoticia.trim() === ''
      || imagenNoticia.trim() === ''
      || descripcionImagenNoticia.trim() === ''
      || fechaNoticia.trim() === ''
      || horaNoticia.trim() === ''
      || autorNoticia.trim() === ''
      || descripcionPequeñaNoticia.trim() === ''
      || cadaCategoria === '') {
      // mostrar el cartel de error
      setError(true);
      return;
    } else {
      // quitar cartel de error
      setError(false);

      // crear el objeto a enviar
      const datos = {
        tituloNoticia: tituloNoticia,
        tituloExtendido: tituloExtNoticia,
        urlImagen: imagenNoticia,
        descripcionImagen: descripcionImagenNoticia,
        fecha: fechaNoticia,
        hora: horaNoticia,
        autor: autorNoticia,
        categoria: categoriaNoticia,
        descripcionNoticia: descripcionPequeñaNoticia,
        cuerpoNoticia: cuerpoNoticia,

      };
      console.log(datos);

      //enviar objetoa la api, operacion POST
      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datos)
        };
        // ejecutar la solicitud o request
        const respuesta = await fetch(URL, parametros);

        if ((await respuesta.status) === 201) {
          Swal.fire(
            'Producto agregado',
            'Se carga un nuevo producto a la cafeteria',
            'success'
          )
          //limpiar el formulario
          //       setNombreProducto('');
          //       setPrecioProducto('');
          //       setCategoria('');
          // redireccionar a otra ruta
          props.consultarAPI();
          props.history.push('/admin')
        }
      } catch (error) {
        console.log(error);
      }
    }
    // enviar el producto a la api
  };

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

        </Row>
        {error === true ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <Form onSubmit={handleSubmit}>
          <Col className="d-flex align-self-center justify-content-end">

          </Col>
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
                <Form.Label>Fecha </Form.Label>
                <Form.Control
                  type="date"
                
                  onChange={(e) => setFechaNoticia(e.target.value)}
                  value={fechaNoticia}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group>
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="20:45"
                  onChange={(e) => setHoraNoticia(e.target.value)}
                  value={horaNoticia}
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
              <Form.Label>Elija categoria</Form.Label>
              <DropdownButton id="dropdown-basic-button" variant="dark" title={tituloDropdownCategoria} size="lg"
              >
                {categoriasSinRepetir.map((cat, index) => (
                  <DropdownItem key={index}
                    name={categoriasSinRepetir[index]}
                    value={categoriasSinRepetir[index]}
                    onClick={(e) => cambiarCategoria(e)}>

                    {categoriasSinRepetir[index]}
                  </DropdownItem>
                )
                )
                }

              </DropdownButton>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Descripcion pequeña de la noticia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripcion pequeña de la noticia"
                  onChange={(e) => setDescripcionPequeñaNoticia(e.target.value)}
                  value={descripcionPequeñaNoticia}
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
          <FormGroup className="text-center">
            <Button size="lg" type="submit" variant="dark">
              Guardar
          </Button>
          </FormGroup>

        </Form>
      </Container>
    </Fragment>
  );
};

export default withRouter (NuevaNoticia);
