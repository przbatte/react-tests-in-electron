import React from 'react';
import './index.css'

function Checkbox (props) {
  const CheckedIcon = props.checkedIcon || (() => <span className="checkbox--checked-icon"></span>)

  const [isChecked, setIsChecked] = React.useState(props.checked)

  React.useEffect(() => setIsChecked(props.checked), [props.checked])

  const toggleIsChecked = () => {
    props.onCheckedChange(!isChecked)
    setIsChecked(!isChecked)
  }

  return (
    <div data-testid={props.id}>
      <input
        className="checkbox-input"
        id={props.id}
        onChange={toggleIsChecked}
        type="checkbox"
        data-testid={`${props.id}-input`}
      />
      <label
        className="checkbox-label"
        htmlFor={props.id}
        data-testid={`${props.id}-label`}>
        <div>{isChecked && <CheckedIcon />}</div>{props.label}
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  checked: false,
  id: 'checkbox-0',
  onCheckedChange: isChecked => {},
}

export default Checkbox
