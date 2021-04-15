import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {SystemDetailCard} from '../index';
import {selectStep3, addSystemId, removeSystemTypeById} from '../steps/step3-slice';

interface Props {
  systemType: string;
}

export const SystemAddCard: React.FC<Props> = (props) => {
  const {systemType} = props;
  
  const dispatch = useDispatch()
  const step3 = useSelector(selectStep3)
  const relaventSystems = step3[systemType]

  const mapSystemDetailCards = () => {
    return(
      relaventSystems && relaventSystems.map((system:any) => (
        <SystemDetailCard systemType={systemType} systemId={system.id} handleRemoveSystem={handleRemoveSystem}/>
        ))
    )
  }

  const handleAddSystem = () => {
    let newSystem:any = {systemType: systemType, systemId: relaventSystems.length}
    dispatch(addSystemId(newSystem))
  }


  const handleRemoveSystem = (systemType:string, systemId:number) => {
    const payload = {systemType: systemType, systemId: systemId}
    dispatch(removeSystemTypeById(payload))
  }

  return (
    <div>
      {mapSystemDetailCards()}
      <div className='sys-detail'>
        <Row>
          <Col xs={11}><p className='bold txt-20'>Add Another {systemType} System</p></Col>
          <Col xs={1}><button className='btn-plus bold' type='button' onClick={handleAddSystem}> + </button></Col>
        </Row>
        
        
      </div>
  </div>
  );
}