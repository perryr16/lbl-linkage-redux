import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import {ContextMenu} from '../../components/index'
import {stepRef, systems} from '../../constants/index'
import {selectStep3} from '../../features/index'
import { resetStep3 } from '../../features/steps/step3-slice';


interface Props {
  handleStep: any;
}

export const SidebarStep3: React.FC<Props> = (props) => {
  const {handleStep} = props;
  const outerRef = useRef(null)
  const dispatch = useDispatch()
  let step3 = useSelector(selectStep3)


  const handleResetStep3 = ():void => {
    dispatch(resetStep3())
  }

  const menuItems = [
    {text: 'Alert 3', onClick: () => {alert('Step 3')}},
    {text:  <Link to={`/step3`} className='context-menu-item-link' onClick={handleStep(3)}>Edit Step 3</Link>,
    onClick: null},
  ]
  
  return (
    <div className='proj-details' ref={outerRef} data-testid='sidebar-step3'>
      <Link to={`/step3`} className='btn-edit-step' onClick={handleStep(3)}>EDIT</Link>
      <button className='btn-edit-step' type='button' onClick={() => handleResetStep3()}>RESET</button>
      <p className='bold'>3: {stepRef[3]}</p>
      {Object.keys(step3).map((systemType:any) => (
        <>
          {step3SystemType(systemType)}
          {mapStep3Systems(step3, systemType)}
        </>
      ))}
      <ContextMenu outerRef={outerRef} items={menuItems} />
    </div>
  );
}

// Helpers //

const step3SystemType = (systemType:any) => {
  return (
     <p key= {'1'} className='bold side-sys-type gray'>{systemType}</p>
  )
}
const mapStep3Systems = (step3:any, systemType:any) => {
  return (
      step3[systemType].map((system:any) => (
        <p className='indent bold txt-15'>{step3Icon(systemType)} {step3Qty(system)} {step3Name(system)} {step3Inputs(system)}</p>
      ))
  )
}
const step3Name = (system:any) => {
  return system.systemName && system.systemName
}
const step3Qty = (system:any) => {
  return system.qty && `(${system.qty})`
}
const step3Icon = (systemType:any) => {
  return (
    systems.filter(system => system.type === systemType)[0].iconDetail
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