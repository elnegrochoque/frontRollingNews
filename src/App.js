import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState, useEffect } from 'react';
import Admin from './components/administracion/Admin';
import PaginaPrincipal from "./components/paginaPrincipal/PaginaPrincipal";
import NuevaNoticia from './components/administracion/NuevaNoticia';
import EditarNoticia from './components/administracion/EditarNoticia';



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
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Router>
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
      </Switch>


<Route exact path="/admin/nuevanoticia">
          <NuevaNoticia noticias={noticias} consultarAPI={consultarAPI}> </NuevaNoticia>
        </Route>
        <Route exact path="/admin/editarnoticia/:id">
          <EditarNoticia noticias={noticias} consultarAPI={consultarAPI}></EditarNoticia>
          
        </Route>
    </Router>
  );
}

export default App;
