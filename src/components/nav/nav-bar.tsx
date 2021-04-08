import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import {selectStep, setStep} from '../steps/step-slice'
import {stepFix} from '../../helpers/step-helper'



export const NavBar: React.FC = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectStep)

  // const incrementStep = () => {
  //   dispatch<any>(increment())
  // }
  // const decrementStep = () => {
  //   dispatch<any>(decrement())
  // }

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
      <div className='under-blue pad-l-20 pad-t-10' >
        <p className='txt-15 bold line-h'>STEP {currentStep.step}/6 </p>
        <p className='txt-25 bold gray line-h pad-b-10'>{currentStep.title}</p>
        <p className='download-progress'> Download My Progress</p>
      </div>
      <div className='nav-btns'>
        <Link className='nav-btn nav-next bold' to={`/step${newStep(1)}`} onClick={changeStep(+1)}>NEXT STEP</Link>
        <Link className='nav-btn nav-back bold' to={`/step${newStep(-1)}`} onClick={changeStep(-1)}>BACK </Link>
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

{/* <button onClick={decrementStep}>-</button>
<button onClick={incrementStep}>+</button> */}