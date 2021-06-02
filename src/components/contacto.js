import React from "react";
import { Row, Form, Button, Col } from "react-bootstrap";

const contacto = () => {
    return (
        <div className="col-md-4 container py-4">
            <h1 className="text-center titulo-covid">Contactanos</h1>
            <Form className="py-4">
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="Nombre" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Apellido" />
                    </Col>
                </Form.Row>
                <Form.Group className="py-4" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
        </Button>
            </Form>
        </div>
    );
};

export default contacto;