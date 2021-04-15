import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectStep} from '../index'
import {SidebarStep1, SidebarStep2, SidebarStep3, SidebarStep4, SidebarStep5, SidebarStep6} from '../../components/index'
import {setStep} from '../steps/step-slice'


interface Props {

}

export const Sidebar: React.FC<Props> = () => {
   const outerRef = useRef(null)
   const dispatch = useDispatch()
   const address = "1255 Flint Street, Denver, CO"
   let currentStep = useSelector(selectStep)

   const handleStep = (step:number):any => {
      // return () => {
      //    return dispatch(setStep(step))
      // }
      return () => {
         return dispatch<any>(setStep(step))
       }
      // return dispatch(setStep(step))

   }
   console.log('current step:', currentStep)
   

   return (
      <div className='sidebar' ref={outerRef}>
      {/* <div className='sidebar' ref={containerRef}> */}
         <div className='address pad-30'>
            <p className='under-gray'>{address}</p>
         </div>
         <div className='proj-details-a'>
            <p className='bold '>Project Details:</p>
         </div>
         {currentStep.step > 1 && <SidebarStep1 handleStep={handleStep} />}
         {currentStep.step > 2 && <SidebarStep2 handleStep={handleStep} />}
         {currentStep.step > 3 && <SidebarStep3 handleStep={handleStep} />}
         {currentStep.step > 4 && <SidebarStep4 handleStep={handleStep} />}
         {currentStep.step > 5 && <SidebarStep5 handleStep={handleStep} />}
      </div>
   );
}

