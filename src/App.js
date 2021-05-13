import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Admin from './components/administracion/Admin';

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
  }
  return (
    <Router>      
      <Switch>
        <Route exact path="/admin">
          <Admin noticias={noticias} consultarAPI={consultarAPI}></Admin>
         
        </Route>
      
      </Switch>
     
    </Router>
  );
}

export default App;
