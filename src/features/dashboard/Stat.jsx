import PropTypes from 'prop-types';

import './Stat.scss';

function Stat({ icon, title, value, color }) {
  return (
    <div className="stat">
      <div
        className="stat-icon"
        style={{
          backgroundColor: `var(--color-${color}-100)`,
          color: `var(--color-${color}-700)`,
        }}
      >
        {icon}
      </div>
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
  );
}

Stat.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
};

export default Stat;
