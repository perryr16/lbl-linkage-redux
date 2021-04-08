import React from 'react';
import {Col} from 'react-bootstrap';
import {System} from '../../interfaces'

interface Props {
   system: System;
   handleShow: any;
   handleChange: any;
}

export const SystemCard: React.FC<Props> = (props) => {
   const {system, handleShow, handleChange} = props

    return (
      <Col>
         <div className="sys-card" >
            <input className="sys-check zoom-3x" type="checkbox" value={system.type} id={system.type} onClick={handleChange}/>
            <label className="txt-15 bold sys-name" htmlFor={system.type}>
               {system.type.toUpperCase()}
            </label>
            {system.icon}
            <button className="more-info txt-10" onClick={() => handleShow(system)}> More Info</button>
         </div>
      </Col>
    );
}