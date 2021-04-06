import React from 'react';
import {NavBtn, Step2Card, Step3Card} from '../index';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectStep} from './stepSlice'

interface Props {

}

export const Step1Card: React.FC<Props> = () => {


   const stepx:any = useSelector<any>(state => state.step)
   return (
      <div>
         <h1>STEP 1</h1>
         <p>{stepx}</p>
         <BrowserRouter>
            <Link to='/step2'>Step 2</Link>
            <Switch>
               <Route exact path='/step2' component={Step2Card}/>
            </Switch>
         </BrowserRouter>
      </div>
   );
}