import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetStep3} from './step3-slice';
import {selectStep2} from './step2-slice';
import {SystemAddCard} from '../index';



export const Step3Card: React.FC = () => {
   const dispatch = useDispatch()
   let step2 = useSelector(selectStep2)
   // let step3 = useSelector(selectStep3)

   useEffect(() => {
      // console.log('initial render')
      // console.log('step2:', step2)
      dispatch(resetStep3('na'))
   },[])

   // useEffect(() => {
   //    step2.map((system:any) => (
   //       setupStep3(system)
   //    ))
   // })

   // const setupStep3 = (system:any) => {
   //       // console.log('reset Step 3')
   //       // step3 = useSelector(selectStep3)
   //       // dispatch(addSystemType(system.systemType))
   //       // dispatch(addSystemId({systemType: system.systemType, systemId:0}))
   // }

   return (
      <div className='step-card'>
         {step2.map((system: any) => (
            <div className='under-blue'> 
               <SystemAddCard 
                  systemType={system.systemType}
               />
            </div>
         ))}
      </div>
   );
}