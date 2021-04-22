import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectStep} from '../index'
import {SidebarStep1, SidebarStep2, SidebarStep3, SidebarStep4, SidebarStep5} from '../../components/index'
import {setStep} from '../steps/step-slice'
import { resetStep1 } from '../steps/step1-slice';
import { resetStep2 } from '../steps/step2-slice';
import { resetStep3 } from '../steps/step3-slice';


interface Props {

}

export const Sidebar: React.FC<Props> = () => {
   const outerRef = useRef(null)
   const dispatch = useDispatch()
   const address = "1255 Flint Street, Denver, CO"
   let currentStep = useSelector(selectStep)

   const handleStep = (step:number):any => {

      // dispatch<any>(setStep(step))
      return() => {
         return dispatch(setStep(step))
      }
   }

   const handleResetStore = () => {
         dispatch(resetStep1())
         dispatch(resetStep2())
         dispatch(resetStep3())

   }
   

   return (
      <div className='sidebar' data-testid='sidebar' ref={outerRef}>
         <div className='address pad-30'>
            <p className='under-gray'>{address}</p>
         </div>
         <div className='proj-details-a'>
            <button className='btn-edit-step' type='button' onClick={() => handleResetStore()}>RESET STORE</button>
            <p className='bold '>Project Details:</p>

         </div>
         {currentStep.step > 1 && <SidebarStep1 handleStep={handleStep}/>}
         {currentStep.step > 2 && <SidebarStep2 handleStep={handleStep}/>}
         {currentStep.step > 3 && <SidebarStep3 handleStep={handleStep}/>}
         {currentStep.step > 4 && <SidebarStep4 handleStep={handleStep}/>}
         {currentStep.step > 5 && <SidebarStep5 handleStep={handleStep}/>}
      </div>
   );
}

