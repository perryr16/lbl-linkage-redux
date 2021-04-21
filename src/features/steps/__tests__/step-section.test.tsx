import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {reducers} from '../../../app/store'
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
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

it('sidebar reflects step1 selections', () => {
  const {getByTestId, getByText, queryByDisplayValue, queryByTestId, getByPlaceholderText} = renderWithRedux(<PassedComponent/>)
  const navBar = getByTestId('nav-bar')
  const sidebar = getByTestId('sidebar')
  const step1Card = getByTestId('step1-card')
  expect(navBar).toHaveTextContent('STEP 1/6')
  expect(sidebar).toHaveTextContent('Project Details:')
  expect(sidebar).not.toHaveTextContent('1: Project Specifications')
  expect(step1Card).toHaveTextContent('Energy Code')


  const energyInput:any = queryByDisplayValue('Ashrae Guideline')
  fireEvent.change(energyInput, {target: {value: 'Ashrae Guideline 44'}})

  const stateInput:any = queryByDisplayValue('State')
  fireEvent.change(stateInput, {target: {value: 'Colorado'}})

  const input4:any = queryByTestId('input4')
  fireEvent.change(input4, {target: {value: 'Option 4'}})

  const input5:any = getByPlaceholderText('Input text')
  fireEvent.change(input5, {target: {value: 'typed text'}})

  fireEvent.click(getByText('NEXT STEP'))

  expect(sidebar).toHaveTextContent('Ashrae Guideline 44')
  expect(sidebar).toHaveTextContent('Colorado')
  expect(sidebar).toHaveTextContent('Option 4')
  expect(sidebar).toHaveTextContent('typed text')
  expect(sidebar).not.toHaveTextContent('Option 5')
  expect(sidebar).not.toHaveTextContent('Alaska')
  expect(sidebar).not.toHaveTextContent('Ashrae Guideline 36')
})

it('sidebar reflects step2 selections', () => {
  const {getByTestId, getByText} = renderWithRedux(<PassedComponent/>)
  const navBar = getByTestId('nav-bar')
  const sidebar = getByTestId('sidebar')
  fireEvent.click(getByText('NEXT STEP'))

  const step2Card = getByTestId('step2-card')
  expect(navBar).toHaveTextContent('STEP 2/6')
  expect(step2Card).toHaveTextContent('VARIABLE AIR VOLUME')

  fireEvent.click(getByText('BOILER PLANT'))
  fireEvent.click(getByText('CHILLER PLANT'))

  fireEvent.click(getByText('NEXT STEP'))

  expect(sidebar).toHaveTextContent('Boiler Plant')
  expect(sidebar).toHaveTextContent('Chiller Plant')
  expect(sidebar).not.toHaveTextContent('Variable Air Volume')
})

it('sidebar reflects step3 selections', () => {
  const {getByTestId, getByText} = renderWithRedux(<PassedComponent/>)
  const navBar = getByTestId('nav-bar')
  const sidebar = getByTestId('sidebar')

  fireEvent.click(getByText('NEXT STEP'))
  fireEvent.click(getByText('BOILER PLANT'))
  fireEvent.click(getByText('CHILLER PLANT'))
  fireEvent.click(getByText('NEXT STEP'))

  const step3Card = getByTestId('step3-card')
  expect(step3Card).toHaveTextContent('Boiler Plant')
  expect(step3Card).toHaveTextContent('Chiller Plant')



})