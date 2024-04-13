import PropTypes from 'prop-types';
import { format, isToday } from 'date-fns';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';

import { formatCurrency, formatDistanceFromNow } from '../../utils/helpers';

import './BookingDataBox.scss';

function BookingDataBox({ booking }) {
  const {
    created_at,
    start_date,
    end_date,
    num_nights,
    num_guests,
    apartment_price,
    extras_price,
    total_price,
    has_breakfast,
    observations,
    is_paid,
    guests: { full_name: guestName, email, country, country_flag, national_id },
    apartments: { apartment: apartmentNumber },
  } = booking;

  return (
    <section className="booking-data-box">
      <header className="booking-data-box--header">
        <div>
          <HiOutlineHomeModern />
          <p>
            {num_nights} noches en Apartamento <span>{apartmentNumber}</span>
          </p>
        </div>

        <p>
          {format(new Date(start_date), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(start_date))
            ? 'Today'
            : formatDistanceFromNow(start_date)}
          ) &mdash; {format(new Date(end_date), 'EEE, MMM dd yyyy')}
        </p>
      </header>

      <section className="booking-data-box--section">
        <div className="guest">
          {country_flag && (
            <img src={country_flag} alt={`Flag of ${country}`} />
          )}
          <p>
            {guestName} {num_guests > 1 ? `+ ${num_guests - 1} persona(s)` : ''}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>ID Nacional {national_id}</p>
        </div>

        {observations && (
          <div className="data-item">
            <span className="label">
              <HiOutlineChatBubbleBottomCenterText />
              <span>Observaciones</span>
              {observations}
            </span>
          </div>
        )}

        <div className="data-item">
          <span className="label">
            <HiOutlineCheckCircle />
            <span>¿Desayuno incluído?</span>
          </span>
          {has_breakfast ? 'Sí' : 'No'}
        </div>

        <div className={`price ${is_paid ? 'paid' : 'not-paid'}`}>
          <div className="data-item">
            <span className="label">
              <HiOutlineCurrencyDollar />
              <span>Precio Total</span>
            </span>
            {formatCurrency(total_price)}

            {has_breakfast &&
              ` (${formatCurrency(
                apartment_price
              )} apartamento + ${formatCurrency(extras_price)} desayuno)`}
          </div>

          <p>{is_paid ? 'Pagado' : 'Pagará al llegar'}</p>
        </div>
      </section>

      <footer className="booking-data-box--footer">
        <p>Reservado {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
      </footer>
    </section>
  );
}

BookingDataBox.propTypes = {
  booking: PropTypes.object,
};

export default BookingDataBox;
