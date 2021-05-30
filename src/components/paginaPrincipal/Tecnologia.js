import React from "react";
import { Card, Button } from "react-bootstrap";
import Iphone from '../img/tecnologia/iphone.webp';
import Macbook from '../img/tecnologia/macbook.webp';
import Trading from '../img/tecnologia/trading.webp';

const Tecnologia = (props) => {
  return (
    <div className="mb-5">
      <hr />
      <h1 className="mx-3 my-4 text-center">Tecnologia</h1>
      <section className="d-flex justify-content-center">
        <Card className="m-4 cards text-center bg-dark text-secondary animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Iphone}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
        <Card className="m-4 cards text-center bg-dark text-secondary animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Macbook} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Leer mas...</Button>
          </Card.Body>
        </Card>
        <Card className="m-4 cards text-center bg-dark text-secondary animate__animated animate__fadeInUp" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Trading} />
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

export default Tecnologia;
