import React from 'react';
import './index.css'
import Checkbox from '../Checkbox'

function ContactItem (props) {
  const {id = 0, firstName, lastName, email = ''} = props.contactDetails

  return (
    <div className="contact">
      <div className="contact-avatar">
        <div className="contact-avatar--image"></div>
      </div>
      <div className="contact-details">
        <div className="contant-details--name" data-testid={`contact-details--name-${id}`}>
          {firstName} {lastName}
        </div>
        <div className="contant-details--email" data-testid={`contact-details--email-${id}`}>
          {email}
        </div>
      </div>
      <div className="contact-status">
        <Checkbox id={`contact-${id}`} />
      </div>
    </div>
  )
}

ContactItem.defaultProps = {
  selected: false,
}

export default ContactItem
