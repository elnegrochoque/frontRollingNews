import React from 'react';
import Actualidad from './Actualidad';
import Deportes from './Deportes';
import Destacado from './Destacado';
import Tecnologia from './Tecnologia';


const PaginaPrincipal = () => {
    return (
        <div>
            <h1>Esta es la pagina de inicio</h1>
            <Destacado/>
            <Actualidad/>
            <Deportes/>
            <Tecnologia/>
        </div>
    );
};

export default PaginaPrincipal;