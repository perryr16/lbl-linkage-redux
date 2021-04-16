import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {NavBtn} from '../nav-btn';


afterEach(cleanup);

it('renders', () => {
  const {asFragment} = render(
    <NavBtn
      pageName='test name'
      path='/'
      nextComponent='next component'
    />
  )
  expect(asFragment()).toMatchSnapshot();
});

it('has passes props', () => {
  const {getByTestId, getByText} = render(
    <NavBtn
      pageName='test name'
      path='/'
      nextComponent='next component'
    />
  )
  expect(getByTestId("a-tag")).toHaveTextContent('test name')
})