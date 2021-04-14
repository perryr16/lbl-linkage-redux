import React from 'react';
import {Link} from 'react-router-dom';
import {stepRef} from '../../constants/index'

interface Props {
  handleStep: any;
}

export const SidebarStep4: React.FC<Props> = (props) => {
  const {handleStep} = props;

  return (
    <div className='proj-details'>
       <Link to={`/step4`} className='btn-edit-step' onClick={() => handleStep(4)}>EDIT</Link>
       <p className='bold'>4: {stepRef[4]}</p>
    </div>
 );
}