import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import {StepRouter} from '../index'
import {selectStep, incrementStep, decrementStep, setStep} from '../steps/stepSlice'
import {stepFix} from '../../helpers/step-helper'

export const NavBar: React.FC = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectStep)

  const increment = () => {
    dispatch(incrementStep())
  }
  const decrement = () => {
    dispatch(decrementStep())
  }

  const changeStep = (change:number):any => {
    let newStep = stepFix(currentStep + change)
    return () => {
      return dispatch(setStep(newStep))
    }
  }

  const newStep = (change:number) => {
    return stepFix(currentStep + change)
  }

  
   return (
     <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <p>{currentStep}</p>
      <BrowserRouter>
          <Link to={`/step${newStep(-1)}`} onClick={changeStep(-1)}>back </Link>
          <Link to={`/step${newStep(1)}`} onClick={changeStep(+1)}>next</Link>
          <StepRouter />
      </BrowserRouter>
     </div>
   );
}
