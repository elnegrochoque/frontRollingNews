import React from "react";
import "../common/PropagandaCovid.css";
import Covid from "../img/covid/covid.png";
import Covid1 from "../img/covid/covid1.png";
import Covid2 from "../img/covid/covid2.jpg";
import Clima from '../img/logo.png';

const PropagandaCovid = () => {
  return (
    <>

    <div className="segundo-header d-flex justify-content-center pt-2 mt-4 pl-4">
      <section className="row ">
        <div>
          <span className="mr-2 dolar-titulo">Dólar</span>
          <span className="mr-2 tipo-dolar">BNA</span>
          <span>$93,75</span>
          <i>/</i>
          <span className="mr-4">$99,75</span>
          <span className="mr-2 tipo-dolar">Blue</span>
          <span>$152,00</span>
          <i>/</i>
          <span className="mr-4">$157,00</span>
        </div>
        <div>
          <img src={Clima} width="50"
        height="50" className="d-inline-block pb-2 align-top mr-2" alt="nube logo" />
        <span className="mr-2">Tucumán</span>
        <span>15°</span>
        </div>
      </section>
    </div>

      <div className="covid-stats  d-flex justify-content-center align-items-center mt-4 pt-2">
        <h4 className="mr-4 titulo-covid">Coronavirus:</h4>

        <ul className="row place-list mt-2">
          <a href="" className="text-decoration-none">
            <li>Mundo</li>
          </a>
          <a href="" className="text-decoration-none">
            <li>Argentina: 3.753.609</li>
          </a>
          <a href="" className="text-decoration-none">
            <li>Tucumán: 126.268</li>
          </a>
        </ul>
      </div>
      <div className="container seccion-propaganda container d-flex justify-content-end pt-4">
        <img src={Covid} width={600} height={300} alt="" />
        <img src={Covid1} width={600} height={300} alt="" />
        <img src={Covid2} width={400} height={300} alt="" />
      </div>

    </>
  );
};

export default PropagandaCovid;
