import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectStep, selectStep2, selectStep3} from '../index'
import {stepRef} from '../../constants/index';
import {SidebarStep3, SidebarStep1, SidebarStep2} from '../../components/index'
import {setStep} from '../steps/step-slice'


interface Props {

}

export const Sidebar: React.FC<Props> = () => {
   const dispatch = useDispatch()
   const address = "1255 Flint Street, Denver, CO"
   const currentStep = useSelector(selectStep)

   const handleStep = (step:number):any => {
      return () => {
         return dispatch(setStep(step))
      }
   }

   const mapStep4 = () => {
      return (
         <div className='proj-details'>
            <Link to={`/step4`} className='btn-edit-step' onClick={handleStep(4)}>EDIT</Link>
            <p className='bold'>4: {stepRef[4]}</p>
         </div>
      )
   }
   const mapStep5 = () => {
      return (
         <div className='proj-details'>
            <Link to={`/step5`} className='btn-edit-step' onClick={handleStep(5)}>EDIT</Link>
            <p className='bold'>5: {stepRef[5]}</p>
         </div>
      )
   }
   const mapStep6 = () => {
      return (
         <div className='proj-details'>
            <Link to={`/step6`} className='btn-edit-step' onClick={handleStep(6)}>EDIT</Link>
            <p className='bold'>6: {stepRef[6]}</p>
         </div>
      )
   }

   return (
      <div className='sidebar'>
         <div className='address pad-30'>
            <p className='under-gray'>{address}</p>
         </div>
         <div className='proj-details-a'>
            <p className='bold '>Project Details:</p>
         </div>
         {currentStep.step > 1 && <SidebarStep1 handleStep={handleStep}/>}
         {currentStep.step > 2 && <SidebarStep2 handleStep={handleStep}/>}
         {currentStep.step > 3 && <SidebarStep3 handleStep={handleStep}/>}
         {currentStep.step > 4 && mapStep4()}
         {currentStep.step > 5 && mapStep5()}
         {currentStep.step > 6 && mapStep6()}
      </div>
   );
}

