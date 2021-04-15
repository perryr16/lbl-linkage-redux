import React from 'react';

interface Props {
   children?: React.FC
}

export const StepSection: React.FC<Props> = (props) => {
   const {children} = props
   return (
      <div>
         {children}
      </div>
   );
}