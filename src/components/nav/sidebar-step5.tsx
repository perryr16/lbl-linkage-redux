import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {stepRef} from '../../constants/index'
import {ContextMenu} from '../../components/index'


interface Props {
  handleStep:any
}

export const SidebarStep5: React.FC<Props> = (props) => {
  const {handleStep} = props;
  const outerRef=useRef(null)

  const menuItems = [
    {text: 'Alert 5', onClick: () => {alert('Step 5')}},
    {text:  <Link to={`/step5`} className='context-menu-item-link' onClick={handleStep(5)}>Edit Step 5</Link>,
    onClick: null},
  ]

  return (
    <div className='proj-details' ref={outerRef}>
      <Link to={`/step5`} className='btn-edit-step' onClick={handleStep(5)}>EDIT</Link>
      <p className='bold'>5: {stepRef[5]}</p>
      <ContextMenu outerRef={outerRef} items={menuItems} />

    </div>
 );
}