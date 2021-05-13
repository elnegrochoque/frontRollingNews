import React, { Fragment } from 'react';
import { Container, ListGroup, Row, Col, Dropdown, Button } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrashAlt, faPencilAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Categoria from './Categoria';

const Admin = (props) => {
    console.log(props.noticias);
    const cadaCategoria = [];
    for (const i in props.noticias) {
        cadaCategoria.push(props.noticias[i].categoria)
    }
    console.log(cadaCategoria);
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const categoriasSinRepetir = cadaCategoria.filter(unique)
    console.log(categoriasSinRepetir);

    return (
        <Fragment>
            <Container className='my-5'>
                <Row>
                    <Col><h1 className=' mb-5'>Administrador</h1></Col>

                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Categorias <span><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {categoriasSinRepetir.map((cat) =>
                                        <Categoria cat={cat}>
                                        </Categoria>
                                    )
                                }
                                <Dropdown.Item href="#/action-1">asdasd</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>

                    <Col><h1 className=' mb-5'>Administrador</h1></Col>
                </Row>

                <ListGroup >
                    {
                        props.noticias.map((noticia) =>
                            <ItemNoticia
                                noticia={noticia}
                                key={noticia.id}
                                consultarAPI={props.consultarAPI}>
                            </ItemNoticia>
                        )
                    }
                </ListGroup>
            </Container>
        </Fragment>
    );
};

export default Admin;