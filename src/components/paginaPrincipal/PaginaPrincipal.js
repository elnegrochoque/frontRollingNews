import React from "react";
import Navegacion from "../common/Navegacion";
import Actualidad from "./Actualidad";
import Deportes from "./Deportes";
import Destacado from "./Destacado";
import Tecnologia from "./Tecnologia";
import Politica from './Politica';
import '../../App';

const PaginaPrincipal = () => {
  return (
    <>

      <Destacado />
      <Actualidad />
      <Deportes />
      <Tecnologia />
      <Politica />
    </>
  );
};

export default PaginaPrincipal;
