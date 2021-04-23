import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import {selectStep, setStep} from '../steps/step-slice'
import {selectStep1, selectStep2, selectStep3} from '../index'
import {stepFix} from '../../helpers/step-helper'



export const NavBar: React.FC = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectStep)
  const step1 = useSelector(selectStep1)
  const step2 = useSelector(selectStep2)
  const step3 = useSelector(selectStep3)

  const changeStep = (change:number):any => {
    let newStep = stepFix(currentStep.step + change)
    dispatch(setStep(newStep))
  }

  const newStep = (change:number) => {
    return stepFix(currentStep.step + change)
  }

  const step1Ready = () => {
    return {
      ready: Object.keys(step1).every(key => step1[key] !== ''),
      message: 'Enter all required fields' 
    }
  }
  const step2Ready = () => {
    return {
      ready: step2.length !== 0, 
      message: 'Select at least one system'
    }
  }
  const step3Ready = () => {
    console.log('step3', step3)
    if (Object.keys(step3).every(key => step3[key].length === 0)) {
    return {
      ready: false,
      message: 'Please add inputs for selected systems'
      }
    } else if (false) {
      return 'false'
    } else {
      return {ready: true, message: 'n/a'}
    }
  }

  const nextStepReady:any = () => {
    switch(currentStep.step) {
      case 1: return step1Ready();
      case 2: return step2Ready();
      case 3: return step3Ready();
      default: return {ready: true, message: 'n/a'}
    }
  }


  
  return (
    <div data-testid='nav-bar' className='nav-bar'>
      <div className='under-blue pad-l-20 pad-t-10' >
        <p data-testid="step-name" className='txt-15 bold line-h'>STEP {currentStep.step}/6 </p>
        <p className='txt-25 bold gray line-h pad-b-10'>{currentStep.title}</p>
        <p className='download-progress'> Download My Progress</p>
      </div>
      <div className='nav-btns'>
        {nextStepReady().ready
          ? <Link className='nav-btn nav-next bold' to={`/step${newStep(1)}`} onClick={() => changeStep(1)}>NEXT STEP</Link>
          : <button className='nav-btn nav-next bold' onClick={() => alert(nextStepReady().message)}>NEXT STEP</button>
        }
        <Link className='nav-btn nav-back bold' to={`/step${newStep(-1)}`} onClick={() => changeStep(-1)}>BACK </Link>
      </div>

      <p className='txt-20 bold pad-l-40 pad-t-20'>{stepPrompts[currentStep.step]}</p>

     </div>
   );
}


const stepPrompts:any = {
  1: "Tell us about your project and it's energy standards:",
  2: "Select the systems your building will use:",
  3: "Tell us about how your systems will be configured:",
  4: "Add your system level equipment",
  5: "Add your non-system equipment",
}

