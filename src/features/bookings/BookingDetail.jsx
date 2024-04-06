import { useNavigate } from 'react-router-dom';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import { useCheckOut } from '../check-in-out/useCheckOut';
import BookingDataBox from './BookingDataBox';
import Spinner from '../../ui/Spinner';

import './BookingDetail.scss';

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckOut();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const { id: bookingId, status } = booking;

  return (
    <>
      <div className="booking-detail">
        <div className="booking-detail--heading">
          <h1>Reserva #{bookingId}</h1>
          <span className={`tag ${status}`}>{status.replace('-', ' ')}</span>
        </div>
        <button className="back-btn" onClick={moveBack}>
          &larr; Volver
        </button>
      </div>

      <BookingDataBox booking={booking} />

      <div className="btn-group">
        {status === 'unconfirmed' && (
          <button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </button>
        )}

        {status === 'checked-in' && (
          <button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
            Check out
          </button>
        )}

        <button className="bck-btn" onClick={moveBack}>
          Volver
        </button>
      </div>
    </>
  );
}

export default BookingDetail;
