import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import Spinner from '../../ui/Spinner';

import './DashboardLayout.scss';

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const { isLoading: isLoadingStays, stays, confirmedStays } = useRecentStays();

  if (isLoadingBookings || isLoadingStays) return <Spinner />;

  console.log(bookings, stays, confirmedStays);

  return (
    <div className="dashboard-layout">
      <div>Estadísticas</div>
      <div>Actividad para hoy</div>
      <div>Gráfico de duración de estancia</div>
      <div>Gráfico de ventas</div>
    </div>
  );
}

export default DashboardLayout;
