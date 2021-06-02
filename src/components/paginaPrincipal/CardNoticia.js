import React, { useState } from 'react';
import imagen from "../img/actualidad/albertofernandez.jpg";
import { Card, Button } from "react-bootstrap";

const CardNoticia = (props) => {
    // var objImagen = new Image();
    // objImagen.src="img/actualidad/albertofernandez.jpg"
// console.log(props.noticia.urlImagen)
// console.log("../img/actualidad/albertofernandez.jpg")


    return (
        
        <Card className="m-4 cards text-center bg-light text-secondary animate__animated animate__fadeInUp" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} />
        
            <Card.Body>
                <Card.Title>{props.noticia.tituloNoticia}</Card.Title>
                <Card.Text>
                {props.noticia.tituloExtendido}
            </Card.Text>
                <Button variant="primary">Leer mas...</Button>
            </Card.Body>
        </Card>
    );
};

export default CardNoticia;