import React, { useEffect, useState } from 'react';

interface Props {
  parentRef:any
}

export const ContextMenu: React.FC<Props> = (props) => {
  const {parentRef} = props
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const parent = parentRef.current;
    if(!parent) {
      return;
    }

    const showMenu = (e:any) => {
      e.preventDefault();
      setVisible(true);
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


  return (
    visible ? (    
    <div className='context-menu'>
      Menu
    </div>) : null

  );
}