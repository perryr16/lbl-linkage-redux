import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SystemCard, MoreInfo} from '../index';
import {systems} from '../../constants/systems';
import {Row} from 'react-bootstrap';
import {System} from '../../interfaces';
import {addSystem, removeSystem, selectStep2} from './step2-slice';
import { resetStep3 } from './step3-slice';
interface Props {
}


export const Step2Card: React.FC<Props> = () => {
   const [show, setShow] = useState(false);
   const [system, setSystem] = useState<System|null>(null);
   const dispatch = useDispatch()
   const step2 = useSelector(selectStep2)

   const handleChange = (selectedSystem:any) => {
      let icon = systems.filter(system => (
         system.type === selectedSystem
      ))[0].iconDetail
      const system = {systemType: selectedSystem, icon: icon}
      let existing = step2.filter((system:any) => system.systemType === selectedSystem)
      existing.length ? handleRemoveSystem(system) : handleAddSystem(system)
   }

   const handleRemoveSystem = (system:any) => {
      dispatch<any>(removeSystem(system))
      dispatch<any>(resetStep3())
   } 
   const handleAddSystem = (system:any) => {
      dispatch<any>(addSystem(system))
   }

   const handleShow = (systemInfo:System) => {
       setSystem(systemInfo);
       setShow(true)
   };

   const checked = (system:any) => {
      const foundSystem = step2.filter((sys:any) => sys.systemType === system.type)
      return foundSystem.length >= 1
   }

   const handleClose = () => setShow(false);
   return (
      <div className='step-card' data-testid="step2-card">
         <Row>
            <SystemCard system={systems[0]} handleChange={handleChange} handleShow={handleShow} checked={checked(systems[0])}/>
            <SystemCard system={systems[1]} handleChange={handleChange} handleShow={handleShow} checked={checked(systems[1])}/>
            <SystemCard system={systems[2]} handleChange={handleChange} handleShow={handleShow} checked={checked(systems[2])}/>
         </Row>
         <Row>
            <SystemCard system={systems[3]} handleChange={handleChange} handleShow={handleShow} checked={checked(systems[3])}/>
            <SystemCard system={systems[4]} handleChange={handleChange} handleShow={handleShow} checked={checked(systems[4])}/>
            <SystemCard system={systems[5]} handleChange={handleChange} handleShow={handleShow} checked={checked(systems[5])}/>
         </Row>
         <MoreInfo show={show} handleClose={handleClose} system={system}/>

      </div>
   );
}