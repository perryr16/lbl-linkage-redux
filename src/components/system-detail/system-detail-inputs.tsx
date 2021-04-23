import React from 'react';
import {useSelector} from 'react-redux';
import {selectStep3} from '../../features/steps/step3-slice';
import {Col, Row} from 'react-bootstrap';

interface Props {
  handleChange: any;
  inputOptions: any;
  systemId: any;
  systemType: any;
}

export const SystemDetailInputs: React.FC<Props> = (props) => {
  const {handleChange, inputOptions, systemType, systemId} = props;

  const step3 = useSelector(selectStep3)

  const systemDetails = step3[systemType].find((system:any) => system.id === systemId)

  return (
    <div className='margin-15'>
      <Row>
        <Col xs={9}>
            <label htmlFor='systemName' className='txt-15 bold float-l'>System Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="systemName" 
              placeholder='Enter System Name'
              defaultValue={systemDetails.systemName} 
              onChange={handleChange}
              onFocus={(e:any) => e.target.placeholder = ''}
              />
        </Col>
        <Col xs={2} >
            <label htmlFor='qty' className='txt-15 bold float-l'>Quantity</label>
            <input type="number" className="form-control" id={`qty`} placeholder={systemDetails.qty || '0'} onChange={handleChange}/>
        </Col>
      </Row>
      {Object.keys(inputOptions).map((key, i) => (
        <div key={i}>
          <label htmlFor={key} className='txt-15 bold float-l'>{key}</label>
          <select className="form-control" id={key} onChange={handleChange} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>{systemDetails[key] || `Choose ${key}`}</option>
          {inputOptions[key].map((input:string|number, index:number) => (
            <option key={index}>{input}</option>
          ))}
          </select>
        </div>
      ))}
    </div>
);
}