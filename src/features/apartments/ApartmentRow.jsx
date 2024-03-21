import PropTypes from 'prop-types';
import { useState } from 'react';

import { useDeleteApartment } from './useDeleteApartment';
import CreateApartmentForm from './CreateApartmentForm';
import { formatCurrency } from '../../utils/helpers';

import './ApartmentRow.scss';

function ApartmentRow({ apartment }) {
  const [showForm, setShowForm] = useState(false);
  const { deleteApartment, isDeleting } = useDeleteApartment();

  const {
    apartment: apartmentName,
    discount,
    id: apartmentId,
    image,
    max_capacity,
    regular_price,
  } = apartment;

  return (
    <>
      <div className="apartmentRow" role="row">
        <img src={image} alt="apartment image" className="apartmentRow--img" />
        <div className="apartmentRow--name">{apartmentName}</div>
        <div>Hasta {max_capacity} personas</div>
        <div className="apartmentRow--price">
          {formatCurrency(regular_price)}
        </div>
        {discount ? (
          <div className="apartmentRow--discount">
            {formatCurrency(discount)}
          </div>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={() => setShowForm(!showForm)}>Editar</button>
          <button
            onClick={() => deleteApartment(apartmentId)}
            disabled={isDeleting}
          >
            Eliminar
          </button>
        </div>
      </div>
      {showForm && <CreateApartmentForm apartmentToEdit={apartment} />}
    </>
  );
}

ApartmentRow.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentRow;
