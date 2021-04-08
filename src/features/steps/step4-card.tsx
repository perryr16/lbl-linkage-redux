import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectStep3} from './step3-slice';
interface Props {

}

export const Step4Card: React.FC<Props> = () => {
   const step3 = useSelector(selectStep3)
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