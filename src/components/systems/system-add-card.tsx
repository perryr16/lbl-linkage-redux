import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {SystemDetailCard} from '../index';
import {selectStep3, addSystemId, removeSystemTypeById} from '../steps/step3-slice';

interface Props {
  systemType: string;
}

export const SystemAddCard: React.FC<Props> = (props) => {
  const {systemType} = props;
  const [systemDetailCards, setSystemDetailCards] = useState([{systemType: systemType, systemId: 0}]);
  
  const dispatch = useDispatch()
  const step3 = useSelector(selectStep3)
  const relaventSystems = step3[systemType]

  const mapSystemDetailCards = () => {
    return(
      relaventSystems && relaventSystems.map((system:any) => (
        // console.log('system:', system)
        <SystemDetailCard systemType={systemType} systemId={system.id} handleRemoveSystem={handleRemoveSystem}/>
        ))
    )
    // return(
    //   systemDetailCards.map((system:any) => (
    //     <SystemDetailCard systemType={system.systemType} systemId={system.systemId} handleRemoveSystem={handleRemoveSystem}/>
    //     ))
    // )
  }

  const handleAddSystem = () => {
    let newSystem:any = {systemType: systemType, systemId: systemDetailCards.length}
    setSystemDetailCards((systems) => [...systems, newSystem ])
    dispatch(addSystemId(newSystem))

  }


  const handleRemoveSystem = (systemType:string, systemId:number) => {
    console.log('here')
    const x = 10;
    const payload = {systemType: systemType, systemId: systemId}
    dispatch(removeSystemTypeById(payload))
    // setSystemDetailCards((systems) => systems.filter(system => system.systemId !== systemId))
    // return () => {
    //   return( 
    //     dispatch(removeSystemTypeById(payload))
    //   )}
    console.log('systemType', systemType)
    console.log('systemId', systemId)
  }

  return (
    <div>
      {mapSystemDetailCards()}
      <div className='sys-detail'>
        <div className=''>   
            <Row>
              <Col xs={10}>
                  <p className='float-l bold txt-20 mar-l-20 mar-t-20 lbl-blue'>Add Another {systemType} System</p>
              </Col>
              <Col xs={1}>
                  <button className='mar-t-20 btn-plus lbl-blue bold' type='button' onClick={handleAddSystem}> + </button>
              </Col>
            </Row>
        </div>
      </div>
    </div>
  );
}