import BookingTable from '../features/bookings/BookingTable.jsx';
import BookingTableOperations from '../features/bookings/BookingTableOperations';

import './Bookings.scss';

function Bookings() {
  return (
    <>
      <div className="bookings">
        <h1 className="bookings-heading">Reservas</h1>
        <BookingTableOperations />
      </div>

      <BookingTable />
    </>
  );
}

export default Bookings;
