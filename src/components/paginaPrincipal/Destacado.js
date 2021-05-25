import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import alberto from "../img/destacado/albertof.jpg";
import dollar from "../img/destacado/dollars.jpg";


const Destacado = () => {
  return (
    <Fragment>
      <div className="row mb-5 container-fluid d-flex justify-content-center">
        <div className="col-lg-12 col-md-12 col-sm-12"></div>
        <section className="col-lg-6">
          <Card className="m-4 noticiaPrincipal ">
            <Card.Img variant="top" src={alberto} className="w-100 " />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                ratione ducimus et nulla commodi mollitia voluptate nihil
                asperiores vero velit similique voluptatibus, sit eaque possimus
                eos nostrum atque veniam! Accusantium, corrupti aliquam.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </section>
        <section className="col-lg-3">
          <Card className="m-4">
            <Card.Img variant="top" src={dollar} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
          <Card className="m-4">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </section>
      </div>
    </Fragment>
  );
};

export default Destacado;
