import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {ContextMenu} from '../../components/index'
import {stepRef} from '../../constants/index'

interface Props {
  handleStep: any;
}

export const SidebarStep4: React.FC<Props> = (props) => {
  const {handleStep} = props;
  const outerRef = useRef(null);

  const menuItems = [
    {text: 'Alert 4', onClick: () => {alert('Step 4')}},
    {text:  <Link to={`/step4`} className='context-menu-item-link' onClick={handleStep(4)}>Edit Step 4</Link>,
    onClick: null},
]

  return (
    <div className='proj-details' ref={outerRef} data-testid='sidebar-step4'>
       <Link to={`/step4`} className='btn-edit-step' onClick={handleStep(4)}>EDIT</Link>
       <p className='bold'>4: {stepRef[4]}</p>
       <ContextMenu outerRef={outerRef} items={menuItems} />
    </div>
 );
}