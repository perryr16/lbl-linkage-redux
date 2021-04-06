import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import {Step1Card, Step2Card, Step3Card, StepRouter} from '../index'
import {store} from '../../store/store';
import {selectStep, incrementStep, decrementStep, setStep} from '../steps/stepSlice'


interface Props {
  dispatch?: any
}

export const NavBar: React.FC<Props> = (props) => {
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

  const stepFix = (step:number) => {
    if (step < 1) {
      return 6
    } else if (step > 6) {
      return 1
    } else {
      return step
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
