import ApartmentTable from './ApartmentTable';
import CreateApartmentForm from './CreateApartmentForm';
import Modal from '../../ui/Modal';

import './AddApartment.scss';

function AddApartment() {
  return (
    <Modal>
      <Modal.Open opens={'apartment-form'}>
        <button className="modal-btn">Añadir Apartamento</button>
      </Modal.Open>
      <Modal.Window name="apartment-form">
        <CreateApartmentForm />
      </Modal.Window>

      <Modal.Open opens={'table'}>
        <button className="modal-btn">Abrir Tabla</button>
      </Modal.Open>
      <Modal.Window name="table">
        <ApartmentTable />
      </Modal.Window>
    </Modal>
  );
}

// function AddApartment() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div className="row">
//       <button onClick={() => setIsOpenModal(show => !show)}>
//         Añadir Apartamento
//       </button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateApartmentForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddApartment;
