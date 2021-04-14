import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setStep} from '../../features/steps/step-slice'



interface Props {
  parentRef:any;
  items: any;
}

export const ContextMenu: React.FC<Props> = (props) => {
  const {parentRef, items} = props
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const dispatch = useDispatch()


  useEffect(() => {
    const parent = parentRef.current;
    if(!parent) {
      return;
    }

    const showMenu = (e:any) => {
      e.preventDefault();
      setVisible(true);
      setX(e.clientX)
      setY(e.clientY)
      console.log('show');
    };

    const closeMenu = () => {
      setVisible(false)
    }

    parent.addEventListener('contextmenu', showMenu);
    window.addEventListener('click', closeMenu)

    return function cleanup() {
      parent.removeEventListener('contextmenu', showMenu);
      window.removeEventListener('click', closeMenu);
    }
  })

  const handleStep = (step:number):any => {
    console.log('handleStep')
    console.log(step)
    return () => {
       return dispatch(setStep(step))
    }
 }

  const style = {
    top: y,
    left: x,
  }

  return (
    visible ? (    
    <div className='context-menu' style={style}>
      {items.map((item:any, index:number) => {
        return (
          <div key={index} onClick={item.onClick} className='context-menu-item'>
            {item.text}
          </div>
        )
      })}
      {/* <Link to={`/step5`} className='context-menu-link' onClick={handleStep(5)}>step5</Link> */}
    </div>) : null

  );
}