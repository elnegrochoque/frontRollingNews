import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Yo from './img/nosotros/Yo.png';

const acercaDeNosotros = () => {
    return (
        <div className="py-4">
            <div className="container text-center">
                <h1>Sobre Rolling News</h1>
                <h4 className="titulo-covid">
                    Rolling News el portal de noticias más destacado del país.
        </h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                    excepturi natus itaque nam nesciunt neque totam, voluptatem rem a
                    assumenda atque magnam consectetur cum suscipit. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Minima eveniet, voluptas totam
                    debitis alias, eligendi expedita nemo eaque corrupti amet ab sint
                    quaerat repellendus rerum!
        </p>
            </div>

            <CardGroup className="container ">
                <Card className="m-4 cards text-center bg-dark text-secondary animate__animated animate__fadeInUp">
                    <Card.Img variant="top" src={Yo} />
                    <Card.Body>
                        <Card.Title>Full Stack Developer</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
            </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4 cards text-center bg-dark text-secondary animate__animated animate__fadeInUp" >
                    <Card.Img variant="top" src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t1.18169-9/249723_10150194972694070_1005028_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_eui2=AeHS9ctOu1qMeNG8axzFLJiyYIRsNuYIB71ghGw25ggHvcTofgMcX5gqQ_3u_taONOY&_nc_ohc=GIP2eCYYNyAAX_qbPVu&_nc_ht=scontent.ftuc4-1.fna&oh=fd20c8adb229300fb461cd92fa7ce021&oe=60DBF027" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
              additional content.{" "}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4 cards text-center bg-dark text-secondary animate__animated animate__fadeInUp" >
                    <Card.Img variant="top" src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.6435-9/127542376_100401761930020_53945942128344134_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ySOX6JBAr_MAX8W6c9O&_nc_ht=scontent.ftuc1-1.fna&oh=835b7021c96dd02250b79a4307cfedfb&oe=60DCF520" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This card has even longer content
                            than the first to show that equal height action.
            </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default acercaDeNosotros;