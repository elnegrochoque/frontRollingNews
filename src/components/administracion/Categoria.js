import React from 'react';
import {Dropdown } from 'react-bootstrap';
const Categoria = (props) => {
    return (
        
            <Dropdown.Item className="d-flex justify-content-between">
                <p>{props.cat}</p>
            </Dropdown.Item>
        
    );
};

export default Categoria;