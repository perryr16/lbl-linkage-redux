import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SystemCard, MoreInfo} from '../index';
import {systems} from '../../constants/systems';
import {Row} from 'react-bootstrap';
import {System} from '../../interfaces';
import {addSystem, removeSystem, selectStep2} from './step2-slice';
interface Props {
}


export const Step2Card: React.FC<Props> = () => {
   const [show, setShow] = useState(false);
   const [system, setSystem] = useState<System|null>(null);
   const dispatch = useDispatch()
   const step2 = useSelector(selectStep2)

   const handleChange = (e:any) => {
      const icon = systems.filter(system => (
         system.type == e.target.value
      ))[0].iconDetail
      const system = {systemType: e.target.value, icon: icon}
      let existing = step2.filter((system:any) => system.systemType === e.target.value)
      existing.length ? handleRemoveSystem(system) : handleAddSystem(system)
   }

   const handleRemoveSystem = (system:any) => {
      dispatch<any>(removeSystem(system))
   } 
   const handleAddSystem = (system:any) => {
      dispatch<any>(addSystem(system))
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