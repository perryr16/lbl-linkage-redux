import React from 'react';
import {useDispatch} from 'react-redux';
import {Col, Row} from 'react-bootstrap';

import {addSystemKeyValue, removeSystemTypeById} from '../steps/step3-slice';

interface Props {
  systemType: string;
  systemId: number;
  handleRemoveSystem: any
}

export const SystemDetailCard: React.FC<Props> = (props) => {
  const {systemType, systemId, handleRemoveSystem} = props;
  const dispatch = useDispatch();

  const handleChange = (e:any) => {
    const payload = {systemId: systemId, key: e.target.id , value: e.target.value, systemType: systemType}
    dispatch(addSystemKeyValue(payload))
  }

  return (
    <div className='sys-detail'>
      <p className='bold txt-20 marg-bottom-20 left-justify mar-l-20 mar-t-20'> System {systemId}: {systemType}</p>
      <div className='margin-15' >
          <button className='btn-rm' onClick={() => handleRemoveSystem(systemType, systemId)}>-</button>
          <Row>
            <Col xs={9}>
                <label htmlFor={`systemName`} className='txt-15 bold float-l'>System Name</label>
                <input type="text" className="form-control" id="systemName" placeholder='System 1' onChange={handleChange}/>
            </Col>
            <Col xs={2} >
                <label htmlFor={`qty`} className='txt-15 bold float-l'>Quantity</label>
                <input type="number" className="form-control" id={`qty`} placeholder='0' onChange={handleChange}/>
            </Col>
          </Row>
          <label htmlFor={`zone`} className='txt-15 bold float-l'>Single or Multi Zone</label>
          <select className="form-control" id={`zone`} onChange={handleChange} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Select One</option>
            <option >Single Zone</option>
            <option >Multi Zone</option>
          </select>
      </div>
    </div>
  );
}