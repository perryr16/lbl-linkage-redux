import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faBurn, faCube, faAlignJustify, faArrowCircleRight, faIcicles } from '@fortawesome/free-solid-svg-icons'
import { System } from '../interfaces/index'

export const systems:System[] = [
   { 
      id: 1,
      type: "Variable Air Volume", 
      moreInfo: "this is a variable air volume", 
      icon: <FontAwesomeIcon className="sys-icon" size='10x'icon={faFan} />, 
      iconDetail: <FontAwesomeIcon className="sys-icon-detail" size='1x'icon={faFan} /> 
   },
   { 
      id: 2,
      type: "Boiler Plant", 
      moreInfo: "this is a boiler plant", 
      icon: <FontAwesomeIcon className="sys-icon" size='10x' icon={faBurn} />, 
      iconDetail: <FontAwesomeIcon className="sys-icon-detail" size='1x' icon={faBurn} /> 
   },
   { 
      id: 3,
      type: "Water Source Heat Pump Loop", 
      moreInfo: "this is a Water source heat pump loop", 
      icon: <FontAwesomeIcon className="sys-icon" size='10x' icon={faCube} />, 
      iconDetail: <FontAwesomeIcon className="sys-icon-detail" size='1x' icon={faCube} /> 
   },
   { 
      id: 4,
      type: "Independant Cooling Tower", 
      moreInfo: "this is an independant cooling tower", 
      icon: <FontAwesomeIcon className="sys-icon" size='10x' icon={faAlignJustify} />, 
      iconDetail: <FontAwesomeIcon className="sys-icon-detail" size='1x' icon={faAlignJustify} /> 
   },
   { 
      id: 5,
      type: "Variable Refrigerant Flow", 
      moreInfo: "this is a variable refrigerant flow", 
      icon: <FontAwesomeIcon className="sys-icon" size='10x' icon={faArrowCircleRight} />, 
      iconDetail: <FontAwesomeIcon className="sys-icon-detail" size='1x' icon={faArrowCircleRight} /> 
   },
   { 
      id: 6,
      type: "Chiller Plant", 
      moreInfo: "this is a chiller plant", 
      icon: <FontAwesomeIcon className="sys-icon" size='10x' icon={faIcicles} />, 
      iconDetail: <FontAwesomeIcon className="sys-icon-detail" size='1x' icon={faIcicles} /> 
   },
]

export const systemsInputs = [
   { 
      id: 1,
      type: "Variable Air Volume", 
      inputs: {'Single or Multizone': ['Single Zone', 'MultiZone']}
   },
   { 
      id: 2,
      type: "Boiler Plant", 
      inputs: {'Boiler Type': ['Water Tube', 'Immersion Tube', 'Veritcal Tube']}
   },
   { 
      id: 3,
      type: "Water Source Heat Pump Loop", 
      inputs: {'Loop Type': ['Horizontal Loop', 'Vertical Loop', 'Pond/Lake Loop', 'Open Loop']}
   },
   { 
      id: 4,
      type: "Independant Cooling Tower", 
      inputs: {'Cooling Tower Type': ['Crossflow', 'Counterflow', 'Hyperbolic']}
   },
   { 
      id: 5,
      type: "Variable Refrigerant Flow", 
      inputs: {'Refrigerant Flow Type': ['Heat Pump', 'Heat Recovery', 'Water-Cooling', 'Gas Operated']}
   },
   { 
      id: 6,
      type: "Chiller Plant", 
      inputs: {'Chiller Type': ['Air', 'Water', 'Evaporative Condensed']}
   },
]