import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {reducers} from '../../../app/store'
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NavBar} from '../nav-bar';


afterEach(cleanup);

const reducer = reducers

const renderWithRedux = (component:any, {initialState, store=createStore(reducer, initialState)}:any = {}) => {
  return {
    ...render(
    <BrowserRouter>
      <Provider store={store}>
        {component}
      </Provider>
    </BrowserRouter>)
  }
}

it('renders', () => {
  const {asFragment} = renderWithRedux(<NavBar/>)
  expect(asFragment()).toMatchSnapshot();
});

