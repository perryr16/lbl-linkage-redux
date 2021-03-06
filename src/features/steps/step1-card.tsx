import React  from 'react';
import {states} from '../../constants/states'
import {useDispatch, useSelector} from 'react-redux'
import {setEnergyCode, setLocation, setInput3, setInput4, setInput5} from './step1-slice'
import {selectStep1} from './step1-slice'
 

interface Props {

}

export const Step1Card: React.FC<Props> = () => {
   const dispatch = useDispatch()
   const step1 = useSelector(selectStep1)



   const handleEnergyCode = (e:any) => {
      dispatch<any>(setEnergyCode(e.target.value))
   }
   const handleLocation = (e:any) => {
      dispatch<any>(setLocation(e.target.value))
   }
   const handleInput3 = (e:any) => {
      dispatch<any>(setInput3(e.target.value))
   }
   const handleInput4 = (e:any) => {
      dispatch<any>(setInput4(e.target.value))
   }
   const handleInput5 = (e:any) => {
      dispatch<any>(setInput5(e.target.value))
   }

   const ready = () => {
      return Object.keys(step1).every(key => step1[key] !== '')
   }


   const inputStyle = (step1Input:any) => {
      return step1Input === '' 
      ? {background: 'rgba(241, 127, 20, 0.479)', transition: 'background 1s'}
      : {background: 'none', transition: 'background 1s'}
   }

   return (
      <div className='step-card' data-testid="step1-card">
         <p>{ready() ? 'ready' : 'not ready'}</p>
         <form data-testid='form'>
            <div className="">
               <div className='margin-15'>
                  <label htmlFor="energyCode" className='txt-15 left-10-vw'>Energy Code</label>
                  <select 
                     className="form-control" 
                     id="energyCode" 
                     onChange={handleEnergyCode} 
                     defaultValue={'DEFAULT'}
                     style={inputStyle(step1.energyCode)}>
                     <option key="1.1" value="DEFAULT" disabled>{step1.energyCode || 'Ashrea Guideline'}</option>
                     <option key="1.2">Ashrae Guideline 36</option>
                     <option key="1.3">Ashrae Guideline 44</option>
                     <option key="1.4">Ashrae Guideline 55</option>
                     <option key="1.5">Ashrae Guideline 66</option>
                  </select>
               </div>
               <div className='margin-15'>
                  <label htmlFor="state" className='txt-15 left-10-vw'>What State is Your Facility In?</label>
                  <select 
                     className="form-control" 
                     id="state" 
                     onChange={handleLocation} 
                     defaultValue={'DEFAULT'}
                     style={inputStyle(step1.location)}
                     >
                     <option value="DEFAULT" disabled>{step1.location || 'State'}</option>
                     {states.map((state, index) => (
                        <option key={`2.${index}`}>{state}</option>
                     ))}
                  </select>
               </div>
               <div className='margin-15'>
                  <label htmlFor="input3" className='txt-15 left-10-vw'>Input 3</label>
                  <select 
                     className="form-control" 
                     id="input3" 
                     onChange={handleInput3} 
                     defaultValue={step1.input3 || 'Choose an Option'}
                     style={inputStyle(step1.input3)}
                     >
                     <option disabled>Choose an Option</option>
                     <option key="3.1">Option 1</option>
                     <option key="3.2">Option 2</option>
                     <option key="3.3">Option 3</option>
                     <option key="3.4">Option 4</option>
                  </select>
               </div>
               <div className='margin-15'>
                  <label htmlFor="input4" className='txt-15 left-10-vw'>Input 4</label>
                  <select 
                     className="form-control" 
                     id="input4" 
                     onChange={handleInput4} 
                     defaultValue={step1.input4 || 'Choose an Option'} 
                     data-testid='input4'
                     style={inputStyle(step1.input4)}
                     >
                     <option disabled>Choose an Option</option>
                     <option key="4.1">Option 1</option>
                     <option key="4.2">Option 2</option>
                     <option key="4.3">Option 3</option>
                     <option key="4.4">Option 4</option>
                  </select>
               </div>
               <div className='margin-15'>
                  <label htmlFor="input5TextArea" className='txt-15 left-10-vw'>Input 5</label>
                  <textarea 
                     className="form-control" 
                     id="input5TextArea" 
                     placeholder='Option' 
                     defaultValue={step1.input5}
                     onChange={handleInput5}
                     style={inputStyle(step1.input5)}
                     ></textarea>
               </div>
            </div>
         </form>
      </div>
   );
}