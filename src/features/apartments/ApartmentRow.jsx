import PropTypes from 'prop-types';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';

import { useCreateApartment } from './useCreateApartment';
import { useDeleteApartment } from './useDeleteApartment';
import CreateApartmentForm from './CreateApartmentForm';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Menus from '../../ui/Menus';
import Modal from '../../ui/Modal';
import Table from '../../ui/Table';
import { formatCurrency } from '../../utils/helpers';

import './ApartmentRow.scss';

function ApartmentRow({ apartment }) {
  const { deleteApartment, isDeleting } = useDeleteApartment();
  const { createApartment } = useCreateApartment();

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
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={apartment.id} />

            <Menus.List id={apartment.id}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateApartmentForm apartmentToEdit={apartment} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="apartments"
                disabled={isDeleting}
                onConfirm={() => deleteApartment(apartmentId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

ApartmentRow.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentRow;
