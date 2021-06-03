import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Dropdown, Button, Table, Modal, Form,Alert } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from "sweetalert2";

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';





const Admin = (props) => {
    const URL = process.env.REACT_APP_API_URL;
    const cadaCategoria = [];
    for (const i in props.noticias) {
        cadaCategoria.push(props.noticias[i].categoria)
    }

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const categoriasSinRepetir = cadaCategoria.filter(unique);
    categoriasSinRepetir.push("todas");

    const [listaOrdenada, setListaOrdenada] = useState([]);
    const ordenarSegunCategoria = (e) => {
        const listaOrdenada1 = [];
        for (const i in props.noticias) {
            if (props.noticias[i].categoria === e.target.innerText) {
                listaOrdenada1.push(props.noticias[i])
            }
        }
        setListaOrdenada(listaOrdenada1);
    }
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [error, setError] = useState(false);
    const guardarCategoriaNueva = async(e) => {
        console.log(nuevaCategoria);
        e.preventDefault();

        //  validar los datos
        if (nuevaCategoria.trim() === ''){
            // mostrar el cartel de error
            setError(true);
        } else {
        // quitar cartel de error
        setError(false);
    // crear el objeto a enviar
    const datos = {
        tituloNoticia: "Este item es una categoria",
        tituloExtendido: "",
        urlImagen: "",
        descripcionImagen: "",
        fecha: "",
        hora: "",
        autor: "",
        categoria: nuevaCategoria,
        descripcionNoticia: "",
        cuerpoNoticia: "",
    };




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
                'Categoria agregada',
                'Se cargo una nueva categoria',
                'success'
            )
            props.consultarAPI();
            
        }
    } catch (error) {
        console.log(error);
    }
}

handleClose();
        
    }
return (
    <Fragment>
        <Container className='my-5 '>
            <Row className="mb-3  ">
                <Col xs={4}><h3 className=" font-weight-bold">Administrador</h3>
                </Col>
                <Col >
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Categorias <span><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {categoriasSinRepetir.map((cat) =>
                                <Dropdown.Item className="d-flex justify-content-between" key={cat} onClick={ordenarSegunCategoria}>
                                    {cat}
                                </Dropdown.Item>
                            )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Link to="/admin/nuevanoticia" className='btn btn-dark mr-2 text-light'>
                        +Nueva noticia
                        </Link>
                </Col>
                <Col> <Button variant="dark" onClick={handleShow}>+Nueva categoria</Button></Col>

            </Row>
            <Table striped bordered hover size="sm">
                <thead key="thead">
                    <tr>
                        <th >Noticia</th>
                        <th>Categoria</th>
                        <th>ID</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody key="tbody">
                    {(listaOrdenada.length === 0) ?
                        props.noticias.map(
                            (noticia) =>
                            <ItemNoticia
                                noticia={noticia}
                                key={noticia._id}
                                consultarAPI={props.consultarAPI}>
                            </ItemNoticia>
                        )
                        :
                        listaOrdenada.map((noticia) =>
                            <ItemNoticia
                                noticia={noticia}
                                key={noticia._id}
                                consultarAPI={props.consultarAPI}>
                            </ItemNoticia>
                        )
                    }

                </tbody>
            </Table>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar categoria</Modal.Title>
                {error === true ? (
                    <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
                ) : null}
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Escriba la nueva categoria</Form.Label>
                        <Form.Control type="text" placeholder="Nueva categoria" onChange={(e) => setNuevaCategoria(e.target.value)} />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={guardarCategoriaNueva}>
                    Guardar
                    </Button>
                <Button variant="primary" type="submit" onClick={handleClose}>
                    Cerrar
                    </Button>
            </Modal.Footer>
        </Modal>
    </Fragment>
);
};

export default Admin;