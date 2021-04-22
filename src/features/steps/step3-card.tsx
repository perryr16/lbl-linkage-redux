import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetStep3} from './step3-slice';
import {selectStep2} from './step2-slice';
import {SystemAddCard} from '../index';
import {addSystemType, addSystemId, selectStep3} from './step3-slice'



export const Step3Card: React.FC = () => {
   const dispatch = useDispatch()
   let step2 = useSelector(selectStep2)
   let step3 = useSelector(selectStep3)


   useEffect(() => {
      step2.map((system:any) => (
         step3[system.systemType] ? null : dispatch(addSystemType(system.systemType))
      ))
   },[])

   return (
      <div className='step-card' data-testid='step3-card'>
         {step2.map((system: any, i:any) => (
            <div className='under-blue' key={i}> 
               <SystemAddCard 
                  systemType={system.systemType}
               />
            </div>
         ))}
      </div>
   );
}