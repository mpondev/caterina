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
      <ul>
        <li>
          <NavLink to="/dashboard" className="mainNavLink">
            <HiOutlineHome />
            <span>Inicio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings" className="mainNavLink">
            <HiOutlineCalendarDays />
            <span>Reservas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cabins" className="mainNavLink">
            <HiOutlineHomeModern />
            <span>Apartamentos</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="mainNavLink">
            <HiOutlineUsers />
            <span>Usuarios</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="mainNavLink">
            <HiOutlineCog6Tooth />
            <span>Ajustes</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
