import React from "react";
import Actualidad from "./Actualidad";
import Deportes from "./Deportes";
import Destacado from "./Destacado";
import Tecnologia from "./Tecnologia";
import Politica from './Politica';
import Espectaculos from './Espectaculos';
import Economia from './Economia';
import Salud from './Salud';
import Fotografia from './Fotografia';
import '../../App.css';
import '../paginaPrincipal/paginaPrincipal.css';

const PaginaPrincipal = () => {
  return (
    <>

      <Destacado />
      <Actualidad />
      <Deportes />
      <Tecnologia />
      <Politica />
      <Espectaculos />
      <Economia />
      <Salud />
      <Fotografia />
    </>
  );
};

export default PaginaPrincipal;
