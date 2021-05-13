import React from 'react';
import {Dropdown } from 'react-bootstrap';
const Categoria = (props) => {
    return (
        <div>
            <Dropdown.Item className="d-flex justify-content-between">
                <p>{props.cat}</p>
            </Dropdown.Item>
        </div>
    );
};

export default Categoria;