import React, { useEffect, useState } from 'react';
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
  const systemDetails = () => {
    return step3[systemType].find((system:any) => system.id == systemId)
  }

  const initialUserInputs:any = {systemName: 'System Name', qty: '0'}
  for (let key in inputOptions) {
    initialUserInputs[key] = key
  }
  const [userInputs, setUserInputs] = useState(initialUserInputs);

  
  useEffect(() => {
    // you just solved for system details. 
    // everytime step3 updates setUserInputs with systemDetails 
    // or the initial state

    // setUserInputs({
    //   ...userInputs, 
    //   systemName = step3.
    // })

    // console.log('inputs:', inputs)
  }, [step3])
  
  return (
    <div className='margin-15'>
      <Row>
        <Col xs={9}>
            <label htmlFor='systemName' className='txt-15 bold float-l'>System Name</label>
            <input type="text" className="form-control" id="systemName" defaultValue={userInputs.systemName} onChange={handleChange}/>
        </Col>
        <Col xs={2} >
            <label htmlFor='qty' className='txt-15 bold float-l'>Quantity</label>
            <input type="number" className="form-control" id={`qty`} placeholder={userInputs.qty} onChange={handleChange}/>
        </Col>
      </Row>
      {Object.keys(inputOptions).map((key, i) => (
        <div key={i}>
          <label htmlFor={key} className='txt-15 bold float-l'>{key}</label>
          <select className="form-control" id={key} onChange={handleChange} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>{userInputs[key]}</option>
          {inputOptions[key].map((input:string|number, index:number) => (
            <option key={index}>{input}</option>
          ))}
          </select>
        </div>
      ))}
    </div>
);
}