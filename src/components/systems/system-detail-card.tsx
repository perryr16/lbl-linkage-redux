import React from 'react';

interface Props {
  systemType: string;
}

export const SystemDetailCard: React.FC<Props> = (props) => {
  const {systemType} = props;
  return (
    <div>
      <h1>System Detail Card</h1>
      <p>{systemType}</p>
    </div>
  );
}