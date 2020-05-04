import React from 'react'
import {render} from '@testing-library/react'
import ContactItem from './index'

import '../../index.css'

const renderWithProps = ({
  contactDetails = {firstName: 'Joe', lastName: 'Doe', email: 'test@test.com'},
  ...props
} = {}) => {
  return {
    ...render(<ContactItem contactDetails={contactDetails} {...props} />)
  }
}

describe('ContactItem component', () => {

  it('should render contact detials ', () => {
    const {getByTestId} = renderWithProps()

    const contactName = getByTestId('contact-details--name-0')
    expect(contactName).toHaveTextContent(/^Joe Doe$/)
    
    const email = getByTestId('contact-details--email-0')
    expect(email).toHaveTextContent(/^test@test.com$/)
  })  
})
