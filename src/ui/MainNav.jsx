import { NavLink } from 'react-router-dom';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';

import './MainNav.scss';

function MainNav() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink to="/dashboard" className="nav-list--link">
            <HiOutlineHome />
            <span>Inicio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings" className="nav-list--link">
            <HiOutlineCalendarDays />
            <span>Reservas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cabins" className="nav-list--link">
            <HiOutlineHomeModern />
            <span>Apartamentos</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-list--link">
            <HiOutlineUsers />
            <span>Usuarios</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="nav-list--link">
            <HiOutlineCog6Tooth />
            <span>Ajustes</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
