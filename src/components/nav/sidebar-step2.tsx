import React from 'react';
import {Link} from 'react-router-dom';
import {stepRef} from '../../constants/index'
import {useSelector} from 'react-redux';
import {selectStep2} from '../../features/index'


interface Props {
  handleStep:any
}

export const SidebarStep2: React.FC<Props> = (props) => {
  const {handleStep} = props;
  const step2:any = useSelector(selectStep2)


  return (
    <div className='proj-details'>
       <Link to={`/step2`} className='btn-edit-step' onClick={() => handleStep(2)}>EDIT</Link>
       <p className='bold'>2: {stepRef[2]}</p>
       {step2.map((system:any) => (
          <p>{system.icon} {system.systemType}</p>
       ))}
    </div>
 );
}