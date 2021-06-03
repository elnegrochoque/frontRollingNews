import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState, useEffect } from 'react';
import Admin from './components/administracion/Admin';
import PaginaPrincipal from "./components/paginaPrincipal/PaginaPrincipal";

import Navegacion from "./components/common/Navegacion";
import Footer from "./components/common/Footer";
import NuevaNoticia from './components/administracion/NuevaNoticia';
import EditarNoticia from './components/administracion/EditarNoticia';
import CadaCategoria from "./components/paginaPrincipal/CadaCategoria";
import AcercaNosotros from './components/acercaDeNosotros';
import Contacto from './components/contacto';

import DetalleNoticia from "./components/noticias/DetalleNoticia";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const consulta = await fetch(URL);
      const respuesta = await consulta.json();

      setNoticias(respuesta);

    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <PaginaPrincipal noticias={noticias} consultarAPI={consultarAPI} />
        </Route>
        <Route exact path="/admin">
          <Admin noticias={noticias} consultarAPI={consultarAPI}></Admin>
        </Route>
        <Route exact path="/admin/nuevanoticia">
          <NuevaNoticia noticias={noticias} consultarAPI={consultarAPI}> </NuevaNoticia>
        </Route>
        <Route exact path="/admin/editarnoticia/:id">
          <EditarNoticia noticias={noticias} consultarAPI={consultarAPI}></EditarNoticia>
          
        </Route>
        <Route exact path="/noticia/:id">
          <DetalleNoticia noticias={noticias} consultarAPI={consultarAPI}></DetalleNoticia>
        </Route>
        <Route exact path="/actualidad">
        <CadaCategoria categoria="actualidad" noticias={noticias}></CadaCategoria>
        </Route>
        <Route exact path="/deportes">
          <CadaCategoria categoria="deportes" noticias={noticias}></CadaCategoria>
        </Route>
        <Route exact path="/tecnologia">
          <CadaCategoria categoria="tecnologia" noticias={noticias}></CadaCategoria>
        </Route>
        <Route exact path="/politica">
          <CadaCategoria categoria="politica" noticias={noticias}></CadaCategoria>
        </Route>
        <Route exact path="/salud">
          <CadaCategoria categoria="salud" noticias={noticias}></CadaCategoria>
        </Route>
        <Route exact path="/economia">
          <CadaCategoria categoria="economia" noticias={noticias}></CadaCategoria>
        </Route>
        <Route exact path="/espectaculos">
          <CadaCategoria categoria="espectaculo" noticias={noticias}></CadaCategoria>
        </Route>
        <Route exact path="/fotografia">
          <CadaCategoria categoria="fotografia" noticias={noticias}></CadaCategoria>
        </Route>
      
        <Route exact path="/acercaDeNosotros">
        <AcercaNosotros></AcercaNosotros>
        </Route>
        <Route exact path="/contacto">
        <Contacto></Contacto>
        </Route>
        <Route exact path=""></Route>
      
        
      </Switch>
      <Footer></Footer>






    </Router >
  );
}

export default App;
