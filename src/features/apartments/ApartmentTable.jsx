import ApartmentRow from './ApartmentRow';
import Spinner from '../../ui/Spinner';

import './ApartmentTable.scss';
import { useApartments } from './useApartments';

function ApartmentTable() {
  const { apartments, isLoading } = useApartments();

  if (isLoading) return <Spinner />;

  return (
    <div className="apartmentTable" role="table">
      <header className="apartmentHeader" role="row">
        <div></div>
        <div>Apartamento</div>
        <div>Capacidad</div>
        <div>Precio</div>
        <div>Descuento</div>
        <div></div>
      </header>
      {apartments.map(apartment => (
        <ApartmentRow apartment={apartment} key={apartment.id} />
      ))}
    </div>
  );
}

export default ApartmentTable;
