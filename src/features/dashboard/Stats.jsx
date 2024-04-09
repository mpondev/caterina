import PropTypes from 'prop-types';
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, apartmentsCount }) {
  // 1. Number of bookings
  const numBookings = bookings.length;

  // 2. Total Sales
  const sales = bookings.reduce((acc, cur) => acc + cur.total_price, 0);

  // 3. Total check-ins
  const checkins = confirmedStays.length;

  // 4. Occupancy rate: (number of checked in nights) / (all available nights => num days * num apartments)
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.num_nights, 0) /
    (numDays * apartmentsCount);

  return (
    <>
      <Stat
        title="Reservas"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Ventas"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Ratio de ocupación"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
      />
    </>
  );
}

Stats.propTypes = {
  bookings: PropTypes.array,
  confirmedStays: PropTypes.array,
  apartmentsCount: PropTypes.number,
  numDays: PropTypes.number,
};

export default Stats;
