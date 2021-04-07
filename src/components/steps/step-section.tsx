import React from 'react';
import {StepRouter} from '../index'

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