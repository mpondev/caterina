import PropTypes from 'prop-types';

import './Select.scss';

function Select({ onChange, options, value, type }) {
  return (
    <select
      className={type !== 'white' ? 'select' : 'select select-white'}
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Select;
