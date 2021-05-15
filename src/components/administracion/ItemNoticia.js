import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
const ItemNoticia = (props) => {
    return (
        <tr key={props.noticia.id}>
            <td>
                <span className='font-weight-bold'> {props.noticia.tituloNoticia}</span>
            </td>
            <td >
                <span className='font-weight-bold'> {props.noticia.categoria}</span>
            </td>
            <td>
                <p>{props.noticia.id}</p>
            </td>
            <td >
                <Link to={`admin/editarnoticia/${props.noticia.id}`}>
                <FontAwesomeIcon icon={faPencilAlt} ></FontAwesomeIcon>
                </Link>
                <FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon>
            </td>
        </tr>
    );
};
export default ItemNoticia;