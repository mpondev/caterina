import PropTypes from 'prop-types';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';

import { useCreateApartment } from './useCreateApartment';
import { useDeleteApartment } from './useDeleteApartment';
import CreateApartmentForm from './CreateApartmentForm';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Modal from '../../ui/Modal';
import Table from '../../ui/Table';
import { formatCurrency } from '../../utils/helpers';

import './ApartmentRow.scss';

function ApartmentRow({ apartment }) {
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
    <Table.Row className="apartmentRow">
      <img src={image} alt="apartment image" className="apartmentRow--img" />
      <div className="apartmentRow--name">{apartmentName}</div>
      <div>Hasta {max_capacity} personas</div>
      <div className="apartmentRow--price">{formatCurrency(regular_price)}</div>
      {discount ? (
        <div className="apartmentRow--discount">{formatCurrency(discount)}</div>
      ) : (
        <span>&mdash;</span>
      )}

      <div>
        <button onClick={handleDuplicate} disabled={isCreating}>
          <HiSquare2Stack />
        </button>

        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateApartmentForm apartmentToEdit={apartment} />
          </Modal.Window>

          <Modal.Open opens="delete">
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="apartments"
              disabled={isDeleting}
              onConfirm={() => deleteApartment(apartmentId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

ApartmentRow.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentRow;
