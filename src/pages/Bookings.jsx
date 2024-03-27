import BookingTable from '../features/bookings/BookingTable';

import './Bookings.scss';

function Bookings() {
  return (
    <>
      <div className="bookings">
        <h1 className="bookings-heading">Reservas</h1>
      </div>

      <BookingTable />
    </>
  );
}

export default Bookings;
