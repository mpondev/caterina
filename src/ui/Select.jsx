import PropTypes from 'prop-types';

import './Select.scss';

function Select({ onChange, options, value, ...props }) {
  return (
    <select className="select" value={value} onChange={onChange} {...props}>
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
  value: PropTypes.string,
};

export default Select;
