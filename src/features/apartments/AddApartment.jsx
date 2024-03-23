import { useState } from 'react';
import CreateApartmentForm from './CreateApartmentForm';
import Modal from '../../ui/Modal';

import './AddApartment.scss';

function AddApartment() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="row">
      <button onClick={() => setIsOpenModal(show => !show)}>
        Añadir Apartamento
      </button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateApartmentForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddApartment;
