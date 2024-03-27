import AddApartment from '../features/apartments/AddApartment';
import ApartmentTable from '../features/apartments/ApartmentTable';
import ApartmentTableOperations from '../features/apartments/ApartmentTableOperations';

import './Apartments.scss';

function Apartments() {
  return (
    <>
      <div className="apartments">
        <h1 className="apartments-heading">Apartamentos</h1>
        <ApartmentTableOperations />
      </div>

      <ApartmentTable />

      <AddApartment />
    </>
  );
}

export default Apartments;
