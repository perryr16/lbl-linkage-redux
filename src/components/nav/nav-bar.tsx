import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter, Link} from 'react-router-dom'
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
    let newStep = stepFix(currentStep + change)
    return () => {
      return dispatch<any>(setStep(newStep))
    }
  }

  const newStep = (change:number) => {
    return stepFix(currentStep + change)
  }

  
   return (
     <div>
      <button onClick={decrementStep}>-</button>
      <button onClick={incrementStep}>+</button>
      <p>{currentStep}</p>
      <BrowserRouter>
          <Link to={`/step${newStep(-1)}`} onClick={changeStep(-1)}>back </Link>
          <Link to={`/step${newStep(1)}`} onClick={changeStep(+1)}>next</Link>
          <StepRouter />
      </BrowserRouter>
     </div>
   );
}
