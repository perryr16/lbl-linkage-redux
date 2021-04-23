import React, {useEffect, useState} from 'react';
import {Col} from 'react-bootstrap';
import {System} from '../../interfaces'

interface Props {
   system: System;
   handleShow: any;
   handleChange: any;
   checked: any;
}

export const SystemCard: React.FC<Props> = (props) => {
   const {system, handleShow, handleChange, checked} = props
   
   const selectColor = 'rgb(9, 78, 110)'
   const initialStyle = {
      div: {background: 'transparent', transition: 'background 1s'}, 
      moreInfo: {color: selectColor},
      icon: {color: 'black'},
   }
   const [style, setStyle] = useState(initialStyle);

   useEffect(() => {
      checked  
      ? setStyle({...style, 
         div:{...style.div, background: selectColor}, 
         moreInfo:{...style.moreInfo, color: 'white'},
         icon: {...style.icon, color: 'white'}
      })
      : setStyle({...style, 
         div:{...style.div, background: 'none'}, 
         moreInfo:{...style.moreInfo, color: selectColor},
         icon: {...style.icon, color: 'black'}
      }) 
   },[checked])


    return (
      <Col>
         <div className="sys-card" style={style.div} onClick={() => handleChange(system.type)}>
            <input className="sys-check zoom-3x" type="checkbox" value={system.type} id={system.type} checked={checked} readOnly={true}/>
            <label className="txt-15 bold sys-name" htmlFor={system.type} style={style.icon}>
               {system.type.toUpperCase()}
            </label>
            <div style={style.icon}>
               {system.icon}
            </div>
         </div>
         <button className="more-info txt-10" onClick={() => handleShow(system)} style={style.moreInfo}> More Info</button>
      </Col>
    );
}