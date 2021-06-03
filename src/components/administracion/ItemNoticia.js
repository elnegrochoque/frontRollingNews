import React from 'react';
import { Button} from 'react-bootstrap';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
const ItemNoticia = (props) => {

    const eliminarProducto = (_id) => {

        const URL = process.env.REACT_APP_API_URL + '/' + _id;


        Swal.fire({
            title: '¿Está seguro?',
            text: "Se borrara permanentemente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(URL, {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (response.status === 200) {
                        if (props.noticia.tituloNoticia === "Este item es una categoria") {
                            Swal.fire(
                                'Producto eliminado',
                                'Para elimnar totalmente una categoria tiene que eliminar todas las noticias que posean esta categoria',
                                'success'
                            )
                        } else {
                            Swal.fire(
                                'Producto eliminado',
                                'El producto seleccionado fue correctamente elminado',
                                'success'
                            )
                        }
                        //mostrar el cartel de prod eliminado

                        //actualizar los datos
                        props.consultarAPI();
                    }
                    else {
                        Swal.fire(
                            'Error',
                            'Se produjo un error',
                            'error'
                        )
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Se produjo un eror',
                        'Intentelo en unos minutos',
                        'error'
                    )
                }
            }
        })
    }




    return (
        <tr key={props.noticia._id}>
            <td>
                <span className='font-weight-bold'> {props.noticia.tituloNoticia}</span>
            </td>
            <td >
                <span className='font-weight-bold'> {props.noticia.categoria}</span>
            </td>
            <td>
                <p>{props.noticia._id}</p>
            </td>
            <td >


                <Button variant='danger' onClick={() => eliminarProducto(props.noticia._id)}>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </Button>
                {(props.noticia.tituloNoticia === "Este item es una categoria") ? <span></span> :
                <Link to={`admin/editarnoticia/${props.noticia._id}`} className="btn btn-warning mr-2">
                    <FontAwesomeIcon icon={faPencilAlt} ></FontAwesomeIcon>
                </Link>}


            </td>
        </tr>
    );
};
export default ItemNoticia;