import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter, Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {StepRouter} from '../index'
import {selectStep, increment, decrement, setStep} from '../steps/stepSlice'
import {stepFix} from '../../helpers/step-helper'



export const NavBar: React.FC = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectStep)

  const incrementStep = () => {
    dispatch<any>(increment())
  }
  const decrementStep = () => {
    dispatch<any>(decrement())
  }

  const changeStep = (change:number):any => {
    let newStep = stepFix(currentStep.step + change)
    return () => {
      return dispatch<any>(setStep(newStep))
    }
  }

  const newStep = (change:number) => {
    return stepFix(currentStep.step + change)
  }

  
   return (
     <div className='nav-bar'>
      <Row>
        <Col >
          <p>Step {currentStep.step}/6 </p>
          <p>{currentStep.title}</p>
        </Col>
        <Col>
          <p> Download My Progress</p>
          <button onClick={decrementStep}>-</button>
          <button onClick={incrementStep}>+</button>
        </Col>
      </Row>  
            <BrowserRouter>
              <Link className='nav-btn nav-next bold' to={`/step${newStep(1)}`} onClick={changeStep(+1)}>NEXT STEP</Link>
              <Link className='nav-btn nav-back bold' to={`/step${newStep(-1)}`} onClick={changeStep(-1)}>BACK </Link>
              <StepRouter />
            </BrowserRouter>
          <p>{stepPrompts[currentStep.step]}</p>

     </div>
   );
}


const stepPrompts:any = {
  1: "Tell us about your project and it's enrgy standards:",
  2: "Select the systems your building will use:",
  3: "Tell us about how your systems will be configured:",
  4: "Add your system level equipment",
  5: "Add your non-system equipment",
}