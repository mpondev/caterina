import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import useDarkMode from '../context/useDarkMode';

import './DarkModeToggle.scss';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="toggle-btn">
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}

export default DarkModeToggle;
