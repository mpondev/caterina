import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';

import { useCreateApartment } from './useCreateApartment';
import { useDeleteApartment } from './useDeleteApartment';
import CreateApartmentForm from './CreateApartmentForm';
import { formatCurrency } from '../../utils/helpers';

import './ApartmentRow.scss';

function ApartmentRow({ apartment }) {
  const [showForm, setShowForm] = useState(false);
  const { deleteApartment, isDeleting } = useDeleteApartment();
  const { createApartment, isCreating } = useCreateApartment();

  const {
    apartment: apartmentName,
    description,
    discount,
    id: apartmentId,
    image,
    max_capacity,
    regular_price,
  } = apartment;

  function handleDuplicate() {
    createApartment({
      apartment: `Copy of ${apartmentName}`,
      description,
      discount,
      image,
      max_capacity,
      regular_price,
    });
  }

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
          <button onClick={handleDuplicate} disabled={isCreating}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm(!showForm)}>
            <HiPencil />
          </button>
          <button
            onClick={() => deleteApartment(apartmentId)}
            disabled={isDeleting}
          >
            <HiTrash />
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
