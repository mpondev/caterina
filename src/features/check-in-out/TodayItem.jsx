import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCheckOut } from './useCheckOut';

import './TodayItem.scss';

function TodayItem({ activity }) {
  const { id, status, guests, num_nights } = activity;
  const { checkout, isCheckingOut } = useCheckOut();

  return (
    <li className="today-item">
      {status === 'unconfirmed' && (
        <span className={`tag ${status}`}>Llegando</span>
      )}
      {status === 'checked-in' && (
        <span className={`tag ${status}`}>Saliendo</span>
      )}

      <img src={guests.country_flag} alt={`Bandera de ${guests.country}`} />
      <div className="today-item--guest">{guests.full_name}</div>
      <div>{num_nights} noches</div>

      {status === 'unconfirmed' && (
        <button>
          <Link to={`/checkin/${id}`}>Check in</Link>
        </button>
      )}
      {status === 'checked-in' && (
        <button disabled={isCheckingOut} onClick={() => checkout(id)}>
          Check out
        </button>
      )}
    </li>
  );
}

TodayItem.propTypes = {
  activity: PropTypes.object,
};

export default TodayItem;
