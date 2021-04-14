import React, { useEffect, useState } from 'react';



interface Props {
  parentRef:any;
  items: any;
}

export const ContextMenu: React.FC<Props> = (props) => {
  const {parentRef, items} = props
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);


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
    </div>) : null

  );
}