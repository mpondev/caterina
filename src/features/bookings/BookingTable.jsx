import Menus from '../../ui/Menus';
import Pagination from '../../ui/Pagination';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import BookingRow from './BookingRow';
import { useBookings } from './useBookings';

function BookingTable() {
  const { bookings, count, isLoading } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <p>No se han encontrado reservas</p>;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Apartamento</div>
          <div>Personas</div>
          <div>Fechas</div>
          <div>Status</div>
          <div>Cantidad</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={booking => <BookingRow key={booking.id} booking={booking} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
