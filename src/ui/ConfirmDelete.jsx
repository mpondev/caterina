import PropTypes from 'prop-types';

import './ConfirmDelete.scss';

function ConfirmDelete({ disabled, onCloseModal, onConfirm, resourceName }) {
  return (
    <div className="confirmDelete">
      <h3>Delete {resourceName}</h3>
      <p>
        ¿Está seguro de que quiere eliminar <span>{resourceName}</span>{' '}
        permanentemente? Esta acción no se puede deshacer
      </p>

      <div>
        <button
          className="cancel-btn"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancelar
        </button>
        <button className="delete-btn" disabled={disabled} onClick={onConfirm}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

ConfirmDelete.propTypes = {
  disabled: PropTypes.string,
  onCloseModal: PropTypes.func,
  onConfirm: PropTypes.func,
  resourceName: PropTypes.string,
};

export default ConfirmDelete;
