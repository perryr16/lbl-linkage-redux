import React from 'react';
import {Col, Row} from 'react-bootstrap';

interface Props {
  systemId: number;
  systemType: string;
  handleRemoveSystem: any;
}

export const SystemDetailHeader: React.FC<Props> = (props) => {
  const {handleRemoveSystem, systemId, systemType} = props;
  
  return (
    <div>
      <Row>
        <Col xs={11}>
          <p className='bold txt-20 marg-bottom-20 left-justify mar-l-20 mar-t-20'> System {systemId}: {systemType}</p>
        </Col>
        <Col xs={1}>
          <button className='btn-plus bold' onClick={() => handleRemoveSystem(systemType, systemId)}>-</button>
        </Col>
      </Row>    
    </div>
  );
}