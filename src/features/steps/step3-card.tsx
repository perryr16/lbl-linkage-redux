import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addSystemType, selectStep3, addSystemId} from './step3-slice';
import {selectStep2} from './step2-slice';
import {SystemDetailCard, SystemAddCard} from '../index';


interface Props {

}

export const Step3Card: React.FC = () => {
   const dispatch = useDispatch()
   const step2 = useSelector(selectStep2)

   useEffect(() => {
      step2.map((system:any) => (
         setupStep3(system)
      ))
   })

   const setupStep3 = (system:any) => {
         dispatch(addSystemType(system.systemType))
         dispatch(addSystemId({systemType: system.systemType, systemId:0}))
   }

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