import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import InputCheckBox from './index'

import '../../index.css'

const click = input => fireEvent.click(input)

const createInitialProps = overrides => {
  return {
    id: 'contact-0',
    isChecked: false,
    label: 'label text',
    onChange: () => {},
    ...overrides,
  }
}

const renderWithProps = (props = createInitialProps()) => {
  return {
    ...render(<InputCheckBox {...props} />)
  }
}

describe('InputCheckBox component', () => {
  afterEach(cleanup)

  it('should show not checked checkbox', () => {
    const initialProps = createInitialProps()
    const {getByTestId} = renderWithProps(initialProps)
    const input = getByTestId(`${initialProps.id}-input`)
    expect(input.checked).toEqual(false)
  })

  it('should call onChange handler if the label is clicked', () => {
    const initialProps = createInitialProps({
      onChange: jest.fn()
    })
    const {getByLabelText} = renderWithProps(initialProps)

    const checkboxLabel = getByLabelText(initialProps.label)
    click(checkboxLabel)

    expect(initialProps.onChange).toHaveBeenCalledTimes(1)
  })
})