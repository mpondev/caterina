// import ApartmentTable from './ApartmentTable';
import CreateApartmentForm from './CreateApartmentForm';
import Modal from '../../ui/Modal';

import './AddApartment.scss';

function AddApartment() {
  return (
    <div>
      <Modal>
        <Modal.Open opens={'apartment-form'}>
          <button className="modal-btn">Añadir Apartamento</button>
        </Modal.Open>
        <Modal.Window name="apartment-form">
          <CreateApartmentForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddApartment;
