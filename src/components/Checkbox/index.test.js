import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import Checkbox from './index'

import '../../index.css'

const click = input => fireEvent.click(input)

const createInitialProps = overrides => {
  return {
    id: 'checkbox-0',
    label: 'label text',
    onCheckedChange: () => {},
    ...overrides,
  }
}

const renderWithProps = (props = createInitialProps()) => {
  return {
    ...render(<Checkbox {...props} />)
  }
}

describe('Checkbox component', () => {
  afterEach(cleanup)

  it('should show not checked checkbox', () => {
    const initialProps = createInitialProps()
    const {getByTestId} = renderWithProps(initialProps)
    const input = getByTestId(`${initialProps.id}-input`)
    expect(input.checked).toEqual(false)
  })

  it('should show checked checkbox', () => {
    const initialProps = createInitialProps({
      checked: true,
    })
    const {getByTestId} = renderWithProps(initialProps)
    const input = getByTestId(`${initialProps.id}-input`)
    expect(input.checked).toEqual(false)
  })

  it('should call onCheckedChange handler if the label is clicked', () => {
    const initialProps = createInitialProps({
      onCheckedChange: jest.fn()
    })
    const {getByLabelText} = renderWithProps(initialProps)

    const checkboxLabel = getByLabelText(initialProps.label)
    click(checkboxLabel)

    expect(initialProps.onCheckedChange).toHaveBeenCalledTimes(1)
    expect(initialProps.onCheckedChange).toHaveBeenCalledWith(true)
  })
})
