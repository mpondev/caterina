import PropTypes from 'prop-types';
import { format, isToday } from 'date-fns';

import Table from '../../ui/Table';
import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';

import './BookingRow.scss';

function BookingRow({
  booking: {
    // id: bookingId,
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
    </Table.Row>
  );
}

BookingRow.propTypes = {
  booking: PropTypes.object,
};

export default BookingRow;
