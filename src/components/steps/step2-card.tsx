import React, {useState} from 'react';
import {SystemCard, MoreInfo} from '../index'
import {systems} from '../../constants/systems'
import {Container, Row} from 'react-bootstrap';
import {System} from '../../interfaces'
interface Props {
}


export const Step2Card: React.FC<Props> = () => {
   const [show, setShow] = useState(false);
   const [system, setSystem] = useState<System|null>(null);

   const handleChange = () => {
      console.log('handleChange')
   }
   const handleShow = (systemInfo:System) => {
       setSystem(systemInfo);
       setShow(true)
   };

   const handleClose = () => setShow(false);
   return (
      <div className='step-card'>
         <Row>
            <SystemCard system={systems[0]} handleChange={handleChange} handleShow={handleShow} />
            <SystemCard system={systems[1]} handleChange={handleChange} handleShow={handleShow} />
            <SystemCard system={systems[2]} handleChange={handleChange} handleShow={handleShow} />
         </Row>
         <Row>
            <SystemCard system={systems[3]} handleChange={handleChange} handleShow={handleShow} />
            <SystemCard system={systems[4]} handleChange={handleChange} handleShow={handleShow} />
            <SystemCard system={systems[5]} handleChange={handleChange} handleShow={handleShow} />
         </Row>
         <MoreInfo show={show} handleClose={handleClose} system={system}/>

      </div>
   );
}