import React from 'react';
import {Col, Row} from 'react-bootstrap';

interface Props {
  handleChange: any;
  inputs: any;
}

export const SystemDetailInputs: React.FC<Props> = (props) => {
  const {handleChange, inputs} = props;
  
  return (
    <div className='margin-15' >
      <Row>
        <Col xs={9}>
            <label htmlFor='systemName' className='txt-15 bold float-l'>System Name</label>
            <input type="text" className="form-control" id="systemName" placeholder='System 1' onChange={handleChange}/>
        </Col>
        <Col xs={2} >
            <label htmlFor='qty' className='txt-15 bold float-l'>Quantity</label>
            <input type="number" className="form-control" id={`qty`} placeholder='0' onChange={handleChange}/>
        </Col>
      </Row>
      {Object.keys(inputs).map(key => (
        <div>
          <label htmlFor={key} className='txt-15 bold float-l'>{key}</label>
          <select className="form-control" id={key} onChange={handleChange} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>Select One</option>
          {inputs[key].map((input:string|number, index:number) => (
            <option key={index}>{input}</option>
          ))}
          </select>
        </div>
      ))}
    </div>
);
}