import React from 'react';
import {Link} from 'react-router-dom'
import {stepRef} from '../../constants/step-ref'
import {systems} from '../../constants/systems'

interface Props {
  handleStep: any;
  step3: any;
}

export const SidebarStep3: React.FC<Props> = (props) => {
  const {step3, handleStep} = props;
  
  return (
    <div className='proj-details'>
      <Link to={`/step3`} className='btn-edit-step' onClick={() => handleStep(3)}>EDIT</Link>
      <p className='bold'>3: {stepRef[3]}</p>
      {Object.keys(step3).map((systemType:any) => (
        <>
          {step3SystemType(systemType)}
          {mapStep3Systems(step3, systemType)}
        </>
      ))}
    </div>
  );
}


const step3SystemType = (systemType:any) => {
  return (
     <p className='bold side-sys-type gray'>{systemType}</p>
  )
}

const mapStep3Systems = (step3:any, systemType:any) => {
  console.log('step3Systems:', step3[systemType])
  return (
      step3[systemType].map((system:any) => (
        <p className='indent bold txt-15'>{step3Icon(systemType)} {step3Qty(system)} {step3Name(system)} {step3Inputs(system)}</p>
      ))
  )
}
const step3Name = (system:any) => {
  console.log('step3Name:', system.systemName)
  return system.systemName && system.systemName
}
const step3Qty = (system:any) => {
  console.log('step3Qty')
  return system.qty && `(${system.qty})`
  
}
const step3Icon = (systemType:any) => {
  return (
    systems.filter(system => system.type == systemType)[0].iconDetail
    )
}
const step3Inputs = (system:any) => {
  const keysToDelete = ['id', 'systemName', 'qty']
  const relaventInputs = {...system}
  keysToDelete.forEach(key => delete relaventInputs[key])
  return step3InputString(relaventInputs)
}

const step3InputString = (relaventInputs:any) => {
  let returnString = ''
  Object.keys(relaventInputs).map(key => (
    returnString += `| ${relaventInputs[key]}`
  ))
  return returnString
}