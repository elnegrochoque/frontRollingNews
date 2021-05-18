import React, { Fragment, useState } from 'react';
import { Container,  Row, Col, Dropdown, Button, Table } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Admin = (props) => {
    
    const cadaCategoria = [];
    for (const i in props.noticias) {
        cadaCategoria.push(props.noticias[i].categoria)
    }
  
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const categoriasSinRepetir = cadaCategoria.filter(unique)
    console.log(props.noticias)
    const [listaOrdenada, setListaOrdenada]=useState([]);

    console.log(listaOrdenada)
    const ordenarSegunCategoria = (e) =>{
        const listaOrdenada1=[];
        for (const i in props.noticias) {
            
            if (props.noticias[i].categoria===e.target.innerText) {
                listaOrdenada1.push(props.noticias[i])
            }
            
        }
        console.log(listaOrdenada1)
    setListaOrdenada(listaOrdenada1);
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
                        <Link to="/admin/nuevanoticia"className='btn btn-dark mr-2 text-light'>
                        +Nueva noticia
                        </Link>
                    </Col>
                    <Col> <Button variant="dark">+Nueva categoria</Button></Col>
                    
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
                        {(listaOrdenada.length===0)?
                            props.noticias.map((noticia) =>
                                <ItemNoticia
                                    noticia={noticia}
                                    key={noticia.id}
                                    consultarAPI={props.consultarAPI}>
                                </ItemNoticia>
                            )
                            :
                            listaOrdenada.map((noticia) =>
                                <ItemNoticia
                                    noticia={noticia}
                                    key={noticia.id}
                                    consultarAPI={props.consultarAPI}>
                                </ItemNoticia>
                            )
                        }
                        
                    </tbody>
                </Table>


            </Container>
        </Fragment>
    );
};

export default Admin;