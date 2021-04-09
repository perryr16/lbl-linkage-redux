import React from 'react';

interface Props {
  handleChange:any
  handleAddNote: any
}

export const SystemDetailNotes: React.FC<Props> = (props) => {
  const {handleChange, handleAddNote} = props;
  return (
    <div className='margin-15'>
      <button className='txt-10 btn-add-note float-r' onClick={handleAddNote}>DELETE NOTE</button>
      <textarea className="form-control" id="systemNotes" placeholder='System notes' onChange={handleChange}></textarea>
    </div>
  );
}