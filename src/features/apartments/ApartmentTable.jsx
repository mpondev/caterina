import { useQuery } from '@tanstack/react-query';

import { getApartments } from '../../services/apiApartments';
import ApartmentRow from './ApartmentRow';
import Spinner from '../../ui/Spinner';

import './ApartmentTable.scss';

function ApartmentTable() {
  const {
    isLoading,
    data: apartments,
    error,
  } = useQuery({
    queryKey: ['apartments'],
    queryFn: getApartments,
  });
  console.log(apartments, error);

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
