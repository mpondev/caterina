import AddApartment from '../features/apartments/AddApartment';
import ApartmentTable from '../features/apartments/ApartmentTable';

import './Apartments.scss';

function Apartments() {
  return (
    <>
      <div className="row">
        <h1>Apartamentos</h1>
        <p>Filtrar / Ordenar</p>
      </div>

      <ApartmentTable />

      <AddApartment />
    </>
  );
}

export default Apartments;
