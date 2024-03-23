import PropTypes from 'prop-types';
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

import './Modal.scss';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();

  useEffect(() => {
    function handleClick(evt) {
      if (ref.current && !ref.current.contains(evt.target)) close();
    }
    document.addEventListener('click', handleClick, true);

    return () => document.removeEventListener('click', handleClick, true);
  }, [close]);

  if (name !== openName) return null;

  return createPortal(
    <div className="overlay">
      <div className="modal" ref={ref}>
        <button className="close-btn" onClick={close}>
          <HiXMark className="icon" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  children: PropTypes.array,
  onClose: PropTypes.func,
};

Window.propTypes = {
  children: PropTypes.object,
  name: PropTypes.string,
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
