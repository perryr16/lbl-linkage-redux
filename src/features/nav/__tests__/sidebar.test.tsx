import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import {reducers} from '../../../app/store'
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NavBar, Sidebar} from '../../index';


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

  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).toHaveTextContent('1: Project Specifications')
  expect(sidebar).not.toHaveTextContent('2: System Selections')

  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).toHaveTextContent('2: System Selections')
  expect(sidebar).not.toHaveTextContent('3: System Details')

  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).toHaveTextContent('3: System Details')
  expect(sidebar).not.toHaveTextContent('4: System Equipment')

  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).toHaveTextContent('4: System Equipment')
  expect(sidebar).not.toHaveTextContent('5: Non-System Equipment')

  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).toHaveTextContent('5: Non-System Equipment')

  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).not.toHaveTextContent('1: Project Specifications')
  expect(sidebar).not.toHaveTextContent('5: Non-System Equipment')
  
  fireEvent.click(getByText('NEXT STEP'))
  expect(sidebar).toHaveTextContent('1: Project Specifications')
})

it('sidebar Edit button takes user to relavent step', () => {
  const {getByTestId, getByText} = renderWithRedux(<PassedComponent/>)
  const navBar = getByTestId('nav-bar')
  const sidebar = getByTestId('sidebar')
  
  fireEvent.click(getByText('NEXT STEP'))
  fireEvent.click(getByText('NEXT STEP'))
  fireEvent.click(getByText('NEXT STEP'))
  fireEvent.click(getByText('NEXT STEP'))

  const sidebarStep1 = getByTestId('sidebar-step1')
  const sidebarStep2 = getByTestId('sidebar-step2')
  const sidebarStep3 = getByTestId('sidebar-step3')

  expect(sidebar).toHaveTextContent('1: Project Specifications')
  expect(sidebar).toHaveTextContent('2: System Selections')
  expect(sidebar).toHaveTextContent('3: System Details')
  expect(sidebar).toHaveTextContent('4: System Equipment')

  const step2Edit = within(sidebarStep2).getByText('EDIT')
  fireEvent.click(step2Edit)

  expect(sidebar).toHaveTextContent('1: Project Specifications')
  expect(sidebar).not.toHaveTextContent('2: System Selections')
  expect(sidebar).not.toHaveTextContent('3: System Details')
  expect(sidebar).not.toHaveTextContent('4: System Equipment')

})

it('right click goes to relavent step', () => {
  const {getByTestId, getByText} = renderWithRedux(<PassedComponent/>)
  const sidebar = getByTestId('sidebar')

  fireEvent.click(getByText('NEXT STEP'))
  fireEvent.click(getByText('NEXT STEP'))
  fireEvent.click(getByText('NEXT STEP'))
  fireEvent.click(getByText('NEXT STEP'))

  expect(sidebar).toHaveTextContent('1: Project Specifications')
  expect(sidebar).toHaveTextContent('2: System Selections')
  expect(sidebar).toHaveTextContent('3: System Details')
  expect(sidebar).toHaveTextContent('4: System Equipment')

  const sidebarStep2 = getByTestId('sidebar-step2')

  fireEvent.contextMenu(sidebarStep2)
  fireEvent.click(getByText('Edit Step 2'))

  expect(sidebar).toHaveTextContent('1: Project Specifications')
  expect(sidebar).not.toHaveTextContent('2: System Selections')
  expect(sidebar).not.toHaveTextContent('3: System Details')
  expect(sidebar).not.toHaveTextContent('4: System Equipment')
  
})



