import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {ContextMenu} from '../../components/index'
import {stepRef} from '../../constants/index';
import {selectStep1} from '../../features/steps/step1-slice'




interface Props {
  handleStep: any;
}

export const SidebarStep1: React.FC<Props> = (props) => {
  const containerRef = useRef(null)
  const {handleStep} = props;
  const step1 = useSelector(selectStep1)


    const menuItems = [
       {text: 'item1', onClick: () => {console.log('item 1 clicked')},},
       {text: 'Alert 2', onClick: () => {alert('Item 2')}},
       {text:  <Link to={`/step4`} className='context-menu-item-link' onClick={handleStep(4)}>Edit Step 1</Link>,
       onClick: null},
       {text: 'Alert 2', onClick: () => {alert('Item 2')}},
    ]

    return (
      <div className='proj-details' ref={containerRef}>
         <Link to={`/step1`} className='btn-edit-step' onClick={() => handleStep(1)}>EDIT</Link>
         <p className='bold' >1: {stepRef[1]}</p>
         <p>
         {Object.keys(step1).map(key => (
            step1[key] && `| ${step1[key]} `
         ))}
         </p>
         <ContextMenu parentRef={containerRef} items={menuItems}/>
      </div>
   )
}