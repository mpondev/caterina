import { useSearchParams } from 'react-router-dom';

import { useApartments } from './useApartments';
import ApartmentRow from './ApartmentRow';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';

function ApartmentTable() {
  const { apartments, isLoading } = useApartments();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('discount') || 'all';

  let filteredApartments;

  if (filterValue === 'all') filteredApartments = apartments;
  if (filterValue === 'no-discount')
    filteredApartments = apartments.filter(
      apartment => apartment.discount === 0
    );
  if (filterValue === 'with-discount')
    filteredApartments = apartments.filter(apartment => apartment.discount > 0);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Apartamento</div>
          <div>Capacidad</div>
          <div>Precio</div>
          <div>Descuento</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredApartments}
          render={apartment => (
            <ApartmentRow apartment={apartment} key={apartment.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ApartmentTable;
