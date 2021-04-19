import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {reducers} from '../../../app/store'
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NavBar, Sidebar, StepRouter} from '../../index';

afterEach(cleanup);


const renderWithRedux = (component:any, {initialState, store=createStore(reducers, initialState)}:any = {}) => {
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
      <StepRouter />
    </div>
  )
}

it('renders', () => {
  const {asFragment} = renderWithRedux(<PassedComponent/>)
  expect(asFragment()).toMatchSnapshot();
});

it('sidebar displays data related to step -- forward', () => {
  const {getByTestId, getByText} = renderWithRedux(<PassedComponent/>)
  const navBar = getByTestId('nav-bar')
  const sidebar = getByTestId('sidebar')
  expect(navBar).toHaveTextContent('STEP 1/6')
  expect(sidebar).toHaveTextContent('Project Details:')
  expect(sidebar).not.toHaveTextContent('1: Project Specifications')


})

