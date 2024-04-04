import SortBy from '../../ui/SortBy';
import Filter from '../../ui/Filter';

function BookingTableOperations() {
  return (
    <div className="table-operations">
      <Filter
        filterField="status"
        options={[
          { value: 'all', label: 'Todo' },
          { value: 'checked-out', label: 'Checked out' },
          { value: 'checked-in', label: 'Checked in' },
          { value: 'unconfirmed', label: 'Unconfirmed' },
        ]}
      />

      <SortBy
        options={[
          {
            value: 'start_date-desc',
            label: 'Ordenar por fecha (más reciente primero)',
          },
          {
            value: 'start_date-asc',
            label: 'Ordenar por fecha (más reciente al final)',
          },
          {
            value: 'total_price-desc',
            label: 'Ordenar por cantidad (más alto primero)',
          },
          {
            value: 'total_price-asc',
            label: 'Ordenar por cantidad (más bajo primero)',
          },
        ]}
      />
    </div>
  );
}

export default BookingTableOperations;
