import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {reducers} from '../../../app/store'
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NavBar, Sidebar} from '../../index';


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

const PassedComponent = () => {
  return(
    <div>
      <NavBar />
      <Sidebar />
    </div>
  )
}

it('renders', () => {
  const {asFragment} = renderWithRedux(<PassedComponent/>)
  expect(asFragment()).toMatchSnapshot();
});

it('sidebar displays data related to step', () => {
  const {getByTestId, getByText} = renderWithRedux(<PassedComponent/>)
  const navBar = getByTestId('nav-bar')
  const sidebar = getByTestId('sidebar')
  expect(navBar).toHaveTextContent('STEP 1/6')
  expect(sidebar).toHaveTextContent('Project Details:')
  expect(sidebar).not.toHaveTextContent('1: Project Specifications')
  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).toHaveTextContent('1: Project Specifications')
  expect(sidebar).not.toHaveTextContent('2: System Selections')
  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).toHaveTextContent('2: System Selections')
  expect(sidebar).not.toHaveTextContent('3: System Details')
  
})


