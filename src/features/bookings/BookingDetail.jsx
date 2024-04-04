import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import BookingDataBox from './BookingDataBox';
import Spinner from '../../ui/Spinner';

import './BookingDetail.scss';

function BookingDetail() {
  const { booking, isLoading } = useBooking();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const { id: bookingID, status } = booking;

  return (
    <>
      <div className="booking-detail">
        <div className="booking-detail--heading">
          <h1>Reserva #{bookingID}</h1>
          <span className={`tag ${status}`}>{status.replace('-', ' ')}</span>
        </div>
        <button className="back-btn" onClick={moveBack}>
          &larr; Volver
        </button>
      </div>

      <BookingDataBox booking={booking} />

      <div className="btn-group">
        <button className="bck-btn" onClick={moveBack}>
          Volver
        </button>
      </div>
    </>
  );
}

export default BookingDetail;
