import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import {Step1Card, Step2Card, Step3Card} from '../index'
import {store} from '../../store/store';
import {selectStep} from '../steps/stepSlice'


interface Props {
  dispatch?: any
}

export const NavBar: React.FC<Props> = (props) => {
  const state = props
  const dispatch = useDispatch()

  const stopHere = () => {
    let x = 1;
  }
  const increment = () => {
    // store.dispatch({type: 'step/increment'})
  }
  const decrement = () => {
    // store.dispatch({type: 'step/decrement'})
    // dispatch(decrement)
  }
  const currentStep = useSelector(selectStep)
  
  // const currentStep:any = useSelector<any>(state => state.step)

   return (
     <div>
      {stopHere()}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{currentStep}</p>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/step1">Step 1</Link>
              </li>
              <li>
                <Link to="/step2">Step 2</Link>
              </li>
              <li>
                <Link to="/step3">Step 3</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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
          </Switch>
        </div>
      </BrowserRouter>
     </div>
   );
}
