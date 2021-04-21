import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SystemDetailHeader, SystemDetailInputs, SystemDetailNotes} from '../../components/index'
import {addSystemKeyValue, removeSystemKey, selectStep3} from '../steps/step3-slice';
import {systemsInputs} from '../../constants/systems'

interface Props {
  systemType: any;
  systemId: number;
  handleRemoveSystem: any
}

export const SystemDetailCard: React.FC<Props> = (props) => {
  const [showNote, setShowNote] = useState(false);
  const {systemType, systemId, handleRemoveSystem} = props;
  const dispatch = useDispatch();
  const step3 = useSelector(selectStep3)
  const inputs = systemsInputs.filter(sys => sys.type === systemType)[0].inputs

  const handleChange = (e:any) => {
    const payload = {systemId: systemId, key: e.target.id , value: e.target.value, systemType: systemType}
    dispatch(addSystemKeyValue(payload))
  }

  const handleAddNote = () => {
    setShowNote(!showNote)
    showNote && deleteNote()
  }

  const deleteNote = () => {
    const notesExist:any = step3[systemType].filter((system:any) => system.id === systemId)[0].systemNotes
    if (notesExist) {
      const index = step3[systemType].indexOf(step3[systemType].filter((system:any) => system.id === systemId)[0])
      dispatch(removeSystemKey({systemType: systemType, index: index, key: 'systemNotes'}))
    }
  }

  return (
    <div className='sys-detail'>
      <SystemDetailHeader 
        handleRemoveSystem={handleRemoveSystem} 
        handleAddNote={handleAddNote}
        systemType={systemType} 
        systemId={systemId} 
        showNote={showNote}
      />
      {showNote && <SystemDetailNotes handleChange={handleChange} handleAddNote={handleAddNote}/>}
      <SystemDetailInputs 
        handleChange={handleChange}
        inputOptions={inputs}
        systemType={systemType}
        systemId={systemId}
      />
      
    </div>
  );
}

