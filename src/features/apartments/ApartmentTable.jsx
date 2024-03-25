import { useApartments } from './useApartments';
import ApartmentRow from './ApartmentRow';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';

function ApartmentTable() {
  const { apartments, isLoading } = useApartments();

  if (isLoading) return <Spinner />;

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
          data={apartments}
          render={apartment => (
            <ApartmentRow apartment={apartment} key={apartment.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ApartmentTable;
