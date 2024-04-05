import { useEffect, useState } from 'react';

import { useCheckIn } from './useCheckIn';
import { useMoveBack } from '../../hooks/useMoveBack';
import Checkbox from '../../ui/Checkbox';
import Spinner from '../../ui/Spinner';
import BookingDataBox from '../bookings/BookingDataBox';
import { useBooking } from '../bookings/useBooking';
import { formatCurrency } from '../../utils/helpers';
import { useSettings } from '../settings/useSettings';

import './CheckInBooking.scss';

function CheckInBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.is_paid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckIn();

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    has_breakfast,
    num_guests,
    num_nights,
    total_price,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfast_price * num_nights * num_guests;

  function handleCheckIn() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          has_breakfast: true,
          extras_price: optionalBreakfastPrice,
          total_price: total_price + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <div className="checkin">
        <h1>Check in Reserva #{bookingId}</h1>
        <button className="back-btn" onClick={moveBack}>
          &larr; Volver
        </button>
      </div>

      <BookingDataBox booking={booking} />

      {!has_breakfast && (
        <div className="check-box">
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast(add => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            ¿Quiere añadir desayuno por {formatCurrency(optionalBreakfastPrice)}
            ?
          </Checkbox>
        </div>
      )}

      <div className="check-box">
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid(confirm => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          Confirmo que {guests.full_name} ha pagado la cantidad total de{' '}
          {!addBreakfast
            ? formatCurrency(total_price)
            : `${formatCurrency(
                total_price + optionalBreakfastPrice
              )} (${formatCurrency(total_price)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </div>

      <div className="btn-group">
        <button
          className="checkin-btn"
          onClick={handleCheckIn}
          disabled={!confirmPaid || isCheckingIn}
        >
          Check-in Reserva #{bookingId}
        </button>

        <button className="bck-btn" onClick={moveBack}>
          Volver
        </button>
      </div>
    </>
  );
}

export default CheckInBooking;
