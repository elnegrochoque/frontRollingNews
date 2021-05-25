import React from "react";
import { Card, Button } from "react-bootstrap";
import Messi from '../img/deporte/messi.jpeg';
import Rugby from '../img/deporte/rugby.jpg';
import Ufc from '../img/deporte/ufc.jpg';


const Deportes = () => {
  return (
    <div className="mb-5">
      <hr />
      <h1 className="mx-3 my-4 text-center">Deportes</h1>
      <section className="d-flex justify-content-center">
        <Card className="m-4 noticiaPrincipal" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Messi} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
        <Card className="m-4 noticiaPrincipal" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Rugby} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
        <Card className="m-4 noticiaPrincipal" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Ufc} />
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

export default Deportes;
