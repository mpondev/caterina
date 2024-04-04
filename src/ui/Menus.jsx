import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';

import { useOutsideClick } from '../hooks/useOutsideClick';

import './Menus.scss';

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ close, open, openId, position, setPosition }}
    >
      <div>{children}</div>
    </MenusContext.Provider>
  );
}

Menus.propTypes = {
  children: PropTypes.object,
};

function Menu({ children }) {
  return <div className="menu">{children}</div>;
}

Menu.propTypes = {
  children: PropTypes.array,
};

function Toggle({ id }) {
  const { close, open, openId, setPosition } = useContext(MenusContext);

  function handleClick(evt) {
    const rect = evt.target.closest('button').getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === '' || openId !== id ? open(id) : close();
  }

  return (
    <button className="toggle-btn" onClick={handleClick}>
      <HiEllipsisVertical />
    </button>
  );
}

Toggle.propTypes = {
  id: PropTypes.number,
};

function List({ children, id }) {
  const { close, openId, position } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className="menu-list"
      ref={ref}
      style={{
        right: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {children}
    </ul>,
    document.body
  );
}

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  id: PropTypes.number,
};

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button className="menu-btn" onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
