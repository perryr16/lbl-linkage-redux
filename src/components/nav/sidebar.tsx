import React from 'react';
import {useSelector} from 'react-redux';
import {selectStep} from '../steps/step-slice'
import {selectStep1} from '../steps/step1-slice'
import {Link} from 'react-router-dom';


interface Props {

}

export const Sidebar: React.FC<Props> = () => {
   const address = "1255 Flint Street, Denver, CO"
   const currentStep = useSelector(selectStep)
   const step1 = useSelector(selectStep1)

   const mapProjectDetails = () => {
      let stepArr:number[] = []
      for (let i = 1; i <= currentStep.step; i++) {stepArr.push(i)}

      return (
         stepArr.map(step => (
            <div className='proj-details'>
               <Link to={`/step${step}`} className='btn-edit-step'>EDIT</Link>
               <p className='bold'>{step}: {stepRef[step]}</p>
            </div>
         ))
      )
   }

   const mapStep1 = () => {
      return (
         <div className='proj-details'>
               <Link to={`/step1`} className='btn-edit-step'>EDIT</Link>
               <p className='bold'>1: {stepRef[1]}</p>
               <p>
               {Object.keys(step1).map(key => (
                  step1[key] && `${step1[key]} | `
               ))}
               </p>
               {/* <p>energyCode: {step1.energyCode}</p>
               <p>location: {step1.locatino}</p>
               <p>3: {step1.input3} | 4: {step1.input4} | 5: {step1.input4}</p> */}
         </div>
      )
   }

   const mapStep2 = () => {
      <div className='proj-details'>
         <Link to={`/step2`} className='btn-edit-step'>EDIT</Link>
         <p className='bold'>2: {stepRef[2]}</p>
      </div>
   }
   const mapStep3 = () => {
      <div className='proj-details'>
         <Link to={`/step3`} className='btn-edit-step'>EDIT</Link>
         <p className='bold'>3: {stepRef[3]}</p>
      </div>
   }
   const mapStep4 = () => {
      <div className='proj-details'>
         <Link to={`/step4`} className='btn-edit-step'>EDIT</Link>
         <p className='bold'>4: {stepRef[4]}</p>
      </div>
   }
   const mapStep5 = () => {
      <div className='proj-details'>
         <Link to={`/step5`} className='btn-edit-step'>EDIT</Link>
         <p className='bold'>5: {stepRef[5]}</p>
      </div>
   }
   const mapStep6 = () => {
      <div className='proj-details'>
         <Link to={`/step6`} className='btn-edit-step'>EDIT</Link>
         <p className='bold'>6: {stepRef[6]}</p>
      </div>
   }

   return (
      <div className='sidebar'>
         <div className='address'>
            <p>{address}</p>
         </div>
         <div className='proj-details-a'>
            <p className='bold'>Project Details</p>
         </div>
         {mapStep1()}
         {mapStep2()}
         {mapStep3()}
         {mapStep4()}
         {mapStep5()}
         {mapStep6()}
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