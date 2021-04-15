import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {ContextMenu} from '../../components/index'
import {stepRef} from '../../constants/index';
import {selectStep1} from '../../features/index'

interface Props {
  handleStep: any;
}

export const SidebarStep1: React.FC<Props> = (props) => {
  const {handleStep} = props;
  const outerRef = useRef(null);
  const step1 = useSelector(selectStep1);


  const menuItems1 = [
      {text: 'Alert 1', onClick: () => {alert('Step 1')}},
      {text:  <Link to={`/step1`} className='context-menu-item-link' onClick={() => handleStep(1)}>Edit Step 1</Link>,
      onClick: null},
  ]

    return (
      <div className='proj-details' ref={outerRef}>
         <Link to={`/step1`} className='btn-edit-step' onClick={() => handleStep(1)}>EDIT</Link>
         <p className='bold' >1: {stepRef[1]}</p>
         <p>
         {Object.keys(step1).map(key => (
            step1[key] && `| ${step1[key]} `
         ))}
         </p>
         <ContextMenu outerRef={outerRef} items={menuItems1}/>
      </div>
   )
}