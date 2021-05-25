import React from "react";
import { Card, Button } from "react-bootstrap";
import Albertofernandez from '../img/actualidad/albertofernandez.jpg';
import Colombianos from '../img/actualidad/colombianos.jpg';
import Aeropuerto from '../img/actualidad/aeropuerto.jpg';

const Actualidad = () => {
  return (
    <div className="mb-5">
        <hr />
      <h1 className="mx-3 my-4 text-center">Actualidad</h1>
      <section className="d-flex justify-content-center">
        <Card className="mr-4 noticiaPrincipal" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Albertofernandez} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
        <Card className="mr-4  noticiaPrincipal" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Colombianos} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
        <Card className="mr-4 noticiaPrincipal" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Aeropuerto} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default Actualidad;
