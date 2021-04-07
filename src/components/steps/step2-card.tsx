import React from 'react';
import {useSelector} from 'react-redux'
import {selectStep1} from '../steps/step1-slice'

interface Props {

}

export const Step2Card: React.FC<Props> = () => {
   const currentStep1 = useSelector(selectStep1)
   console.log(currentStep1)
   return (
      <div className='step-card'>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
         <h1>STEP 2</h1>
      </div>
   );
}