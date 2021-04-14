import React from 'react';
import {Link} from 'react-router-dom';
import {stepRef} from '../../constants/index'

interface Props {
  handleStep:any
}

export const SidebarStep5: React.FC<Props> = (props) => {
  const {handleStep} = props;
  
  return (
    <div className='proj-details'>
       <Link to={`/step5`} className='btn-edit-step' onClick={handleStep(5)}>EDIT</Link>
       <p className='bold'>5: {stepRef[5]}</p>
    </div>
 );
}