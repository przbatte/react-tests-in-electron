import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';

function createInitialState() {
  return {header: 'whatever'}
}

function reducer (state, action) {
  if (action.type === 'click') {
    debugger
    return {...state, header: action.header}
  }

  return state
}

const renderWithState = (ui, { initialState, ...renderOptions } = {}) => {
  const store = createStore(reducer, initialState)
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

test.skip('renders header name', () => {
  const initialState = createInitialState()
  const {getByText} = renderWithState(<App />, { initialState })
  const headerElement = getByText(/whatever/i)
  expect(headerElement).toBeInTheDocument()
})

test('renders changed header text after button is clicked', async () => {
  const initialState = createInitialState()
  const {getByText} = renderWithState(<App />, { initialState })
  expect(getByText(/whatever/i)).toBeInTheDocument()

  const clickButton = getByText(/Click me!/i)
  fireEvent.click(clickButton)
  const headerAfterChange = getByText(/interview/i)
  expect(headerAfterChange).toBeInTheDocument()
})
