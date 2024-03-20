import { useState } from 'react';

import ApartmentTable from '../features/apartments/ApartmentTable';

import './Apartments.scss';
import CreateApartmentForm from '../features/apartments/CreateApartmentForm';

function Apartments() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="row">
        <h1>Apartamentos</h1>
        <p>Filtrar / Ordenar</p>
      </div>

      <ApartmentTable />

      <button onClick={() => setShowForm(show => !show)}>
        Añadir Apartamento
      </button>
      {showForm && <CreateApartmentForm />}
    </>
  );
}

export default Apartments;
