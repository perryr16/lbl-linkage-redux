import React from 'react';
import {Link} from 'react-router-dom';
import {stepRef} from '../../constants/index'
interface Props {
  handleStep:any
}

export const SidebarStep6: React.FC<Props> = (props) => {
  const {handleStep} = props;

  return (
    <div className='proj-details'>
      <Link to={`/step6`} className='btn-edit-step' onClick={handleStep(6)}>EDIT</Link>
      <p className='bold'>6: {stepRef[6]}</p>
    </div>
  );
}