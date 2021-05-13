import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ItemNoticia = (props) => {
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                <p>{props.noticia.id}
                    <span className='font-weight-bold'> {props.noticia.tituloNoticia}</span>
                </p>
                
            </ListGroup.Item>
        </div>
    );
};

export default ItemNoticia;