import React from 'react'
import {render} from '@testing-library/react'
import ContactItem from './index'

import '../../index.css'

const createInitialProps = ({contactDetails = {}, ...overrides} = {}) => {
  return {
    contactDetails: {
      email: 'test@test.com',
      firstName: 'Joe',
      id: 5,
      lastName: 'Doe',
      ...contactDetails,
    },
    ...overrides,
  }
}

const renderWithProps = (props = createInitialProps()) => {
  return {
    ...render(<ContactItem {...props} />)
  }
}

describe('ContactItem component', () => {

  it('should render contact detials ', () => {
    const initialProps = createInitialProps()
    const {getByTestId} = renderWithProps(initialProps)

    const contactName = getByTestId(`contact-details--name-${initialProps.contactDetails.id}`)
    expect(contactName).toHaveTextContent(/^Joe Doe$/)
    
    const email = getByTestId(`contact-details--email-${initialProps.contactDetails.id}`)
    expect(email).toHaveTextContent(/^test@test.com$/)
  })  
})
