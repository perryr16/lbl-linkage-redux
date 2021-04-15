import {useEffect, useCallback, useState} from 'react';

export const useContextMenu = (outerRef:any) => {
  const [x, setX] = useState('0px');
  const [y, setY] = useState('0px');
  const [menu, setMenu] = useState(false);

  const handleContextMenu = useCallback(
    (e:any) => {
      if (outerRef && outerRef.current.contains(e.target)) {
        e.preventDefault();
        setX(`${e.pageX}px`);
        setY(`${e.pageY}px`);
        setMenu(true);
      } else {
        setMenu(false);
      }
    }, 
    [setMenu, outerRef, setX, setY]
  );

  const handleClick = useCallback(() => {
    setMenu(false);
  }, [setMenu]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.addEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  });

  return {x, y, menu};
}