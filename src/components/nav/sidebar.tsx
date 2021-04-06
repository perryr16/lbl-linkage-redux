import React from 'react';
import {useSelector} from 'react-redux';
import {selectStep} from '../steps/stepSlice'


interface Props {

}

export const Sidebar: React.FC<Props> = () => {
   const address = "1255 Flint Street, Denver, CO"
   const currentStep = useSelector(selectStep)

   const mapProjectDetails = () => {
      let stepArr:number[] = []
      for (let i = 1; i <= currentStep.step; i++) {stepArr.push(i)}

      return (
         stepArr.map(step => (
            <div className='proj-details'>
               <p>step: {step}</p>
            </div>
         ))
      )
   }

   return (
      <div className='sidebar'>
         <div className='address'>
            <p>{address}</p>
         </div>
         <div className='proj-details-a'>
            <p className='bold'>Project Details</p>
         </div>
         {mapProjectDetails()}
      </div>
   );
}