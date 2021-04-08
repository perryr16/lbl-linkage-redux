import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {SystemDetailCard} from '../index';

interface Props {
  systemType: string;
}

export const SystemAddCard: React.FC<Props> = (props) => {
  const {systemType} = props;
  const [systemDetailCards, setSystemDetailCards] = useState([{systemType: systemType, sysId: 0}]);

  useEffect(() => {
    mapSystemDetailCards()
  }, [systemDetailCards])

  const mapSystemDetailCards = () => {
    return(
      <div>
        {systemDetailCards.map((system:any) => (
          <SystemDetailCard systemType={system.systemType} sysId={system.sysId} />
        ))}
      </div>
    )
  }

  const handleAddSystem = () => {
    let newSystem = {systemType: systemType, sysId: systemDetailCards.length}
    setSystemDetailCards((prev) => [...prev, newSystem ])
    // systemDetailCards.push({systemType: systemType, sysId: systemDetailCards.length})
    // mapSystemDetailCards()
    console.log(systemDetailCards)
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