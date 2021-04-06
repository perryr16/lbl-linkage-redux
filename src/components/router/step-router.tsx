import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Step1Card, Step2Card, Step3Card, Step4Card, Step5Card, Step6Card} from '../index'


export const StepRouter: React.FC = () => {
   return (
      <Switch>
         <Route exact path="/step1">
            <Step1Card />
         </Route>
         <Route exact path="/step2">
            <Step2Card />
         </Route>
         <Route exact path="/step3">
            <Step3Card />
         </Route>
         <Route exact path="/step4">
            <Step4Card />
         </Route>
         <Route exact path="/step5">
            <Step5Card />
         </Route>
         <Route exact path="/step6">
            <Step6Card />
         </Route>
      </Switch>
   );
}