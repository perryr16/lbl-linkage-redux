import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addSystemType, selectStep3} from './step3-slice';
import {selectStep2} from './step2-slice';


interface Props {

}

export const Step3Card: React.FC<Props> = () => {
   const dispatch = useDispatch()
   const step2 = useSelector(selectStep2)

   useEffect(() => {
      step2.map((system:any) => (
         dispatch(addSystemType(system.systemType))
      ))
   },[])

   return (
      <div className='step-card'>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>
         <h1>STEP 3</h1>

      </div>
   );
}