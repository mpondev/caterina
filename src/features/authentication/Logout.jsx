import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

import './Logout.scss';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button className="logout-btn" disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </button>
  );
}

export default Logout;
