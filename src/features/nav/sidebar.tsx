import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectStep} from '../steps/step-slice'
import {selectStep1} from '../steps/step1-slice'
import {selectStep2} from '../steps/step2-slice'
import {selectStep3} from '../steps/step3-slice'
import {Link} from 'react-router-dom';
import {setStep} from '../steps/step-slice'
import {systems} from '../../constants/systems';
import {SidebarStep3} from '../../components/index'



interface Props {

}

export const Sidebar: React.FC<Props> = () => {
   const dispatch = useDispatch()
   const address = "1255 Flint Street, Denver, CO"
   const currentStep = useSelector(selectStep)
   const step1 = useSelector(selectStep1)
   const step2 = useSelector(selectStep2)
   const step3 = useSelector(selectStep3)

   const handleStep = (step:number):any => {
      return () => {
         return dispatch(setStep(step))
      }
   }

   const mapStep1 = () => {
      return (
         <div className='proj-details'>
            <Link to={`/step1`} className='btn-edit-step' onClick={handleStep(1)}>EDIT</Link>
            <p className='bold'>1: {stepRef[1]}</p>
            <p>
            {Object.keys(step1).map(key => (
               step1[key] && `| ${step1[key]} `
            ))}
            </p>
         </div>
      )
   }

   const mapStep2 = () => {
      return (
         <div className='proj-details'>
            <Link to={`/step2`} className='btn-edit-step' onClick={handleStep(2)}>EDIT</Link>
            <p className='bold'>2: {stepRef[2]}</p>
            {step2.map((system:any) => (
               <p>{system.icon} {system.systemType}</p>
            ))}
         </div>
      )
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
         <div className='address'>
            <p className='under-gray'>{address}</p>
         </div>
         <div className='proj-details-a'>
            <p className='bold'>Project Details:</p>
         </div>
         {currentStep.step > 1 && mapStep1()}
         {currentStep.step > 2 && mapStep2()}
         {currentStep.step > 3 && 
            <SidebarStep3 
               handleStep={handleStep} 
               step3={step3}
            />}
         {currentStep.step > 4 && mapStep4()}
         {currentStep.step > 5 && mapStep5()}
         {currentStep.step > 6 && mapStep6()}
      </div>
   );
}

const stepRef:any = {
   1: 'Project Specifications',
   2: 'System Selections',
   3: 'System Details',
   4: 'System Equipment',
   5: 'Non-System Equipment',
   6: 'System Review',
}