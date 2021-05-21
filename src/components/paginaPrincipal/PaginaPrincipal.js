import React from "react";
import Navegacion from "../common/Navegacion";
import Actualidad from "./Actualidad";
import Deportes from "./Deportes";
import Destacado from "./Destacado";
import Tecnologia from "./Tecnologia";
import Footer from "../common/Footer";

const PaginaPrincipal = () => {
  return (
    <>
      <Navegacion></Navegacion>
      <h1>Esta es la pagina de inicio</h1>
      <Destacado />
      <Actualidad />
      <Deportes />
      <Tecnologia />
      <Footer></Footer>
    </>
  );
};

export default PaginaPrincipal;
