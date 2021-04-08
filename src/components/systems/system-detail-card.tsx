import React from 'react';
import {Col, Row} from 'react-bootstrap'
import { convertCompilerOptionsFromJson } from 'typescript';

interface Props {
  systemType: string;
  sysId: number;
}

export const SystemDetailCard: React.FC<Props> = (props) => {
  const {systemType, sysId} = props;

  const handleChange = () => {
    console.log('handleChange')
  }
  return (
    <div className='sys-detail'>
      <p className='bold txt-20 marg-bottom-20 left-justify mar-l-20 mar-t-20'> System: {systemType} id: {sysId}</p>
      <div className='margin-15' >
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