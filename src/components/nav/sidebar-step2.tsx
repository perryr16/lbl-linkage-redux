import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {stepRef} from '../../constants/index'
import {useSelector, useDispatch} from 'react-redux';
import {selectStep2} from '../../features/index'
import {ContextMenu} from '../../components/index'
import {systems} from '../../constants/index'
import {resetStep2} from '../../features/steps/step2-slice'




interface Props {
  handleStep:any
}

export const SidebarStep2: React.FC<Props> = (props) => {
  const {handleStep} = props;
  const outerRef = useRef(null)
  const step2:any = useSelector(selectStep2)
  const dispatch = useDispatch()

  const menuItems2 = [
    {text: 'Alert 2', onClick: () => alert('Step 2'),},
    {text:  <Link to={`/step2`} className='context-menu-item-link' onClick={handleStep(2)}>Edit Step 2</Link>,
    onClick: null},
 ]
 
  const handleResetStep2 = ():any => {
    dispatch(resetStep2())
  }


  return (
    <div className='proj-details' ref={outerRef} data-testid='sidebar-step2'>
       <Link to={`/step2`} className='btn-edit-step' onClick={handleStep(2)}>EDIT</Link>
       <button className='btn-edit-step' type='button' onClick={() => handleResetStep2()}>RESET</button>
       <p className='bold'>2: {stepRef[2]}</p>
       {step2.map((system:any, i:any) => (
          <p key={i}>{systems.filter(sys => sys.type === system.systemType)[0].iconDetail} {system.systemType} </p>
          // // <p>{system.icon} {system.systemType}</p>
       ))}
         <ContextMenu outerRef={outerRef} items={menuItems2}/>
    </div>
 );
}