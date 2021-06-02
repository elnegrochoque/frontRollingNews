import React from "react";
import Destacado from "./Destacado";

import '../../App.css';
import PropagandaCovid from "../common/PropagandaCovid";
import CadaCategoria from "../paginaPrincipal/CadaCategoria";


const PaginaPrincipal = (props) => {


  const tresNoticias = (categoria) => {
    let contador = 0;
    const arregloTresNoticias = [];
    for (const i in props.noticias) {
      if ((props.noticias[i].categoria === categoria) && (contador < 3) && props.noticias[i].tituloNoticia !== "Este item es una categoria") {
        contador++;
        arregloTresNoticias.unshift(props.noticias[i]);
      }
    }

    return arregloTresNoticias;
  }
  let tresActualidad = tresNoticias("actualidad");
  let tresDeporte = tresNoticias("deportes");
  let tresTecnologia = tresNoticias("tecnologia");
  let tresPolitica = tresNoticias("politica");
  let tresEspectaculos = tresNoticias("espectaculos");
  let tresEconomia=tresNoticias("economia");
  let tresSalud=tresNoticias("salud");
  let tresFotografia=tresNoticias("fotografia");


  return (
    <>
      <Destacado id="#destacado"/>
      
      <CadaCategoria categoria="actualidad" noticias={tresActualidad}></CadaCategoria>
      <CadaCategoria categoria="deportes" noticias={tresDeporte}></CadaCategoria>
      <CadaCategoria categoria="tecnologia" noticias={tresTecnologia}></CadaCategoria>
      <CadaCategoria categoria="politica" noticias={tresPolitica}></CadaCategoria>
      <CadaCategoria categoria="espectaculos" noticias={tresEspectaculos}></CadaCategoria>
      <CadaCategoria categoria="economia" noticias={tresEconomia}></CadaCategoria>
      <CadaCategoria categoria="salud" noticias={tresSalud}></CadaCategoria>
      <CadaCategoria categoria="fotografia" noticias={tresFotografia}></CadaCategoria>
      
      
    </>
  );
};

export default PaginaPrincipal;
