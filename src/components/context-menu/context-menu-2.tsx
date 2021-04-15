import React from 'react';
import {useContextMenu} from '../../hooks/use-context-menu'

interface Props {
  items: any;
  outerRef:any;
}

export const ContextMenu2: React.FC<Props> = (props) => {
  const {items, outerRef} = props;
  const {x, y, menu} = useContextMenu(outerRef)

  const style = {
    top: y,
    left: x,
  }

  if (menu) {
    return (
      // <ul className="context-menu" style={{ top: y, left: x }}>
      //   <li className='context-menu-item'>Item1</li>
      //   <li className='context-menu-item'>Item2</li>
      //   <li className='context-menu-item'>Item3</li>
      // </ul>
      <div className='context-menu' style={style}>
      {items.map((item:any, index:number) => {
        return (
          <div key={index} onClick={item.onClick} className='context-menu-item'>
            {item.text}
          </div>
        )
      })}
    </div>
    );
  }
  return <></>;
};