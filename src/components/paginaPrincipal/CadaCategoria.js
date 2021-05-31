
import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import alberto from "../img/destacado/albertof.jpg";
import dollar from "../img/destacado/dollars.jpg";
import '../paginaPrincipal/paginaPrincipal.css';
import CardNoticia from "./CardNoticia";

const CadaCategoria = (props) => {

  
    const noticiasCategoria = []

    for (const i in props.noticias) {
        if (props.noticias[i].categoria === props.categoria && props.noticias[i].tituloNoticia != "Este item es una categoria") {

            noticiasCategoria.push(props.noticias[i]);
       
        }
    }
    return (
        <div className="mb-5">
            <hr />
            <h1 className="mx-3 my-4 text-center">{props.categoria.toUpperCase()}</h1>
            <section className="d-flex justify-content-center flex-wrap">

                {(noticiasCategoria.length === 0) ? "" :
                    noticiasCategoria.map((noticia) =>
                        <CardNoticia
                            noticia={noticia}
                            key={noticia.id}
                            consultarAPI={props.consultarAPI}>
                        </CardNoticia>
                    )}
            </section>
        </div>
    );
};

export default CadaCategoria;