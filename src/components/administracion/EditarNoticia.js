import React, { Fragment, useEffect, useState, useRef } from "react";
import { Container, Form, Button, Alert, Row, Col, DropdownButton, FormGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import{campoRequerido} from "../administracion/Validaciones"
import { useParams, withRouter } from 'react-router-dom';

const EditarNoticia = (props) => {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  const [noticia, setNoticia] = useState({});

  
  const [categoriaNoticia, setCategoriaNoticia] = useState("");

  const [error, setError] = useState(false);
  const tituloNoticiaRef = useRef('');
  const tituloExtNoticiaRef = useRef('');
  const imagenNoticiaRef = useRef('');
  const descripcionImagenNoticiaRef = useRef('');
  const fechaNoticiaRef = useRef('');
  const horaNoticiaRef = useRef('');
  const autorNoticiaRef = useRef('');
  const categoriaNoticiaRef = useRef('');
  const descripcionPequeñaNoticiaRef = useRef('');
  const cuerpoNoticiaRef = useRef('');
  

  useEffect(() => {
    consultarNoticia();
    
  }, []);

  const consultarNoticia = async () => {
    try {
      const respuesta = await fetch(URL + '/' + id);
      if (respuesta.status === 200) {
        const resultado = await respuesta.json();
        setNoticia(resultado);
      
      }
    } catch (error) {
      console.log(error);
    }
  }

  const cadaCategoria = [];
  for (const i in props.noticias) {
    cadaCategoria.push(props.noticias[i].categoria)
  }
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const categoriasSinRepetir = cadaCategoria.filter(unique);
  const cambiarCategoria = (e) => {
    noticia.categoria=e.target.name
    
    setCategoriaNoticia(e.target.name);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // revisar si la categoria cambio
    

    // validar los datos
    if (campoRequerido(tituloNoticiaRef.current.value)) {
      // esta todo bien
      //armar el objeto a enviar
      const noticiaEditado = {
        tituloNoticia: tituloNoticiaRef.current.value,
        tituloExtendido: tituloExtNoticiaRef.current.value,
        urlImagen: imagenNoticiaRef.current.value,
        descripcionImagen: descripcionImagenNoticiaRef.current.value,
        fecha: fechaNoticiaRef.current.value,
        hora: horaNoticiaRef.current.value,
        autor: autorNoticiaRef.current.value,
        categoria: categoriaNoticia,
        descripcionNoticia: descripcionPequeñaNoticiaRef.current.value,
        cuerpoNoticia: cuerpoNoticiaRef.current.value,
      }
      try {
        const respuesta = await fetch(URL + "/" + id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(noticiaEditado)
        });
       
        if (respuesta.status === 200) {
          Swal.fire(
            'Producto editado',
            'Los datos del producto fueron modificados',
            'success'
          );
          props.consultarAPI();
          // redireccionar a la pagina de lista de productos
          props.history.push("/admin");

        } else {

        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
    // si algo falla mostrar alert de error
    // si esta todo bien, enviar la peticion PUT a la api
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
                  defaultValue={noticia.tituloNoticia}
                  ref={tituloNoticiaRef}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={8}>
              <Form.Group>
                <Form.Label>Titulo extendido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo extendido"
                  defaultValue={noticia.tituloExtendido}
                  ref={tituloExtNoticiaRef}
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
                  defaultValue={noticia.urlImagen}
                  ref={imagenNoticiaRef}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={8}>
              <Form.Group>
                <Form.Label>Descripcion de imagen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripcion de imagen"
                  defaultValue={noticia.descripcionImagen}
                  ref={descripcionImagenNoticiaRef}
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
                  defaultValue={noticia.fecha}
                  ref={fechaNoticiaRef}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group>
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="20:45"
                  defaultValue={noticia.hora}
                  ref={horaNoticiaRef}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col >
              <Form.Group>
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Autor"
                  defaultValue={noticia.autor}
                  ref={autorNoticiaRef}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Elija categoria</Form.Label>
              <DropdownButton id="dropdown123" variant="dark" title={noticia.categoria===undefined?
            "":noticia.categoria} size="lg"
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
                  defaultValue={noticia.descripcionNoticia}
                  ref={descripcionPequeñaNoticiaRef}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Cuerpo de la noticia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cuerpo de la noticia"
              defaultValue={noticia.cuerpoNoticia}
              ref={cuerpoNoticiaRef}
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

export default withRouter (EditarNoticia);