import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

import './Modal.scss';

function Modal({ children, onClose }) {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          <HiXMark className="icon" />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  onClose: PropTypes.func,
};

export default Modal;
