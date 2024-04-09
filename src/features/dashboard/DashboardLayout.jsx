import Stats from './Stats';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import { useApartments } from '../apartments/useApartments';
import Spinner from '../../ui/Spinner';

import './DashboardLayout.scss';

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    isLoading: isLoadingStays,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { apartments, isLoading: isLoadingApartments } = useApartments();

  if (isLoadingBookings || isLoadingStays || isLoadingApartments)
    return <Spinner />;

  console.log(stays);

  return (
    <div className="dashboard-layout">
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        apartmentsCount={apartments.length}
      />
      <div>Actividad para hoy</div>
      <div>Gráfico de duración de estancia</div>
      <div>Gráfico de ventas</div>
    </div>
  );
}

export default DashboardLayout;
