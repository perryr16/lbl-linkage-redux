import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {resetStep2} from './step2-slice'

interface Props {

}

export const Step4Card: React.FC<Props> = () => {
   const dispatch = useDispatch();
   dispatch(resetStep2('na'))

   return (
      <div className='step-card'>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>
         <h1>STEP 4</h1>

      </div>
   );
}