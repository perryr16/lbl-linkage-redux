import React from 'react';
import {NavBtn, Step2Card, Step3Card} from '../index';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectStep} from './stepSlice'

interface Props {

}

export const Step1Card: React.FC<Props> = () => {


   return (
      <div>
         <h1>STEP 1</h1>
      </div>
   );
}