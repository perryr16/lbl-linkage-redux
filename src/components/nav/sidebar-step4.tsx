import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {ContextMenu} from '../../components/index'
import {stepRef} from '../../constants/index'

interface Props {
  handleStep: any;
}

export const SidebarStep4: React.FC<Props> = (props) => {
  const {handleStep} = props;
  const containerRef = useRef(null);

  const menuItems = [
    {text: 'Alert 1', onClick: () => {alert('Step 1')}},
    {text:  <Link to={`/step1`} className='context-menu-item-link' onClick={handleStep(1)}>Edit Step 1</Link>,
    onClick: null},
]

  return (
    <div className='proj-details' ref={containerRef}>
       <Link to={`/step4`} className='btn-edit-step' onClick={() => handleStep(4)}>EDIT</Link>
       <p className='bold'>4: {stepRef[4]}</p>
       <ContextMenu parentRef={containerRef} items={menuItems} />
    </div>
 );
}