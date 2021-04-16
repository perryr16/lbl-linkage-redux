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

it('has values',() => {
  const {getByTestId} = renderWithRedux(<NavBar/>)
  const navBar = getByTestId('nav-bar')
  expect(navBar).toHaveTextContent('STEP 1/6')
  expect(navBar).toHaveTextContent('Project Specifications')
  expect(navBar).toHaveTextContent("Tell us about your project and it's energy standards:")
  expect(navBar).toHaveTextContent("Download My Progress")
})

it('can click next step', () => {
  const {getByTestId, getByText} = renderWithRedux(<NavBar/>)
  const navBar = getByTestId('nav-bar')
  expect(navBar).toHaveTextContent('STEP 1/6')
  fireEvent.click(getByText('NEXT STEP'))
  expect(navBar).toHaveTextContent('STEP 2/6')
  expect(navBar).toHaveTextContent("Select the systems your building will use:")
  // expect(navBarTest).toHaveTextContent('Project Specifications')
  // expect(navBarTest).toHaveTextContent("Tell us about your project and it's energy standards:")
  // expect(navBarTest).toHaveTextContent("Download My Progress")
})

