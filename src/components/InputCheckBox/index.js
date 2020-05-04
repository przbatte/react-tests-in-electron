import React from 'react';
import './index.css'

function InputCheckBox (props) {
  const CheckedIcon = props.checkedIcon || (() => <span className="checkbox--checked-icon"></span>)

  return (
    <div data-testid={props.id}>
      <input
        className="checkbox-input"
        id={props.id}
        onChange={props.onChange}
        type="checkbox"
        data-testid={`${props.id}-input`}
      />
      <label
        className="checkbox-label"
        htmlFor={props.id}
        data-testid={`${props.id}-label`}>
        <div>{props.isChecked && <CheckedIcon />}</div>{props.label}
      </label>
    </div>
  )
}

export default InputCheckBox
