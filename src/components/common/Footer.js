import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faHome,
    faPhone,
    faEnvelope,

} from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const Footer = () => {
    return (
        <>
            <div className="d-flex justify-content-between bg-dark   py-4  footer-end  text-light">
                <div className="d-flex flex-column ml-4">
                    <h4 className="text-center titulo-covid">Rolling News</h4>
          &copy; Todos los derechos reservados
          <Link exact={true} to="/acercaDeNosotros" className="nav-link">ACERCA DE NOSOTROS</Link>
                    <Link exact={true} to="/contacto" className="nav-link">CONTACTO</Link>
                </div>
                <div className="mr-4 ">
                    <h4 className="text-center titulo-covid">Contacto</h4>
                    <div className="d-flex  ">
                        <FontAwesomeIcon className="mr-2 " icon={faHome} />
                        <p>San Miguel de Tucumán</p>
                    </div>
                    <div className="d-flex ">
                        <FontAwesomeIcon className="mr-2" icon={faPhone} />
                        <p>+54 0381 156979797</p>
                    </div>
                    <div className="d-flex ">
                        <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                        <p>rollingnews@rollingnews.com</p>
                    </div>
                </div>
                <div className="mr-4">
                    <h4 className="text-center titulo-covid">Sobre Nosotros</h4>
                    <p>
                        Lorem ipsum dolor sit amet, <br></br>consectetur adipisicing elit.
            <br></br> Ea qui asperiores quaerat?
          </p>
                    <div className="d-flex justify-content-around py-2 ">
                        <FontAwesomeIcon className="mr-2" icon={faFacebook} />
                        <FontAwesomeIcon className="mr-2" icon={faTwitterSquare} />
                        <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
                        <FontAwesomeIcon className="mr-2" icon={faGithub} />

                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;
