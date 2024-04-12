import { useNavigate } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi2';

import Logout from '../features/authentication/Logout';
import DarkModeToggle from './DarkModeToggle';

import './HeaderMenu.scss';

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="header-menu">
      <li>
        <button
          className="header-menu--btn"
          onClick={() => navigate('/account')}
        >
          <HiOutlineUser />
        </button>
      </li>
      <li>
        <Logout />
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </ul>
  );
}

export default HeaderMenu;
