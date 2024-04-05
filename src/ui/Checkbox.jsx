import PropTypes from 'prop-types';

import './Checkbox.scss';

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ''}>{children}</label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.array,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
