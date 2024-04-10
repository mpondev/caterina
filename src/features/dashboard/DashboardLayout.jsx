import Stats from './Stats';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import { useApartments } from '../apartments/useApartments';
import DurationChart from './DurationChart';
import SalesChart from './SalesChart';
import TodayActivity from '../check-in-out/TodayActivity';
import Spinner from '../../ui/Spinner';

import './DashboardLayout.scss';

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { apartments, isLoading: isLoadingApartments } = useApartments();

  if (isLoadingBookings || isLoadingStays || isLoadingApartments)
    return <Spinner />;

  return (
    <div className="dashboard-layout">
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        apartmentsCount={apartments.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;
