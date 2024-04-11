import PropTypes from 'prop-types';

import './FormRow.scss';

function FormRow({ children, error, label }) {
  return (
    <div className="formRow">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

FormRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string,
  label: PropTypes.string,
};

export default FormRow;
