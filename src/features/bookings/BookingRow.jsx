import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { format, isToday } from 'date-fns';
import { HiArrowDownOnSquare, HiEye } from 'react-icons/hi2';

import Menus from '../../ui/Menus';
import Table from '../../ui/Table';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';

import './BookingRow.scss';

function BookingRow({
  booking: {
    id: bookingId,
    // created_at,
    start_date,
    end_date,
    // num_guests,
    num_nights,
    total_price,
    status,
    guests: { full_name: guest_name, email },
    apartments: { apartment: apartment_name },
  },
}) {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <div className="apartment">{apartment_name}</div>

      <div className="stacked">
        <span>{guest_name}</span>
        <span>{email}</span>
      </div>

      <div className="stacked">
        <span>
          {isToday(new Date(start_date))
            ? 'Hoy'
            : formatDistanceFromNow(start_date)}{' '}
          &rarr; {num_nights} noches
        </span>
        <span>
          {format(new Date(start_date), 'MMM dd yyyy')} &mdash;{' '}
          {format(new Date(end_date), 'MMM dd yyyy')}{' '}
        </span>
      </div>

      <span className={`tag ${status}`}>{status.replace('-', ' ')}</span>

      <div className="amount">{formatCurrency(total_price)}</div>

      <Menus.Menu>
        <Menus.Toggle id={bookingId} />

        <Menus.List id={bookingId}>
          <Menus.Button
            icon={<HiEye />}
            onClick={() => navigate(`/bookings/${bookingId}`)}
          >
            Ver detalles
          </Menus.Button>

          {status === 'unconfirmed' && (
            <Menus.Button
              icon={<HiArrowDownOnSquare />}
              onClick={() => navigate(`/checkin/${bookingId}`)}
            >
              Check in
            </Menus.Button>
          )}
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

BookingRow.propTypes = {
  booking: PropTypes.object,
};

export default BookingRow;
