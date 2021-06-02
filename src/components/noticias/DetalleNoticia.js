import React, { Fragment, useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useParams, withRouter } from 'react-router-dom';

const DetalleNoticia = (props) => {
    const [noticia, setNoticia] = useState({});
    const URL = process.env.REACT_APP_API_URL;
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
    const { id } = useParams();
    console.log(id);
    console.log(noticia)

    return (
        <Fragment>
            <Container>
                <div className="col-lg-10">
                    <h1 className="my-2 py-4 display-4 text-inline">
                        <span className="text-danger">{noticia.tituloNoticia} </span>
                        <br/>{noticia.tituloExtendido}
                    </h1>
                    <h2>
                        {noticia.descripcionNoticia}
                    </h2>

                    <Carousel className="my-4" indicators={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                width="976"
                                height="546"
                                src={noticia.urlImagen}
                                alt={noticia.descripcionImagen}
                            />
                            <div class="bg-dark text-white p-3 pl-2">
                                {noticia.descripcionImagen}
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <div>
                        <h5 className="pt-2">{noticia.fecha} - {noticia.hora}</h5>
                        <h3 className="display-6">
                        <p>
                            {noticia.cuerpoNoticia}
                        </p>
                        <p>{noticia.autor}</p>
                        </h3>
                    
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

export default withRouter (DetalleNoticia);
