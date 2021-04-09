import React from 'react';
import {Col, Row} from 'react-bootstrap';

interface Props {
  systemId: number;
  systemType: string;
  handleRemoveSystem: any;
  handleAddNote: any
  showNote: boolean
}

export const SystemDetailHeader: React.FC<Props> = (props) => {
  const {handleRemoveSystem, handleAddNote, showNote, systemId, systemType, } = props;

  return (
    <div>
      <Row>
        <Col xs={8}>
          <p className='bold txt-20 marg-bottom-20 left-justify mar-l-20 mar-t-20'> System {systemId}: {systemType}</p>
        </Col>
        <Col >
          {!showNote && <button className='btn-add-note txt-15 bold' onClick={handleAddNote}>+ Note</button> }
        </Col>
        <Col>
          <button className='btn-plus bold' onClick={() => handleRemoveSystem(systemType, systemId)}>-</button>
        </Col>

      </Row>    
    </div>
  );
}