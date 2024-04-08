import { useNavigate } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi2';

import Logout from '../features/authentication/Logout';

import './HeaderMenu.scss';

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="header-menu">
      <li>
        <button className="account-btn" onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </button>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
