import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {stepRef} from '../../constants/index'
import {useSelector} from 'react-redux';
import {selectStep2} from '../../features/index'
import {ContextMenu} from '../../components/index'



interface Props {
  handleStep:any
}

export const SidebarStep2: React.FC<Props> = (props) => {
  const {handleStep} = props;
  const containerRef = useRef(null);
  const step2:any = useSelector(selectStep2)

  const menuItems = [
    {text: 'Alert 2', onClick: () => {console.log('Step 2')},},
    {text:  <Link to={`/step2`} className='context-menu-item-link' onClick={handleStep(2)}>Edit Step 2</Link>,
    onClick: null},
 ]


  return (
    <div className='proj-details' ref={containerRef}>
       <Link to={`/step2`} className='btn-edit-step' onClick={() => handleStep(2)}>EDIT</Link>
       <p className='bold'>2: {stepRef[2]}</p>
       {step2.map((system:any) => (
          <p>{system.icon} {system.systemType}</p>
       ))}
         <ContextMenu parentRef={containerRef} items={menuItems}/>
    </div>
 );
}